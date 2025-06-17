import React from "react";
import Bg from "../assets/about_bg.png";
import LeftImg from "../assets/right_img.png";
import RightImg from "../assets/left_img.png";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";

const AboutPage = () => {
  return (
    <div className="w-full h-auto space-y-4">
      <div
        className="h-[400px] bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #070809 0%, rgba(7, 8, 9, 0.8) 50%, #070809 100%), url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[80px] font-semibold text-white text-center">
          About me
        </h1>
      </div>
      <div className="max-w-[1520px] mx-auto grid grid-cols-1 xl:grid-cols-[auto_1fr_auto] gap-6 items-start p-4">
        {/* left img */}
        <img
          src={LeftImg}
          alt="left"
          className="w-full max-w-[300px] mx-auto xl:mx-0"
        />

        {/* content block */}
        <div className="flex flex-col gap-5">
          {/* Biography */}
          <div className="w-full bg-[#1B1F24] rounded-[8px] p-4 space-y-4">
            <h1 className="text-[24px] md:text-[32px] font-semibold text-white underline">
              Biography
            </h1>
            <p className="text-base md:text-xl text-white font-normal">
              I am Dr. Amer Jaafar, an award-winning composer, lifelong piano
              and Oud performer, and expert in orchestration and music
              direction. With decades of experience in music education and
              production, I have dedicated my career to fostering cultural
              exchange and elevating the musical arts across Kuwait, Uzbekistan,
              and the wider GCC region.
            </p>
          </div>

          {/* Professional Background */}
          <div className="w-full bg-[#1B1F24] rounded-[8px] p-4">
            <h1 className="text-[24px] md:text-[32px] font-semibold text-white flex gap-4 underline">
              Professional Background
              <span className="mt-1 text-[#E1A23C]">
                <FaBriefcase />
              </span>
            </h1>
            <ul className="text-base md:text-xl text-white font-normal list-disc list-inside space-y-2">
              <li>
                Professor of Music and Head of the Music Department at the
                College of Basic Education, Public Authority for Applied
                Education and Training, Kuwait.
              </li>
              <li>
                Extensive teaching experience in Western music history, theory,
                composition, and orchestration in both the United States and
                Kuwait, including at the University of Oregon and the Higher
                Institute of Music for the Peoples in Portland, Oregon.
              </li>
              <li>
                Former Deputy Director of the Music Education Department, with
                expertise in producing TV serials, dramas, and documentaries
                throughout Kuwait and the Gulf.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="w-full bg-[#1B1F24] rounded-[8px] p-4 space-y-4">
            <h1 className="text-[24px] md:text-[32px] font-semibold text-white flex gap-4 underline">
              Education
              <span className="mt-1 text-[#E1A23C]">
                <FaGraduationCap />
              </span>
            </h1>
            <ul className="text-base md:text-xl text-white font-normal list-disc list-inside space-y-2">
              <li>
                Bachelor of Science in Music, Portland State University, Oregon,
                USA (1989)
              </li>
              <li>
                MA in Music Composition, University of Oregon, Eugene, USA
                (1995)
              </li>
              <li>
                Doctorate in the Philosophy of Arts, specializing in Musical
                Composition, Frederic Chopin Academy of Music, Poland (1999)
              </li>
            </ul>
          </div>

          {/* Achievements and Recognition */}
          <div className="w-full bg-[#1B1F24] rounded-[8px] p-4 space-y-4">
            <h1 className="text-[24px] md:text-[32px] font-semibold text-white flex gap-4 underline">
              Achievements and Recognition
              <span className="mt-1 text-[#E1A23C]">
                <GrAchievement />
              </span>
            </h1>
            <ul className="text-base md:text-xl text-white font-normal list-disc list-inside space-y-2">
              <li>
                Led and produced major musical events, including a joint concert
                between Kuwait and Uzbekistan as a “message of peace” (2020),
                and the album “Silk Road” with the Youth of Uzbekistan Orchestra
                (2019).
              </li>
              <li>
                Rearranged and recorded the National Anthem of Kuwait for
                orchestra in Uzbekistan (2013).
              </li>
              <li>
                Composed and distributed music for prominent TV drama series and
                national events, including the FIFA 2014 logo and the emblem of
                the Asian Olympic Council.
              </li>
              <li>
                Founded Harmony Art Production Company, producing renowned TV
                series such as Sahar Al Leil and Al Hadama, which gained
                widespread acclaim in the GCC.
              </li>
            </ul>
          </div>

          {/* Musical Highlights */}
          <div className="w-full bg-[#1B1F24] rounded-[8px] p-4 space-y-4">
            <h1 className="text-[24px] md:text-[32px] font-semibold text-white flex gap-4 underline">
              Musical Highlights
              <span className="mt-1 text-[#E1A23C]">
                <PiInstagramLogoFill />
              </span>
            </h1>
            <ul className="text-base md:text-xl text-white font-normal list-disc list-inside space-y-2">
              <li>
                Composed and distributed numerous national operas and works
                performed by the Cairo Symphony Orchestra at the Egyptian Opera
                House.
              </li>
              <li>
                Created music for television, radio, and major cultural events,
                collaborating with leading singers, writers, and poets from the
                Arab world.
              </li>
              <li>
                Led orchestras and choral departments for national ceremonies,
                including performances in the presence of His Highness the Amir
                of Kuwait.
              </li>
            </ul>
          </div>
        </div>

        {/* right img */}
        <img
          src={RightImg}
          alt="right"
          className="w-full max-w-[300px] mx-auto xl:mx-0"
        />
      </div>
    </div>
  );
};

export default AboutPage;
