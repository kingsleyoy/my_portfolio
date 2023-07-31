import React, { useRef } from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { MdComputer, MdPeopleOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Choose = () => {
  const chooseInfo = [
    {
      title: "Team Player",
      msg: " As a team player, I thrive in collaborative environments,valuing open communicaton and mutual respect",
      logo: <MdPeopleOutline />,
    },
    {
      title: "Creative Design",
      msg: "  Creativity is the core of my design philosophy. With a passion for innovation.",
      logo: <FaVolleyballBall />,
    },
    {
      title: "Responsive",
      msg: "   Being responsive is the key to delivering top-notch results intoday's fast-paced world. I understand the importance of timely communication and feedback",
      logo: <MdComputer />,
    },
  ];
  const scrollRef = useRef(null);
  return (
    <section className="  w-full py-10 md:py-14 mont dark:bg-k2 ">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-5 md:pb-8  dark:text-[#EEEEEE] text-center capitalize">
          Why choose me
        </h3>

        <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-14 ">
          {chooseInfo.map((data, id) => (
            <div ref={scrollRef} key={id}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className=" mx-auto w-[90%] h-[280px] md:h-[300px] grid-cols-1 lg:h-80  rounded-md shadow-2xl bg-[#CCC]"
              >
                <div className=" w-[80%] mx-auto flex flex-col gap-6">
                  <div className=" flex flex-col items-center pt-5">
                    <span className=" mycolor text-[50px] md:text-[60px]">
                      {data.logo}
                    </span>
                    <h3 className=" capitalize font-bold myshade pt-4 text-lg">
                      {data.title}
                    </h3>
                  </div>

                  <div className="text-[12px] md:text-[14px] myshade pb-2 text-center">
                    {data.msg}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
