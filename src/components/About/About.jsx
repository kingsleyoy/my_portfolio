import React, { useRef } from "react";
import { motion } from "framer-motion";
import Final from "../../assets/final.png";

const About = () => {
  const scrollRef = useRef(null);
  return (
    <section
      ref={scrollRef}
      className=" bg-[#EEEEEE] w-full py-12 md:py-14 lg:py-20 mont h-auto"
      id="about"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className=" w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10"
      >
        <div className=" hidden md:flex md:w-1/2  justify-center">
          <div className=" w-[350px] h-[350px]">
            <img src={Final} alt="About" className=" w-full h-full" />
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-col ">
          <h2 className=" text-xl md:text-2xl font-bold  capitalize myblack pb-5 md:pb-8 text-center md:text-justify">
            About me
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className=" text-[14px] md:text-[15px] font-medium myshade"
          >
            Hello, I'm a passionate and skilled web developer with several years
            of experience in the field of web development
          </motion.p>
          <div className=" w-full flex flex-col gap-4 pt-4 md:pt-0">
            <div className=" w-full leading-10">
              <p className=" myshade text-[14px] md:text-[16px] font-bold">
                HTML/CSS
              </p>
              <div className={` h-[5px] md:h-2 w-full bg-[#393E46] relative `}>
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
              <p className=" myshade text-[14px] font-bold">JavaScript</p>
              <div className={`h-[5px] md:h-2 w-full bg-[#393E46] relative `}>
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
              <p className=" myshade text-[14px] font-bold">React</p>
              <div className={` h-[5px] md:h-2 w-full bg-[#393E46] relative `}>
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
              <p className=" myshade text-[14px] font-bold">Nodejs</p>
              <div className={`h-[5px] md:h-2 w-full bg-[#393E46] relative `}>
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
      </motion.div>
    </section>
  );
};

export default About;
