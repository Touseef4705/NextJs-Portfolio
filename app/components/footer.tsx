import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative max-w-screen-xl mx-auto">
      <hr className="bg-white" />
      <div className="flex p-5 justify-center">
        <h3 className="text-sm md:text-md text-white">
          Designed and{" "}
          Developed by{" "}
          <span className="text-[#4E9F3D]">Touseef Abid</span>
        </h3>
      </div>
      <div className="text-white flex justify-center md:justify-start md:absolute right-10 lg:right-[10%] bottom-0 pb-4 w-full md:w-auto">
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
    </footer>
  );
};

export default Footer;
