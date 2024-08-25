import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-black  p-4 px-10 m-10 text-white rounded-md hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-black  p-4 px-10  text-white rounded-md hover:bg-opacity-50">
          {" "}
          ℹ Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
