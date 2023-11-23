import React from 'react';

const HeaderVideo = () => {
  return (
    <div className="w-full h-screen relative mt-40">
      {/* <div className="absolute inset-0 bg-white bg-opacity-25 backdrop-blur-md rounded-xl"></div> */}
      <div className="w-3/4 max-w-screen-lg mx-auto">
        <video
          className="w-full rounded-xl"
          controls
          loop
          autoPlay
          muted
        >
          {/* Add your video source here */}
          <source
            src="maitCampus.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeaderVideo;
