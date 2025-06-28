import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center min-h-screen flex items-center justify-center"
    >
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-transparent bg-clip-text">
          📬 Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-md"
          >
            🚀 Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-300 space-y-2">
          <p>Connect with me:</p>
          <p>
            <span className="font-semibold text-white">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/shivam-karnwal-14560223a/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-400 hover:text-white"
            >
              Shivam Karnwal
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">GitHub:</span>{' '}
            <a
              href="https://github.com/Shivam-karnwal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-400 hover:text-white"
            >
              Shivam-karnwal
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">LeetCode:</span>{' '}
            <a
              href="https://leetcode.com/u/shivam___karnwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-400 hover:text-white"
            >
              shivam___karnwal
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
