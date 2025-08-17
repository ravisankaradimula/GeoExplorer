// pages/index.js
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg text-center">
            Welcome to <span className="text-blue-500">GeoBlast!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
            Learn geography through{" "}
            <span className="font-semibold text-blue-600">fun quizzes</span> and{" "}
            <span className="font-semibold text-blue-600">games</span>.
          </p>
          <Link
            href="/login"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-lg tracking-wide hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
}
