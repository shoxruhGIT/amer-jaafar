import React from "react";
import Bg from "../assets/contact_bg.png";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";

const ContactPage = () => {
  return (
    <div className="w-full h-auto">
      <div
        className="h-[400px] bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #070809 0%, rgba(7, 8, 9, 0.8) 50%, #070809 100%), url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[80px] font-semibold text-white text-center">
          Contact
        </h1>
      </div>
      <div className="max-w-[1520px] mx-auto flex flex-col md:flex-row items-center gap-4 px-3 ">
        <div className="w-full max-w-[1135px] h-[485px] p-6 bg-[#1B1F24] rounded-[8px] space-y-4">
          <h1 className="font-semibold text-3xl text-white underline decoration-solid">
            Application form
          </h1>
          <div className="flex flex-col gap-4">
            <div className="">
              <label
                htmlFor="full_name"
                className="text-white text-lg font-medium"
              >
                Full name:
              </label>
              <input
                placeholder="Enter"
                type="text"
                className="w-full bg-[#252A30] outline-none px-4 text-white h-[48px] rounded-[8px]"
              />
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="w-full">
                <label
                  htmlFor="phone_number"
                  className="text-white text-lg font-medium"
                >
                  Phone number:
                </label>
                <input
                  type="number"
                  placeholder="Enter"
                  className="w-full bg-[#252A30] outline-none px-4 text-white h-[48px] rounded-[8px]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="full_name"
                  className="text-white text-lg font-medium"
                >
                  Email:
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full bg-[#252A30] outline-none px-4 text-white h-[48px] rounded-[8px]"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="text-white text-lg font-medium"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-[96px] rounded-[8px] text-white p-4 outline-none bg-[#252A30]"
                placeholder="Enter"
              >
                Enter
              </textarea>
            </div>
            <button className="flex items-center justify-center w-[100px] h-[48px] bg-[#E1A23C] text-center text-lg gap-1 rounded-[8px] cursor-pointer hover:pl-4 transform duration-300 ease-in-out">
              Send{" "}
              <span>
                <GoArrowRight className="text-lg" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-[365px] flex flex-col items-center gap-4">
          <div className="w-full md:w-[365px] h-[151px] rounded-[8px] bg-[#1B1F24] flex flex-col items-start p-4 gap-3">
            <HiOutlinePhone className="text-neutral-500 w-[32px] h-[32px]" />
            <p className="text-neutral-500 text-lg font-normal">
              Phone number:
            </p>
            <span className="text-2xl font-semibold text-[#E1A23C] underline decoration-solid">
              +998 90 777 11 11
            </span>
          </div>
          <div className="w-full md:w-[365px] h-[151px] rounded-[8px] bg-[#1B1F24] flex flex-col items-start p-4 gap-3">
            <HiOutlineMail className="text-neutral-500 w-[32px] h-[32px]" />
            <p className="text-neutral-500 text-lg font-normal">Email:</p>
            <span className="text-2xl font-semibold text-[#E1A23C] underline decoration-solid">
              dramerjaafar@gmail.com
            </span>
          </div>
          <div className="w-full md:w-[365px] h-[151px] rounded-[8px] bg-[#1B1F24] flex flex-col items-start justify-between p-4">
            <p className="text-lg font-normal text-neutral-500">Socials</p>
            <div className="flex items-center gap-3.5 text-[#E1A23C]">
              <FaYoutube className="w-5 h-5 cursor-pointer" />
              <RiTelegram2Fill className="w-5 h-5 cursor-pointer" />
              <PiInstagramLogoFill className="w-5 h-5 cursor-pointer" />
              <FaLinkedin className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
