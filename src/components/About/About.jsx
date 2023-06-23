import React from "react";
import Aboutme from "../../assets/About.png";

const About = () => {
  return (
    <div className=" bg-[#EEEEEE] w-full py-8 mont">
      <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10">
        <div className=" hidden md:flex md:w-1/2  justify-center">
          <div className=" w-[350px] h-[350px]">
            <img src={Aboutme} alt="About" className=" w-full h-full" />
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-col ">
          <h2 className=" text-xl md:text-2xl font-bold mt-3 capitalize myblack pb-5 md:pb-8 text-center md:text-justify">
            About me
          </h2>
          <p className=" text-[15px] font-medium myshade">
            Hello, I'm a passionate and skilled wed developer with several years
            of experience in the field of web development
          </p>
          <div className=" w-full flex flex-col gap-4">
            <div className=" w-full leading-10">
              <p className=" myshade font-bold">HTML/CSS</p>
              <div className={` h-2 w-full bg-[#393E46] relative `}>
                <div
                  className={`absolute left-0 top-0 bottom-0 h-full w-[95%] flex items-center`}
                >
                  <div className=" bg-[#4ECCA3] w-full h-full"></div>
                  <span className=" p-[5px] rounded-full bg-[#4ECCA3] flex justify-center items-center">
                    <span className=" p-[3px] rounded-full bg-white "></span>
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full leading-10">
              <p className=" myshade font-bold">JavaScript</p>
              <div className={` h-2 w-full bg-[#393E46] relative `}>
                <div
                  className={`absolute left-0 top-0 bottom-0 h-full w-[85%] flex items-center`}
                >
                  <div className=" bg-[#4ECCA3] w-full h-full"></div>
                  <span className=" p-[5px] rounded-full bg-[#4ECCA3] flex justify-center items-center">
                    <span className=" p-[3px] rounded-full bg-white "></span>
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full leading-10">
              <p className=" myshade font-bold">React</p>
              <div className={` h-2 w-full bg-[#393E46] relative `}>
                <div
                  className={`absolute left-0 top-0 bottom-0 h-full w-[95%] flex items-center`}
                >
                  <div className=" bg-[#4ECCA3] w-full h-full"></div>
                  <span className=" p-[5px] rounded-full bg-[#4ECCA3] flex justify-center items-center">
                    <span className=" p-[3px] rounded-full bg-white "></span>
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full leading-10">
              <p className=" myshade font-bold">Nodejs</p>
              <div className={` h-2 w-full bg-[#393E46] relative `}>
                <div
                  className={`absolute left-0 top-0 bottom-0 h-full w-[80%] flex items-center`}
                >
                  <div className=" bg-[#4ECCA3] w-full h-full"></div>
                  <span className=" p-[5px] rounded-full bg-[#4ECCA3] flex justify-center items-center">
                    <span className=" p-[3px] rounded-full bg-white "></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
