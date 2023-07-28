import React, { useRef } from "react";
import banner from "../../assets/kings.png";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const IntroSection = () => {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="w-full py-10  mont h-auto md:h-[80%] "
      id="hero"
    >
      <motion.div
        initial={{ opacity: 0.3, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" w-[90%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-20"
      >
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
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className=" text-[13px] md:text-[15px] dark:text-[#FAFAFA]"
          >
            I'm a passionate full-stack developer with a keen eye for creating
            innovative web solutions.
          </motion.p>

          <div className=" flex flex-col md:flex-row gap-5 pt-4">
            <a href="mailto:kingsleyoyeokz@gmail.com">
              <button className=" animate-bounce md:animate-none border-2 px-5 py-1 md:py-[4px] border-[#4ECCA3] mycolor font-semibold rounded-full hover:bg-[#4ECCA3] hover:text-[#444]">
                Hire me
              </button>
            </a>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className=" flex gap-6 items-center"
            >
              <p className=" font-semibold capitalize dark:text-[#EBEBEB]">
                follow me:
              </p>
              <div className=" flex gap-3  ">
                <span className=" border-[1px] p-[2px] text-xl md:text-lg border-[#4ECCA3] mycolor rounded-full hover:bg-[#4ECCA3] hover:text-[#444] hover:scale-110">
                  <FaFacebookF />
                </span>
                <span className=" border-[1px] p-[2px] text-xl md:text-lg border-[#4ECCA3] mycolor rounded-full hover:bg-[#4ECCA3] hover:text-[#444] hover:scale-110">
                  <FaTwitter />
                </span>
                <span className=" border-[1px] p-[2px] text-xl md:text-lg border-[#4ECCA3] mycolor rounded-full hover:bg-[#4ECCA3] hover:text-[#444] hover:scale-110">
                  <FaInstagram />
                </span>
                <span className=" border-[1px] p-[2px] text-xl md:text-lg border-[#4ECCA3] mycolor rounded-full hover:bg-[#4ECCA3] hover:text-[#444] hover:scale-110">
                  <FaLinkedinIn />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" flex-1  md:w-1/2 flex justify-center">
          <div className=" h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-[#4ECCA3] rounded-tr-[30%] rounded-bl-[30%] relative">
            <img src={banner} alt="banner" className="absolute" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
