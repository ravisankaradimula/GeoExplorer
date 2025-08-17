import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", form);
      router.push("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="max-w-md w-full p-8 bg-white/90 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-3 p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-3 p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {error && (
            <div className="text-red-500 mb-3 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-lg tracking-wide hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
