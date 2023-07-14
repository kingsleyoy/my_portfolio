import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import pic from "../../assets/pic1.jpg";

const Project = () => {
  return (
    <div className=" bg-[#EEEEEE] w-full py-10 md:py-14 mont">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <div className=" md:flex justify-between mb-12">
          <h2 className=" text-xl md:text-2xl font-bold  capitalize myblack md:pb-8 text-center md:text-justify">
            My Project
          </h2>
          <a href="http">
            <button className=" hidden md:flex items-center gap-2 bg-[#4ECCA3] hover:bg-[orange] capitalize px-4 py-2 rounded-xl text-white shadow-lg hover:text-[#232931]">
              <span className=" text-[#EBEBEB]">
                <FaLinkedinIn />
              </span>
              <span>visit my LinkedIn </span>
            </button>
          </a>
        </div>

        <div className=" w-full flex flex-col md:flex-row items-center gap-10 md:items-start md:gap-3 md:flex-wrap">
          <div className=" mx-auto w-[90%] h-[380px] md:w-[350px] md:h-96  rounded-md shadow-2xl group">
            <div className=" h-[60%] overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src={pic}
                alt="picture1"
                className=" object-fill w-full h-[100%]  group-hover:scale-105 rounded-tl-md rounded-tr-md "
              />
            </div>
            <div className=" w-[80%] mx-auto flex flex-col gap-2">
              <h3 className=" pt-3 font-bold text-lg myshade">Ahuse</h3>
              <p className=" text-[12px] md:text-[14px] myshade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, aspernatur.
              </p>
              <a
                href="http"
                className=" font-semibold relative text-[13px] md:text-[15px] mycolor"
              >
                View website
              </a>
            </div>
          </div>

          <div className=" mx-auto w-[90%] h-[380px] md:w-[350px] md:h-96  rounded-md shadow-2xl group">
            <div className=" h-[60%] overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src={pic}
                alt="picture1"
                className=" object-fill w-full h-[100%]  group-hover:scale-105 rounded-tl-md rounded-tr-md "
              />
            </div>
            <div className=" w-[80%] mx-auto flex flex-col gap-2">
              <h3 className=" pt-3 font-bold text-lg myshade">Ahuse</h3>
              <p className=" text-[12px] md:text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, aspernatur.
              </p>
              <a
                href="http"
                className=" font-semibold relative text-[13px] md:text-[15px] mycolor"
              >
                View website
              </a>
            </div>
          </div>

          <div className=" mx-auto w-[90%] h-[380px] md:w-[350px] md:h-96  rounded-md shadow-2xl group">
            <div className=" h-[60%] overflow-hidden rounded-tl-md rounded-tr-md">
              <img
                src={pic}
                alt="picture1"
                className=" object-fill w-full h-[100%]  group-hover:scale-105 rounded-tl-md rounded-tr-md "
              />
            </div>
            <div className=" w-[80%] mx-auto flex flex-col gap-2">
              <h3 className=" pt-3 font-bold text-lg myshade">Ahuse</h3>
              <p className=" text-[12px] md:text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, aspernatur.
              </p>
              <a
                href="http"
                className=" font-semibold relative text-[13px] md:text-[15px] mycolor"
              >
                View website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
