import React from "react";
import banner from "../../assets/bannerImg.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const IntroSection = () => {
  return (
    <div className="w-full py-10  mont h-auto md:h-[80%]">
      <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-20">
        <div className=" md:w-1/2 flex flex-col justify-center md:leading-[2]">
          <em className=" mycolor font-bold text-xl md:text-2xl capitalize pt-8">
            Hello i'm
          </em>
          <h1 className=" text-2xl md:text-3xl capitalize font-bold py-2 myblack dark:text-white">
            kingsley Oyeoka!
          </h1>
          <h2 className=" text-base md:text-xl font-semibold pb-5 dark:text-[#CCC]">
            Fullstack web developer
          </h2>
          <p className=" text-[13px] md:text-[15px] dark:text-[#FAFAFA]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut consectetur voluptatem dolores corporis necessitatibus eum illo
            ex itaque ad!
          </p>

          <div className=" flex flex-col md:flex-row gap-5 pt-4">
            <a href="mailto:kingsleyoyeokz@gmail.com">
              <button className=" border-2 px-5 border-[#4ECCA3] mycolor font-semibold rounded-full hover:bg-[#4ECCA3] hover:text-[#444]">
                Hire me
              </button>
            </a>

            <div className=" flex gap-6 items-center">
              <p className=" font-semibold capitalize dark:text-[#EBEBEB]">
                follow me:
              </p>
              <div className=" flex gap-2 ">
                <span className=" border-[1px] p-[2px] border-[#4ECCA3] mycolor rounded-full">
                  <FaFacebookF />
                </span>
                <span className=" border-[1px] p-[2px] border-[#4ECCA3] mycolor rounded-full">
                  <FaTwitter />
                </span>
                <span className=" border-[1px] p-[2px] border-[#4ECCA3] mycolor rounded-full">
                  <FaInstagram />
                </span>
                <span className=" border-[1px] p-[2px] border-[#4ECCA3] mycolor rounded-full">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1  md:w-1/2 flex justify-center">
          <div className=" h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-[#4ECCA3] rounded-tr-[30%] rounded-bl-[30%] relative">
            <img src={banner} alt="banner" className="absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
