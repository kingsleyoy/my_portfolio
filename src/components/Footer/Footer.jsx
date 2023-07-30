import React from "react";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="  w-full bg-[#4ECCA3] py-2 md:py-3 mont h-auto ">
      <div className="  w-[90%] md:w-[80%] mx-auto flex justify-center items-center">
        <p className=" myblack text-[12px] md:text-base">
          copyright © {date} Kingsley | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
