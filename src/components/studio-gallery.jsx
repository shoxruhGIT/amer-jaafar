import { useState } from "react";
import PlayButton from "./play-btn";
import StudioThumbnail from "./studio-thumbnail";
import Studio1 from "../assets/studio.png";
import Left from "../assets/left.png";
import Right from "../assets/right.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";

const StudioGallery = () => {
  const [selectedStudio, setSelectedStudio] = useState(0);

  const studios = [
    {
      id: 1,
      title: "Professional Home Studio",
      image: Studio1,
      featured: true,
    },
    {
      id: 2,
      title: "Mixing Console Setup",
      image: Img1,
      featured: false,
    },
    {
      id: 3,
      title: "Recording Booth",
      image: Img2,
      featured: false,
    },
    {
      id: 4,
      title: "Digital Workstation",
      image: Img3,
      featured: false,
    },
    {
      id: 5,
      title: "Analog Equipment",
      image: Img4,
      featured: false,
    },
    {
      id: 6,
      title: "Modern Setup",
      image: Img5,
      featured: false,
    },
  ];

  const handleThumbnailClick = (index) => {
    setSelectedStudio(index);
  };

  const handlePlayClick = () => {
    console.log("Playing studio tour...");
  };

  return (
    <div className="min-h-screen sm:mt-[400px] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-8 group">
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            <img
              src={studios[selectedStudio].image}
              alt={studios[selectedStudio].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="space-y-5">
              {/* Play Button */}
              <div
                className="absolute inset-0 flex items-center justify-center top-[300px] left-[600px] w-[80px] h-[80px] rounded-full cursor-pointer"
                style={{
                  background:
                    "linear-gradient(180deg, #E1A23C 0%, #C28727 100%)",
                }}
              >
                <PlayButton onClick={handlePlayClick} />
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 animate-fade-in">
                  Professional Studio
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {studios.map((studio, index) => (
            <StudioThumbnail
              key={studio.id}
              studio={studio}
              index={index}
              isSelected={selectedStudio === index}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>

        {/* Studio Info */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="w-[50px] h-[50px] rounded-full border border-gray-700 text-center flex items-center justify-center">
            <img src={Left} alt="you can see left vector" />
          </button>
          <button className="w-[50px] h-[50px] rounded-full border border-gray-700 text-center bg-[#E1A23C] flex items-center justify-center">
            <img src={Right} alt="you can see left vector" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudioGallery;
