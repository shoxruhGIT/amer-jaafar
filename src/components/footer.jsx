import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#FFFFFF1A] bg-[#0D0F11]">
      <section className="max-w-[1520px] mx-auto flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-between px-4 py-10">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
          />
        </Link>

        {/* Section Links */}
        <div className="flex flex-col gap-2.5 min-w-[150px]">
          <h2 className="text-xl sm:text-2xl font-medium text-white">
            Sections
          </h2>
          <Link to="/about" className="text-neutral-500 text-base sm:text-xl">
            About me
          </Link>
          <Link to="/studio" className="text-neutral-500 text-base sm:text-xl">
            Studio
          </Link>
        </div>

        {/* Page Links */}
        <div className="flex flex-col gap-2.5 min-w-[150px]">
          <h2 className="text-xl sm:text-2xl font-medium text-transparent">
            .
          </h2>{" "}
          {/* invisible title to align height */}
          <Link to="/courses" className="text-neutral-500 text-base sm:text-xl">
            Courses
          </Link>
          <Link to="/blog" className="text-neutral-500 text-base sm:text-xl">
            Blog
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2.5 min-w-[200px]">
          <h2 className="text-xl sm:text-2xl font-medium text-white">
            Contacts
          </h2>
          <h3 className="text-[#E1A23C] text-lg sm:text-[22px] font-semibold underline">
            +998 90 777 11 11
          </h3>
          <p className="text-neutral-500 text-sm sm:text-lg">Phone number</p>
        </div>

        <div className="flex flex-col gap-2.5 min-w-[200px]">
          <h2 className="text-xl sm:text-2xl font-medium text-transparent">
            .
          </h2>
          <h3 className="text-[#E1A23C] text-lg sm:text-[22px] font-semibold underline">
            dramerjaafar@gmail.com
          </h3>
          <p className="text-neutral-500 text-sm sm:text-lg">Email</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2.5 min-w-[150px]">
          <div className="flex items-center gap-3 text-[#E1A23C]">
            <FaYoutube className="w-5 h-5 cursor-pointer" />
            <RiTelegram2Fill className="w-5 h-5 cursor-pointer" />
            <PiInstagramLogoFill className="w-5 h-5 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 cursor-pointer" />
          </div>
          <p className="text-neutral-500 text-sm sm:text-lg">Socials</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
