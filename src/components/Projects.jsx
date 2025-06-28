import React from 'react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'Pixel-perfect homepage UI clone with modern layout, search simulation, and cart UI.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    title: 'AI-Based E-Notes',
    description: 'Store and retrieve notes using intelligent keyword filter logic.',
    tech: 'Java, JDBC, MySQL',
  },
  {
    title: 'Weather App',
    description: 'Live weather data via OpenWeather API, responsive interface with search.',
    tech: 'JS, CSS, OpenWeather API',
  },
  {
    title: 'Pizza Ordering System',
    description: 'CRUD desktop app to manage pizza orders with bill generation.',
    tech: 'Java Swing, MySQL',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">📂 Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <Tilt key={i} tiltMaxAngleX={15} tiltMaxAngleY={15} className="rounded-xl shadow-2xl bg-white dark:bg-gray-800 p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{proj.description}</p>
            <p className="text-sm text-gray-500">Tech Stack: {proj.tech}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
}