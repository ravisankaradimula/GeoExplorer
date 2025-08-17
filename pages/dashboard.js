import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status, router]);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, {session?.user?.name || session?.user?.email}!</p>
      <button onClick={() => signOut()} className="mt-4 bg-red-600 text-white p-2 rounded">Sign Out</button>
    </div>
  );
}
