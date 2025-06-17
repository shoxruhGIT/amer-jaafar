import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";

const Navbar = () => {
  const navs = [
    {
      id: 1,
      to: "/",
      label: "Main",
    },
    {
      id: 2,
      to: "/about",
      label: "About Me",
    },
    {
      id: 3,
      to: "/studio",
      label: "Studio",
    },
    {
      id: 4,
      to: "/courses",
      label: "Courses",
    },
    {
      id: 5,
      to: "/blog",
      label: "Blog",
    },
    {
      id: 6,
      to: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 h-auto border-b border-[#FFFFFF1A] bg-[#0C0D0F]/95 backdrop-blur-md">
      <section className="max-w-[1520px] mx-auto flex flex-wrap items-center justify-between px-4 py-4 gap-6">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={Logo} alt="Logo" className="w-[80px] sm:w-[100px] h-auto" />
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
          {navs?.map((nav) => (
            <NavLink
              key={nav?.id}
              to={nav?.to}
              className={({ isActive }) =>
                `text-base sm:text-xl font-normal text-white transition-all duration-200 ${
                  isActive ? "border-b border-white" : "hover:border-b"
                }`
              }
            >
              {nav?.label}
            </NavLink>
          ))}
        </nav>

        {/* Contact Info & Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-white text-base sm:text-xl font-normal">
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-[#E1A23C] w-5 h-5" />
            <span>+998 90 777 11 11</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-[#E1A23C] w-5 h-5" />
            <span>dramerjaafar@gmail.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3.5 text-[#E1A23C]">
            <FaYoutube className="w-5 h-5 cursor-pointer" />
            <RiTelegram2Fill className="w-5 h-5 cursor-pointer" />
            <PiInstagramLogoFill className="w-5 h-5 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 cursor-pointer" />
          </div>

          {/* Languages */}
          <div className="flex items-center gap-2">
            {["EN", "RU", "AR"].map((lang, i) => (
              <p
                key={i}
                className={`cursor-pointer ${
                  lang === "EN"
                    ? "border-b text-white"
                    : "hover:border-b text-white"
                }`}
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
