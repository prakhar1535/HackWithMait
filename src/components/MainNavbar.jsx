// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 relative rounded-lg">
      <div className="absolute inset-0 backdrop-blur"></div>
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo on the left */}
        <div className="text-white font-bold text-xl rounded-lg p-2">
          Your Logo
        </div>

        {/* Navigation Links in the center */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Sign In option on the right */}
        <div className="md:flex items-center space-x-4">
          <a href="#" className="text-white">Sign In</a>

          {/* Responsive Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
