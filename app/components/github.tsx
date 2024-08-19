import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <>
      <h1 className="text-4xl italic font-bold text-center md:text-start xl:pl-16 p-5 lg:max-w-7xl mx-auto text-white">
        <span className="text-[#4E9F3D]">Github</span> Activity
      </h1>
      <div className="flex justify-center items-center pb-10 w-[90%] lg:max-w-7xl mx-auto my-8 overflow-y-auto text-white">
        {/* <div className=""> */}
          <GitHubCalendar
            username="Touseef4705"
            blockSize={12}
            blockMargin={5}
            fontSize={14}
            blockRadius={10}
          />
        {/* </div> */}
      </div>
    </>
  );
}

export default Github;
