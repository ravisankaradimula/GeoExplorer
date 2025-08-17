import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongoose';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        if (user && user.password && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user._id, name: user.name, email: user.email };
        }
        throw new Error('Invalid email or password');
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
