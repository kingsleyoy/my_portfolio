import React from "react";
import { FaPhone, FaMailBulk, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="  w-full py-10 md:py-14 mont dark:bg-k2" id="contact">
      <div className="  w-[90%] md:w-[60%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-3 md:pb-8 text-center dark:text-[#EEEEEE] capitalize">
          Contact Me
        </h3>

        <div className=" w-full  mx-auto flex flex-col  md:gap-6 gap-4">
          <div className=" w-full flex flex-col md:gap-6 gap-4">
            <div className=" flex gap-2 md:gap-4 items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2 rounded-full group-hover:animate-spin">
                <FaPhone />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                +2349033556071
              </p>
            </div>
            <div className=" flex gap-2 md:gap-4 items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2  rounded-full group-hover:animate-spin">
                <FaMailBulk />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                kingsleyoyeokz@gmail.com
              </p>
            </div>
            <div className=" flex gap-2 md:gap-4  items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2  rounded-full group-hover:animate-spin">
                <FaLocationArrow />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                Nigeria
              </p>
            </div>
          </div>
          <div className=" w-full ">
            <form action="" className="">
              <label
                htmlFor="name"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium "
              >
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Your Name*"
                className=" dark:bg-[#393E46] bg-[#CCC] rounded-md"
              />
              <br />
              <label
                htmlFor="address"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium"
              >
                Email Adress
              </label>
              <br />
              <input
                type="text"
                placeholder="E-mail Address"
                className=" dark:bg-[#393E46] bg-[#CCC] rounded-md"
              />
              <br />
              <label
                htmlFor="message"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium"
              >
                Message
              </label>
              <br />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message*"
                className=" dark:bg-[#393E46] bg-[#CCC] rounded-md"
              ></textarea>
              <br />
              <button
                type="submit"
                className=" bg-[#4ECCA3] px-11 py-2 text-white font-bold hover:bg-orange-400 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
          {/* <div className=" flex flex-col-reverse md:flex-row gap-0 md:gap-5 w-full ">
          <div className=" w-full md:w-[70%]">
            <form action="" className="">
              <label
                htmlFor="name"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium "
              >
                Name
              </label>
              <br />
              <input type="text" placeholder="Enter Name" />
              <br />
              <label
                htmlFor="address"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium"
              >
                Email Adress
              </label>
              <br />
              <input type="text" placeholder="Enter Email" />
              <br />
              <label
                htmlFor="message"
                className=" text-[#232931] dark:text-[#EEEEEE] font-medium"
              >
                Message
              </label>
              <br />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Message"
              ></textarea>
              <br />
              <button
                type="submit"
                className=" bg-[#4ECCA3] px-11 py-2 text-white font-bold hover:bg-orange-400 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
          <div className=" w-full md:w-[30%] flex flex-col py-3 md:py-14 gap-4 justify-center md:gap-14">
            <div className=" flex gap-2 md:gap-4 items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2 rounded-full group-hover:animate-spin">
                <FaPhone />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                +2349033556071
              </p>
            </div>
            <div className=" flex gap-2 md:gap-4 items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2  rounded-full group-hover:animate-spin">
                <FaMailBulk />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                kingsleyoyeokz@gmail.com
              </p>
            </div>
            <div className=" flex gap-2 md:gap-4  items-center group">
              <span className=" bg-[#4ECCA3] text-white p-1 md:p-2  rounded-full group-hover:animate-spin">
                <FaLocationArrow />
              </span>
              <p className=" text-[#232931] text-[14px] md:text-base dark:text-[#EEEEEE] font-bold">
                Nigeria
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
