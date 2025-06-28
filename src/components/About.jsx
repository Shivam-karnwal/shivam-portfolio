// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white min-h-screen flex items-center justify-center"
    >
      <div
        className="max-w-4xl mx-auto p-10 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 transform transition duration-500 hover:scale-[1.02]"
      >
        <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-red-400 text-transparent bg-clip-text">
          🧠 About Me
        </h2>

        <div className="text-lg text-gray-100 space-y-6 leading-relaxed">
          <p>
            I’m <strong className="text-yellow-300">Shivam Karnwal</strong>, an MCA student and passionate <strong className="text-pink-400">Full-Stack Java Developer</strong>.
          </p>

          <p>
            Skilled in <span className="text-blue-400">Java, Spring Boot, MySQL</span> for backend, and <span className="text-green-300">React.js, HTML5, CSS3, JavaScript</span> for frontend development.
          </p>

          <p>
            🚀 Completed internship at <strong className="text-purple-300">J-Spider Noida</strong> with real-world exposure to building web apps.
          </p>

          <p>
            🎯 Solved <span className="text-cyan-300">50+ coding problems</span> and built <span className="text-cyan-300">5+ practical projects</span> that reflect strong development skills.
          </p>
        </div>
      </div>
    </section>
  );
}
