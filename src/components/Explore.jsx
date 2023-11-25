import React from 'react';
import ExploreUs3d from './ExploreUs3d';


const ExploreUsPage = () => {
  return (
    <div className="container mx-auto mt-16">
      {/* Virtual Hackathons Section */}
      <ExploreUs3d/>
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Virtual Hackathons</h2>
        <p className="text-lg mb-4">
          Explore our virtual spaces designed for collaborative work during hackathons.
        </p>
        {/* Video for Reference */}
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-auto"
            // controls
          loop
          autoPlay
          muted
          >
            <source
              src="maitLibrary.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Campus Join Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Campus Join</h2>
        <p className="text-lg mb-4">
          Experience real-time interactions with multiple visitors in our virtual campus.
        </p>
        {/* Video for Reference */}
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg">
          <img src="/d.jpg" alt="" className='w-full h-auto' />
        </div>
      </section>

      {/* Upcoming Webinars and Sessions Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Upcoming Webinars and Sessions</h2>
        {/* Accordion for Webinars and Sessions */}
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          {/* Example Accordion Item */}
          <div className="border border-gray-300 rounded-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Webinar Title 1</h3>
            <p>Date and Time: December 1, 2023 - 3:00 PM</p>
            <p>Speaker: John Doe</p>
          </div>

          {/* Add more accordion items as needed */}
        </div>
      </section>
    </div>
  );
};

export default ExploreUsPage