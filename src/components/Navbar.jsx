import React, { useState } from 'react';
import profileImg from '../asstes/1000007807.jpg';

export default function Navbar() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-black/30 sticky top-0 backdrop-blur-md z-50 shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src={profileImg}
            alt="Shivam Karnwal"
            className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowImage(true)} // 👉 Show big image
          />
          <h1 className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-300">
            Shivam Karnwal
          </h1>
        </div>

        <div className="space-x-6 text-lg text-white">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative hover:text-yellow-400 transition duration-300 after:block after:absolute after:h-[2px] after:bg-yellow-400 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Full Screen Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowImage(false)}
        >
          <img
            src={profileImg}
            alt="Shivam Karnwal"
            className="w-96 h-96 object-cover rounded-2xl border-4 border-yellow-400 shadow-2xl transition-transform duration-500"
          />
        </div>
      )}
    </>
  );
}
