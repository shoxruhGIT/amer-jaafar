import React from "react";
import Person from "../assets/person.png";
import StudioGallery from "../components/studio-gallery";
import MusicalWorks from "../components/musical-works";

import LeftSide from "../assets/side_left.png";
import RightSide from "../assets/side_rigt.png";

const HomePage = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="max-w-[1520px] mx-auto min-h-[700px] sm:min-h-[800px] lg:h-[900px] bg-[url('./assets/bg_victor.png')] bg-cover bg-center relative px-4 sm:px-6">
        <div className="relative w-full pt-10 sm:pt-20">
          <h1 className="text-[36px] sm:text-[64px] lg:text-[140px] text-center font-bold text-white leading-tight">
            Doctor Amer Jaafar
          </h1>
          <div className="w-full max-w-[1284px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-white text-base sm:text-lg lg:text-xl font-normal mt-4 sm:mt-6">
            <p>Music Professor</p>
            <p className="text-[#E1A23C] text-center sm:text-right">
              Leading Kuwaiti composer
            </p>
          </div>
          <div className="relative mx-auto mt-10 sm:mt-14 w-[280px] sm:w-[400px] md:w-[550px] lg:w-[713px] h-[400px] sm:h-[600px] lg:h-[890px]">
            <img
              src={Person}
              alt="here is person"
              className="w-full h-full object-cover rounded-[12px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#070809] to-transparent" />
          </div>
        </div>
      </section>

      {/* Studio gallery section */}
      <StudioGallery />

      {/* Musical works section with side images */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 px-4 sm:px-6 py-8">
        {/* Left Side Image */}
        <div
          className="w-full max-w-[328px] h-[328px] bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(7, 8, 9, 0.6) 0%, #070809 100%), url(${LeftSide})`,
          }}
          aria-label="chap tomondagi rasm"
        />

        {/* Center Section */}
        <div className="w-full flex-1 max-w-[1225px]">
          <MusicalWorks />
        </div>

        {/* Right Side Image */}
        <div
          className="w-full max-w-[328px] h-[328px] bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(7, 8, 9, 0.6) 0%, #070809 100%), url(${RightSide})`,
          }}
          aria-label="chap tomondagi rasm"
        />
      </div>
    </main>
  );
};

export default HomePage;
