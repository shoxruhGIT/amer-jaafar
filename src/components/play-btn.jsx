import React from "react";

const PlayButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 animate-pulse-slow"
    >
      <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-ping"></div>
      <div className="relative flex items-center justify-center w-full h-full">
        <svg
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-1 transform transition-transform duration-300 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
};

export default PlayButton;
