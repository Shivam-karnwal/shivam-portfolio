import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;