import React from "react";
import bannerImg from "../../assets/bannerImg.png";

const IntroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-10 justify-between items-center gap-6 mont">
      <div className=" leading-5 text-center">
        <h3 className=" text-[#4ECCA3] text-2xl font-bold text-center">
          Hello !
        </h3>
        <h3 className=" text-[18px] font-[600] text-[#232931] dark:text-[#EEEEEE]">
          My name is Kingsley Oyeoka
        </h3>
        <h4 className="  text-sm dark:text-[#EEEEEE] text-[#232931] ">
          Fullstack developer
        </h4>
        <div>
          <a href="mailto:kingsleyoyeokz@gmail.com">
            <button className=" py-2 px-8 mycolor rounded-md text-lg mt-4">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div className=" w-52 h-46">
        <img src={bannerImg} alt="banner person" />
      </div>
    </div>
  );
};

export default IntroSection;
