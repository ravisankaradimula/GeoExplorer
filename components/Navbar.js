// components/Navbar.js
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
        >
          GeoBlast
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/quizzes"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Quizzes
          </Link>
          <Link
            href="/games"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Games
          </Link>

          {session ? (
            <>
              <span className="text-gray-700">
                Welcome, {session.user.name || "User"}!
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
