import React from 'react';

const HeaderVideo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative mt-40">
      <div className="absolute inset-0 bg-white bg-opacity-25 backdrop-blur-md rounded-xl"></div>
      <video
        className="w-3/4 max-w-screen-lg rounded-xl z-10"
        controls
        loop
        autoPlay
        muted
      >
        {/* Add your video source here */}
        <source
          src="your_video_url.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeaderVideo;
