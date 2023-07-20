import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Education from "./Education";
import Experiment from "./Experiment";

const Experience = () => {
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(true);

  const handleForward = () => {
    setForward(!forward);
    setBackward(!backward);
  };

  const handleBackward = () => {
    setForward(!forward);
    setBackward(!backward);
  };
  return (
    <div className=" w-full py-10 md:py-14 " id="experience">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" flex flex-col gap-10 justify-center md:flex-row md:justify-between">
          <h3 className=" text-xl md:text-2xl font-bold myshade  dark:text-[#EEEEEE] text-center md:text-left">
            <span
              className={` relative  after:duration-700  ${
                backward
                  ? "after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-[#4ECCA3] after:w-full"
                  : ""
              } `}
            >
              Education
            </span>
            <span> & </span>
            <span
              className={` relative  after:duration-700  ${
                forward
                  ? "after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-[#4ECCA3] after:w-full"
                  : ""
              } `}
            >
              Experience
            </span>
          </h3>
          <div className=" flex justify-center gap-10">
            <span
              className={` ${
                forward ? "bg-[#4ECCA3]" : "bg-[#EEEEEE]"
              } myblack font-extrabold  flex items-center justify-center p-3 rounded-full`}
              onClick={handleBackward}
            >
              <FiArrowLeft size={20} />
            </span>
            <span
              className={` ${
                backward ? "bg-[#4ECCA3]" : "bg-[#EEEEEE]"
              } myblack font-extrabold  flex items-center justify-center p-3 rounded-full`}
              onClick={handleForward}
            >
              <FiArrowRight size={20} />
            </span>
          </div>
        </div>
        <div className=" w-full md:pl-[250px] flex md:ml-[400px]">
          {forward && <Experiment />}
          {backward && <Education />}
        </div>
      </div>
    </div>
  );
};

export default Experience;
