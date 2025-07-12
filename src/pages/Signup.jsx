// src/pages/Signup.jsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Signup() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black px-4">
      <div
        ref={formRef}
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Sign Up
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Already have an account? <a href="/login" className="text-yellow-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
