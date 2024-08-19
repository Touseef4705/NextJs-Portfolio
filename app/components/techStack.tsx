"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from "react-icons/di";
import {
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiMui,
  SiAntdesign,
} from "react-icons/si";

export function TechStack() {
  return (
    <div className="h-auto lg:max-h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden m-9">
      <div>
        <h1 className="text-4xl italic font-bold text-center pb-5 text-white">
          <span className="text-[#4E9F3D]">Tech </span>Expertise
        </h1>
        <div className="w-full overflow-hidden flex items-center justify-center">
          <InfiniteMovingCards items={icons} direction="left" speed="slow" />
        </div>
        <div className="w-full overflow-hidden flex items-center justify-center">
          <InfiniteMovingCards items={icons} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

const icons = [
  {
    component: <DiHtml5 />,
    name: "HTML5",
  },
  {
    component: <DiCss3 />,
    name: "CSS3",
  },
  {
    component: <SiBootstrap />,
    name: "Bootstrap",
  },
  {
    component: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    component: <DiSass />,
    name: "Scss",
  },
  {
    component: <DiJavascript1 />,
    name: "JavaScript",
  },
  {
    component: <SiFirebase />,
    name: "Firebase",
  },
  {
    component: <DiReact />,
    name: "React",
  },
  {
    component: <SiRedux />,
    name: "Redux",
  },
  {
    component: <SiMui />,
    name: "Material UI",
  },
  {
    component: <SiAntdesign />,
    name: "Ant Design",
  },
  {
    component: <DiGit />,
    name: "Git",
  },
];

export default TechStack;
