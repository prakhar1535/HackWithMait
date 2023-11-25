// Navbar.js
import React from 'react';

const Navbar = () => {
  
  
  
  return (
  <div className='flex justify-center content-center'>
    <nav style={{ filter: 'blur(10)', width: '70% ', borderRadius: '50px' , border: '1px solid black',backdropFilter: 'blur(50.5px)'}} className="mt-5  p-4 relative rounded-lg">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo on the left */}
        <div className="text-black font-bold text-xl ml-5 rounded-full p-2">
          Your Logo
        </div>

        {/* Navigation Links in the center */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <button onClick={()=>window.location="/"}  className="text-black">Home</button>
          <button onClick={()=>window.location="/explore"} className="text-black">About</button>
          <button onClick={()=>window.location="/nft"} className="text-black">3D NFTs</button>
          <button onClick={() => window.open("https://codingpanda252.github.io/XRAcademy/arlearning.html", "_blank")} className="text-black">AR Learning</button>

          {/* <a href="#" className="text-black"></a> */}
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
