"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { MdDownloadForOffline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export default function Hero() {
  const words = [
    "Front-End Developer",
    "Freelancer",
    "Web Developer",
    "Open Source Contributer",
  ];
  //  Resume Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TouseefAbidCv.pdf";
    link.download = "TouseefAbidCv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[100vh] md:h-[38rem] max-w-7xl mx-auto rounded-md flex items-center justify-center bg-[#191A19] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl flex flex-col items-center mx-auto relative z-10  w-full pt-20 md:pt-0 ">
        <p className="text-md md:text-xl mt-4 mb-3 font-normal text-neutral-300 max-w-xl text-center mx-auto">
          Hello, I&#39;m Touseef Abid
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <FlipWords words={words} className="text-white" />
        </h1>
        <p className=" text-sm md:text-lg mt-4 font-normal text-neutral-300 max-w-xl text-center mx-auto">
          A Passionate MERN Stack Developer 🚀 with expertise in building robust and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in designing seamless user interfaces, developing efficient backend systems, and integrating APIs to deliver end-to-end solutions. Enthusiastic about creating modern, responsive, and dynamic web experiences with a focus on performance and scalability.
        </p>
        <br />
        {/* download Resume Button  */}
        <button className="animated-button" onClick={handleDownload}>
          <MdDownloadForOffline size={24} className="arr-2" />
          <span className="text">Download Resume</span>
          <span className="circle"></span>
          <BiLink size={20} className="arr-1" />
        </button>
        {/* Social Links Here  */}
        <div className="absolute right-5 bottom-0 pb-4 hidden md:block">
          <Link
            href="https://github.com/Touseef4705"
            className="rounded-full p-2 hover:text-[#4E9F3D] transition-colors duration-300"
          >
            <AiFillGithub size={20} />
          </Link>
          <Link
            href="mailto:touseefabid737@gmail.com"
            className="rounded-full p-2 hover:text-[#4E9F3D] transition-colors duration-300"
          >
            <AiOutlineMail size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/touseefabid/"
            className="rounded-full p-2 hover:text-[#4E9F3D] transition-colors duration-300"
          >
            <AiFillLinkedin size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/mrtouseef09/"
            className="rounded-full p-2 hover:text-[#4E9F3D] transition-colors duration-300"
          >
            <AiFillInstagram size={20} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100084803561855"
            className="rounded-full p-2 hover:text-[#4E9F3D] transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
