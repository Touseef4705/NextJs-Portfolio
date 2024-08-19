"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";


const scrollToSection = (id: any) => {
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + window.pageYOffset - 70;
  const distance = targetY - startY;
  const duration = 1000; // duration in ms
  let startTime: any = null;

  const easeInOutCubic = (t: any) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const scroll = (currentTime: any) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-lg mx-auto top-0 left-0 right-0 fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <h1
                onClick={() => scrollToSection("hero")}
                className="text-black text-2xl tracking-tighter cursor-pointer custumFont"
              >
                &lt; Touseef <span className="text-[#4E9F3D]">Abid</span> /&gt;
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline ml-[-90px] gap-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-800 flex gap-1 hover:text-[#4E9F3D] px-3 py-2 rounded-3xl 4E9F3D text-sm font-medium transition-colors duration-300 ease-in-out "
              >
                <AiFillHome size={20} />
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 flex gap-1 hover:text-[#4E9F3D] px-3 py-2 rounded-3xl 4E9F3D text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                <CgProfile size={20} />
                About
              </button>
              <button
                onClick={() => scrollToSection("project")}
                className="text-gray-800 flex gap-1 hover:text-[#4E9F3D] px-3 py-2 rounded-3xl 4E9F3D text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                <GiNotebook size={20} />
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 flex gap-1 hover:text-[#4E9F3D] px-3 py-2 rounded-3xl 4E9F3D text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                <BiSolidContact size={20} />
                Contact
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 hidden md:block">
              <Image
                className="h-10 w-10 rounded-full cover"
                src='/icon.jpg'
                alt="Avatar"
                width={40}
                height={40}
              />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 "
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ${
          isOpen ? "max-h-screen ease-in" : "max-h-0 overflow-hidden ease-out"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center">
          <hr className="!bg-black h-[1px] w-full" />
          <button
            onClick={() => {
              scrollToSection("hero");
              setIsOpen(false);
            }}
            className="rounded-3xl 4E9F3D text-gray-800 hover:text-[#4E9F3D] block px-3 py-2 text-base font-medium text-center"
          >
            <h1 className="flex gap-1">
              <AiFillHome size={20} />
              Home
            </h1>
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="rounded-3xl 4E9F3D text-gray-800 hover:text-[#4E9F3D] block px-3 py-2 text-base font-medium text-center"
          >
            <h1 className="flex gap-1">
              <CgProfile size={20} />
              About
            </h1>
          </button>
          <button
            onClick={() => {
              scrollToSection("project");
              setIsOpen(false);
            }}
            className="rounded-3xl 4E9F3D text-gray-800 hover:text-[#4E9F3D] block px-3 py-2 text-base font-medium text-center"
          >
            <h1 className="flex gap-1">
              <GiNotebook size={20} />
              Projects
            </h1>
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="rounded-3xl 4E9F3D !mb-4 text-gray-800 hover:text-[#4E9F3D] block px-3 py-2 text-base font-medium text-center"
          >
            <h1 className="flex gap-1">
              <BiSolidContact size={20} />
              Contact
            </h1>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
