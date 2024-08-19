import { RiBuilding2Fill } from "react-icons/ri";

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

export default function Employment() {
  return (
    <div className="w-auto">
      <h2 className="pb-9 text-[33px] italic font-bold text-white">
      <span className="text-[#4E9F3D]">Employment</span> History
      </h2>
      <Timeline>
        <TimelineItem>
          <RiBuilding2Fill className="text-white h-5 w-5" />
          <div>
            <TimelineHeader>
              <h5 className="nunito text-xl text-[#4E9F3D] underline">
                NubitSoft
              </h5>
            </TimelineHeader>
            <TimelineBody>
              <p className="text-white text-sm">
                <span className="font-bold tracking-widest me-1">
                  Front-End Developer:
                </span>
                I&#39;m working as an front-end developer at NubitSoft, where I 
                work on web development with React,
                handle backend tasks, and contribute to real-world projects.
              </p>
            </TimelineBody>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
