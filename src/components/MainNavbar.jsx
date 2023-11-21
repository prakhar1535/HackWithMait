// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
  <div className='flex justify-center content-center'>
    <nav style={{ filter: 'blur(10)', width: '70% ', borderRadius: '50px' , border: '1px solid black'}} className="mt-5 bg-gradient-to-r from-purple-200 to-indigo-200 p-4 relative rounded-lg">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo on the left */}
        <div className="text-black font-bold text-xl ml-5 rounded-full p-2">
          Your Logo
        </div>

        {/* Navigation Links in the center */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
        </div>

        {/* Sign In option on the right */}
        <div style={{border: '1px solid black'}} className="md:flex rounded-full bg-white items-center space-x-4 mr-8">
          <a href="#" style={{transition: "ease-in 0.3s"}} className="px-6 py-3 rounded-full hover:bg-indigo-900 text-black hover:text-white">Sign In</a>

          {/* Responsive Menu Button */}
          <div className="md:hidden">
            <button className="text-black">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
