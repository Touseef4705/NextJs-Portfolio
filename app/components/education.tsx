import { RiSchoolFill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { SiCodersrank } from "react-icons/si";

const Timeline = ({ children }: any) => {
  return <div className="relative">{children}</div>;
};

const TimelineItem = ({ children }: any) => {
  return (
    <div className="flex items-start mb-8 last:mb-0">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 flex items-center justify-center bg-[#12372A] rounded-full mb-2">
          {children[0]}
        </div>
        <div className="h-full border-l-2 border-gray-300"></div>
      </div>
      <div className="ml-4">{children[1]}</div>
    </div>
  );
};

const TimelineHeader = ({ children }: any) => {
  return <div className="flex items-center mb-2">{children}</div>;
};

const TimelineBody = ({ children }: any) => {
  return <div className="text-gray-600">{children}</div>;
};

export default function Education() {
  return (
    <div className="w-auto">
      <h2 className="pb-9 text-[33px] italic font-bold text-white">
      <span className="text-[#4E9F3D]">Learning</span> Journey
      </h2>
      <Timeline>
        <TimelineItem>
          <SiCodersrank className="text-white h-5 w-5" />
          <div>
            <TimelineHeader>
              <h5 className="nunito text-xl text-[#4E9F3D] underline">
                Saylani Mass IT Training
              </h5>
            </TimelineHeader>
            <TimelineBody>
              <p className="text-white text-sm">
                <span className="font-bold">Passing Year :</span> Study Continue... <br />
                <span className="font-bold">Institute :</span> Saylani Mass IT
                Training (SMIT).
                <br />
                <span className="font-bold">Faculty :</span> Web and App
                Development. <br />
                <span className="font-bold ">Description :</span> I completed a
                Web and App Development course at Saylani Mass IT Training
                (SMIT), where I gained expertise in front-end. Here I learned various programming languages,
                frameworks, and tools for developing responsive websites.
              </p>
            </TimelineBody>
          </div>
        </TimelineItem>
        <TimelineItem>
          <IoSchool className="text-white h-5 w-5" />
          <div>
            <TimelineHeader>
              <h5 className="nunito text-xl text-[#4E9F3D] underline">
                Intermediate
              </h5>
            </TimelineHeader>
            <TimelineBody>
              <p className="text-white text-sm capitalize">
                <span className="font-bold">Passing Year :</span> 2024 <br />
                <span className="font-bold">College :</span> Govt College Permier Boys Degree Collage
                <br />
                <span className="font-bold">Faculty :</span> Business Commerce
                <br />
                <span className="font-bold"> Grade :</span> C
              </p>
            </TimelineBody>
          </div>
        </TimelineItem>
        <TimelineItem>
          <RiSchoolFill className="text-white h-5 w-5" />
          <div>
            <TimelineHeader>
              <h5 className="nunito text-xl text-[#4E9F3D] underline">
                Matriculation
              </h5>
            </TimelineHeader>
            <TimelineBody>
              <p className="text-white text-sm">
                <span className="font-bold">Passing Year :</span> 2022 <br />
                <span className="font-bold">School :</span> Tameer-e-Millat Schooling System
                <br />
                <span className="font-bold">Faculty :</span> Science <br />
                <span className="font-bold"> Grade :</span> A+
              </p>
            </TimelineBody>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
