import React, { useRef } from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { MdComputer, MdPeopleOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Choose = () => {
  const scrollRef = useRef(null);
  return (
    <div className="  w-full py-10 md:py-14 mont ">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-5 md:pb-8  dark:text-[#EEEEEE] text-center capitalize">
          Why choose me
        </h3>

        <div className=" w-full flex flex-col md:flex-row items-center gap-10 md:items-start md:gap-3 flex-wrap">
          <div ref={scrollRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]"
            >
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
                  As a team player, I thrive in collaborative environments,
                  valuing open communicaton and mutual respect.
                </div>
              </div>
            </motion.div>
          </div>

          <div ref={scrollRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]"
            >
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
                  Creativity is the core of my design philosophy. With a passion
                  for innovation.
                </div>
              </div>
            </motion.div>
          </div>

          <div ref={scrollRef}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className=" mx-auto w-[90%] h-[250px] md:w-[350px] md:h-70  rounded-md shadow-2xl bg-[#CCC]"
            >
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
                  Being responsive is the key to delivering top-notch results in
                  today's fast-paced world. I understand the importance of
                  timely communication and feedback
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
