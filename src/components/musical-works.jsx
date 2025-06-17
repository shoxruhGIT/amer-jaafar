import React from "react";

import PlayerPerson from "../assets/player_person.png";
import MusicImg from "../assets/music_img.png"
import { FaPause, FaPlay } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";
import {
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoVolumeMediumSharp,
} from "react-icons/io5";

const MusicalWorks = () => {
  const tracks = [
    {
      title: "Life is a moment",
      artist: "Doctor Amer Jaafar",
      duration: "03:21",
      isActive: true,
      image: PlayerPerson,
    },
    {
      title: "Saher al lial",
      artist: "Doctor Amer Jaafar",
      duration: "03:30",
      image: MusicImg,
    },
    {
      title: "My luck since My existed",
      artist: "Doctor Amer Jaafar",
      duration: "04:10",
      image: MusicImg,
    },
    {
      title: "The bloody wedding",
      artist: "Doctor Amer Jaafar",
      duration: "03:42",
      image: MusicImg,
    },
    {
      title: "Al tandial",
      artist: "Doctor Amer Jaafar",
      duration: "04:10",
      image: MusicImg,
    },
    {
      title: "The word of love",
      artist: "Doctor Amer Jaafar",
      duration: "04:07",
      image: MusicImg,
    },
  ];

  return (
    <div className="w-full max-w-[1225px] mx-auto p-3">
      <h1 className="text-[32px] sm:text-[50px] text-white font-semibold text-left">
        Musical works
      </h1>
      <div className="flex flex-col xl:flex-row items-center justify-between gap-3">
        <div className="w-[430px] h-[628px] bg-[#1B1F24] rounded-[12px] p-5">
          {/* mp3 player */}
          <div className="flex flex-col items-start gap-6">
            {/* banner */}
            <div className="relative w-[365px] h-[366px] ">
              <img
                src={PlayerPerson}
                alt="Player person"
                className="w-full object-cover rounded-[12px]"
              />
              <p
                className="absolute w-[126px] h-[38px] rounded-[8px] flex items-center justify-center text-white top-[300px] left-[120px] text-lg font-normal gap-1"
                style={{
                  background:
                    "linear-gradient(180deg, #E1A23C 0%, #C28727 100%)",
                }}
              >
                <span>
                  <FaPlay />
                </span>
                Play video
              </p>
            </div>
            {/* auther and name of music */}
            <div className="">
              <h1 className="text-2xl text-white font-semibold">
                Life is a moment
              </h1>
              <p className="text-lg font-normal text-neutral-500">
                Doctor Amer Jaafar
              </p>
            </div>
            {/* settings of play */}
            <div className="w-full flex items-center justify-between">
              <BsRepeat className="w-6 h-6 text-white" />
              <div className="flex items-center gap-10 text-white">
                <IoPlaySkipBack className="w-6 h-6" />
                <FaPause className="w-8 h-8" />
                <IoPlaySkipForward className="w-6 h-6" />
              </div>
              <IoVolumeMediumSharp className="w-6 h-6 text-white" />
            </div>

            {/* duration of music */}
            <div className="w-full flex items-center justify-between gap-4">
              <span className="text-neutral-500 text-lg font-normal">
                00:44
              </span>
              <div className="w-full bg-[#2D2F33] rounded-full h-[8px]">
                <div
                  className="bg-[#E0A43B] h-[8px] rounded-full"
                  style={{ width: `80px` }}
                ></div>
              </div>
              <span className="text-neutral-500 text-lg font-normal">
                03:21
              </span>
            </div>
          </div>
        </div>
        {/* filter and list of musics */}
        <div className="w-full max-w-[815px] flex flex-col gap-3">
          <div className="w-full h-full bg-[#1B1F24] rounded-[12px] flex items-center justify-between p-1">
            <button className="w-full h-[46px] bg-[#393F46] text-lg text-white font-normal rounded-[12px] cursor-pointer">
              Dances
            </button>

            <button className="w-full h-[46px] active:bg-[#393F46] text-lg text-white font-normal rounded-[12px] cursor-pointer">
              Musical works + orchestra
            </button>

            <button className="w-full h-[46px] active:bg-[#393F46] text-lg text-white font-normal rounded-[12px] cursor-pointer">
              Songs
            </button>
          </div>
          <div className="w-full h-[560px] bg-[#1B1F24] rounded-[12px] p-2">
            {tracks.map((track, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between rounded-[12px] w-full h-[81px] cursor-pointer text-white p-4 ${
                  track.isActive ? "bg-[#E1A23C26]" : "hover:bg-[#1C1F23]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={track.image}
                    alt="track"
                    className="w-[57px] h-[57px] rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-2xl ">{track.title}</h4>
                    <p className="text-lg text-gray-400">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-normal text-gray-300">
                    {track.duration}
                  </span>
                  {track.isActive && (
                    <FaPlay size={16} className="text-yellow-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicalWorks;
