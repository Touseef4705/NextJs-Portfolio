"use client";
import React, { useState, useEffect, Suspense } from "react";

// Lazy loaded components
const Navbar = React.lazy(() => import("./components/navbar"));
const Hero = React.lazy(() => import("./components/heroSection"));
const About = React.lazy(() => import("./components/about"));
const ToolStack = React.lazy(() => import("./components/toolStack"));
const Project = React.lazy(() => import("./components/project"));
const ContactUs = React.lazy(() => import("./components/contact"));
const Education = React.lazy(() => import("./components/education"));
const Employment = React.lazy(() => import("./components/employment"));
const TechStack = React.lazy(() => import("./components/techStack"));
const Github = React.lazy(() => import("./components/github"));
const Footer = React.lazy(() => import("./components/footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ease-in-out`}>
      {loading ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col gap-20 justify-center items-center bg-[#191A19]">
          <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1
                className="text-white text-4xl tracking-tighter cursor-pointer custumFont"
              >
                &lt; Touseef <span className="text-[#4E9F3D]">Abid</span> /&gt;
              </h1>
        </div>
      ) : (
    <div className="transition-opacity duration-500 ease-in-out">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Suspense
        fallback={
          <div className="w-full flex justify-center">
            {/* <Loader /> */}
            <div className="loader">loading...</div>
          </div>
        }
      >
        <div className="w-[90%] max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 p-5">
          <Education />
          <Employment />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="toolstack">
          <ToolStack />
          <Github />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <Footer />
      </Suspense>
    </div>
      )}
    </div>
  );
}
