import React from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { MdComputer, MdPeopleOutline } from "react-icons/md";

const Choose = () => {
  return (
    <div className="  w-full py-10 md:py-14 mont ">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-5 md:pb-8  dark:text-[#EEEEEE] text-center capitalize">
          Why choose me
        </h3>

        <div className=" w-full flex flex-col md:flex-row items-center gap-10 md:items-start md:gap-3 flex-wrap">
          <div className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]">
            <div className=" w-[80%] mx-auto flex flex-col gap-6">
              <div className=" flex flex-col items-center pt-5">
                <span className=" mycolor text-[50px] md:text-[60px]">
                  <MdPeopleOutline />
                </span>
                <h3 className=" capitalize font-bold myshade pt-4 text-lg">
                  Team Player
                </h3>
              </div>

              <div className="text-[12px] md:text-[14px] myshade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quaerat expedita placeat fugit impedit at, voluptatum
              </div>
            </div>
          </div>

          <div className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]">
            <div className=" w-[80%] mx-auto flex flex-col gap-6">
              <div className=" flex flex-col items-center pt-5">
                <span className=" mycolor text-[50px] md:text-[60px]">
                  <FaVolleyballBall />
                </span>
                <h3 className=" capitalize font-bold myshade pt-4 text-lg">
                  Creative Design
                </h3>
              </div>

              <div className="text-[12px] md:text-[14px] myshade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quaerat expedita placeat fugit impedit at, voluptatum
              </div>
            </div>
          </div>

          <div className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]">
            <div className=" w-[80%] mx-auto flex flex-col gap-6">
              <div className=" flex flex-col items-center pt-5">
                <span className=" mycolor text-[50px] md:text-[60px]">
                  <MdComputer />
                </span>
                <h3 className=" capitalize font-bold myshade pt-4 text-lg">
                  Responsive
                </h3>
              </div>

              <div className="text-[12px] md:text-[14px] myshade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quaerat expedita placeat fugit impedit at, voluptatum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
