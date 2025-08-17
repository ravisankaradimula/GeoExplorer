import dbConnect from '../../../lib/mongoose';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await dbConnect();
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already registered' });
  const hashed = bcrypt.hashSync(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.status(201).json({ id: user._id, email: user.email });
}
