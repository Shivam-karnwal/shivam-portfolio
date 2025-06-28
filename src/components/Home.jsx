import React, { useState, useEffect } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Shivam Karnwal';
  const speed = 100;

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(typing);
    }, speed);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center h-screen text-center transition-all duration-700 ${
        dark
          ? 'bg-black text-white'
          : 'bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white'
      }`}
    >
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-6 px-4 py-2 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
      >
        {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      <h1 className="text-5xl sm:text-6xl font-bold mb-4">
        👋 Hi, I’m{' '}
        <span className="text-yellow-300 border-b-2 border-yellow-300 animate-pulse">
          {text}
        </span>
      </h1>

      <p className="text-xl sm:text-2xl mt-2 font-light">
        Full-Stack Java Developer | Spring Boot & React Developer
      </p>

      <a
        href="/SHIVAM-KARNWAL-CV.pdf"
        download
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
