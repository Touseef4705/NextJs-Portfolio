"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
// import { url } from "inspector";

export default function About() {
  const imageUrl = "/about.jpg";
  return (
    <div className="max-w-screen-xl mx-auto px-4 p-5">
      <h1 className="text-4xl italic font-bold text-center md:text-start xl:pl-16 text-white">
        <span className="text-[#4E9F3D]">About</span> Me
      </h1>
      <div className="relative flex flex-col items-center justify-center sm:flex-row max-w-screen-xl mx-auto p-3 gap-8">
        {/* small screen profile photo  */}
        <div className="block md:hidden p-3 !w-[100%] border-[1px]  rounded-xl">
          <div className=" flex flex-col justify-center">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Description of image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h1 className="text-center text-2xl font-bold mt-4">
              Touseef Abid
            </h1>
            <h2 className="text-center text-xs">Front-End Developer</h2>
            <div className="flex justify-center gap-3 mt-3">
              <Link
                href="https://github.com/Touseef4705"
                className="font-bold text-xl"
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:touseefabid737@gmail.com"
                className="font-bold text-xl"
              >
                <AiOutlineMail />
              </Link>
              <Link
                href="https://www.linkedin.com/in/touseefabid/"
                className="font-bold text-xl"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/mrtouseef09/"
                className="font-bold text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100084803561855"
                className="font-bold text-xl"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>

        <h3 className="max-w-xl text-center sm:text-left sm:w-1/2 text-md lg:text-lg overflow-hidden text-white">
          I am a MERN Stack Developer with expertise in JavaScript, TypeScript, React, Node.js, Express.js, and MongoDB, along with a strong understanding of modern libraries and frameworks. My focus is on building scalable and responsive full-stack web applications by crafting intuitive user interfaces and developing efficient backend systems. I am committed to continuous learning and staying up-to-date with the latest industry trends to deliver innovative and high-quality solutions.
        </h3>

        <div className="rounded-xl flex flex-col md:!w-[50%] lg:!w-1/3 justify-center">
          <div className="hidden md:block">
            <DirectionAwareHover
              imageUrl={imageUrl}
              className="h-[300px] lg:h-[450px] flex "
            >
              <div className="">
                <div className="flex gap-3 justify-center">
                  <Link
                    href="https://github.com/Touseef4705"
                    className="font-bold text-3xl hover:text-[#4E9F3D] "
                  >
                    <FaGithub size={23} />
                  </Link>
                  <Link
                    href="mailto:touseefabid737@gmail.com"
                    className="font-bold text-3xl hover:text-[#4E9F3D] "
                  >
                    <AiOutlineMail size={23} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/touseefabid/"
                    className="font-bold text-3xl hover:text-[#4E9F3D] "
                  >
                    <FaLinkedin size={23} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mrtouseef09/"
                    className="font-bold text-3xl hover:text-[#4E9F3D] "
                  >
                    <FaInstagram size={23} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100084803561855"
                    className="font-bold text-3xl hover:text-[#4E9F3D] "
                  >
                    <FaFacebook size={23} />
                  </Link>
                </div>
              </div>
            </DirectionAwareHover>
          </div>
        </div>
      </div>
    </div>
  );
}
