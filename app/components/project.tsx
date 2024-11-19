"use client";
import React, { useState } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const projects = [
  {
    title: "Noon.com Clone  ",
    description:
      "I developed a responsive clone of the noon.com website, replicating its user-friendly interface and extensive product catalog. The project features a fully responsive design, ensuring a seamless shopping experience across all devices. This clone demonstrates my ability to recreate complex e-commerce platforms with attention to detail and functionality.",
    button: "https://touseef4705.github.io/noon/",
    imageUrl: "/Project1.PNG",
    backgroundImage: 'url("/Project1.PNG")',
  },
  {
    title: "Salt'n Pepper - Clone",
    description:
      "I developed a clone of the Salt'n Pepper website, capturing its vibrant and stylish design. The project showcases a fully responsive layout, ensuring an optimal user experience on all devices. This clone highlights my ability to replicate intricate design elements and create a seamless, visually appealing interface.",
    button: "https://touseef4705.github.io/salt-n-pepper-/",
    imageUrl: "/Project.PNG",
    backgroundImage: 'url("/Project.PNG")',
  },
  {
    title: "E-Commerce",
    description:
      "I built an e-commerce website using JavaScript and Firebase, featuring product upload, user signup, login, add to cart, and order processing. The site is designed for a seamless user experience, demonstrating my skills in front-end development and backend integration.",
    button: "https://dreamdazzle.vercel.app/",
    imageUrl: "/Project5.PNG",
    backgroundImage: 'url("/Project5.PNG")',
  },
  {
    title: "Old Portfolio",
    description:
      "I developed a single-page portfolio using JavaScript, designed to showcase my skills and projects in a clean and modern interface. The portfolio emphasizes simplicity and efficiency, providing an intuitive user experience while highlighting my expertise in front-end development.",
    button: "https://touseef4705.github.io/New-Portfolio/",
    imageUrl: "/Project3.PNG",
    backgroundImage: 'url("/Project3.PNG")',
  },
  {
    title: "Git Finder App",
    description:
      "A React.js app to search GitHub profiles and view repo details, followers, and stats. It uses the GitHub API for real-time data and highlights my skills in API integration and web development.",
    button: "https://git-finder-nine-olive.vercel.app/",
    imageUrl: "/Project6.PNG",
    backgroundImage: 'url("/Project6.PNG")'
  },
  {
    title: "Attendence Portal",
    description:
      "I developed a student attendance portal using HTML, CSS, and JavaScript. This portal allows for seamless tracking of student attendance, showcasing my ability to create functional and user-friendly web applications with front-end technologies.",
    button: "https://attendance-portal-theta.vercel.app/",
    imageUrl: "/Project7.PNG",
    backgroundImage: 'url("/Project7.PNG")'
  },
  {
    title: "Login & SignUp Form",
    description:
      "I created an animated login and sign form integrated with Firebase Authentication, delivering a smooth and secure user experience. The form features dynamic transitions and interactive elements, ensuring a visually appealing and user-friendly interface for seamless and secure account creation and access.",
    button: "https://touseef4705.github.io/firebase-authentication/",
    imageUrl: "/Project4.PNG",
    backgroundImage: 'url("/Project4.PNG")'
  },

];

export default function Project() {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-4xl italic font-bold text-center md:text-start pl-7 xl:pl-16 text-white">
        <span className="text-[#4E9F3D]">Project </span>Gallery
      </h1>
      <div className="p-10 hidden md:block">
        <StickyScroll
          content={projects.map((project) => ({
            title: project.title,
            description: project.description,
            button: project.button,
            imageUrl: project.imageUrl,
          }))}
        />
      </div>

      <div className="block md:hidden">
        <div className="flex flex-col items-center justify-center h-screen">
          <div
            className="w-[90%] h-64 bg-cover bg-center relative rounded-lg"
            style={{ backgroundImage: projects[currentCard].backgroundImage }}
          ></div>
          <div className="items-center justify-center">
            <p className="text-white text-xl m-5 text-start underline">
              {projects[currentCard].title}
            </p>
            <p className="text-white text-xs !text-start px-5">
              {projects[currentCard].description}
            </p>
            <Link
              href={projects[currentCard].button}
              rel="noopener noreferrer"
              className="text-black font-bold flex items-center justify-center gap-2 m-4 rounded-md bg-[#4E9F3D] text-xs p-2 w-[130px]"
            >
              Live Preview <FaLink className="font-bold text-lg" />
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between w-[90%]">
            <div className="flex items-center">
              <button
                className="text-white px-2 py-2 flex items-center justify-center"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>
              <button
                className="text-white px-2 py-2 flex items-center justify-center"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="mt-2 flex space-x-2">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentCard === index ? "bg-[#4E9F3D]" : "bg-white"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
