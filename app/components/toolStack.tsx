import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiAndroid,
  SiNetlify,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const ToolStack = () => {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden p-4">
      <h1 className="text-4xl italic font-bold text-center pb-10 text-white">
        <span className="text-[#4E9F3D]">Tools</span> I Use
      </h1>
      <div className="w-full overflow-hidden mb-8">
        <ul className="flex gap-3 flex-wrap justify-center py-2">
          {icons.map((item, idx) => (
            <li
              key={idx}
              className="w-[155px] h-[115px] flex flex-col items-center justify-center max-w-full relative rounded-md border border-b-0 flex-shrink-0 border-black px-8 py-5 md:w-[180px] transition-transform duration-300 ease-in-out hover:scale-110"
              style={{
                background: "linear-gradient(150deg, Black, gray)",
              }}
            >
              <div className="text-5xl text-white">{item.component}</div>
              <div className="mt-2 text-center text-white">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const icons = [
  {
    component: <SiVisualstudiocode />,
    name: "VS Code",
  },
  {
    component: <SiAndroid />,
    name: "Android Studio",
  },
  {
    component: <SiGithub />,
    name: "GitHub",
  },
  {
    component: <FaGitAlt />,
    name: "Git",
  },
  {
    component: <SiVercel />,
    name: "Vercel",
  },
  {
    component: <SiNetlify />,
    name: "Netlify",
  },{
    component: <SiPostman />,
    name: "Postman",
  }
];

export default ToolStack;
