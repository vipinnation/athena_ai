import { Play } from "lucide-react";
import React from "react";

const AIPromo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/divcixw4e/video/upload/v1738675345/Nexo_future_video2_sfhpf8.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full inset-0 bg-black bg-opacity-50 flex items-center justify-around flex-col md:flex-row">
        <div className="w-full px-12 md:w-2/5">
          <div className="text-white ">
            <p className="uppercase text-sm tracking-wide">Watch</p>
            <h1 className="text-2xl sm:text-4xl font-bold">
              How <span className="text-blue-400">NEXO</span> powers Products
              through <span className="text-blue-400">AI</span>
            </h1>
            <p className="mt-4 text-sm md:text-lg text-gray-300">
              NEXO harnesses cutting-edge artificial intelligence to
              revolutionize product development and innovation across multiple
              domains.
            </p>
          </div>
        </div>

        <button className="hidden mt-6 md:flex items-center space-x-3 bg-white text-black  p-6 rounded-full text-lg font-semibold shadow-lg">
          <Play fill="black" className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default AIPromo;
