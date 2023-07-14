import React from "react";

const Experiment = () => {
  const eduInfo = [
    {
      id: 1,
      year: "2020 - present",
      heading: "FrontEnd Reactjs Developer",
      content: "online and self-taught",
    },
    {
      id: 2,
      year: "2020 - present",
      heading: " BackEnd Nodejs developer",
      content: "online and self-taught",
    },
  ];
  return (
    <div className=" md:-ml-[300px]">
      <h3 className=" text-lg md:text-xl pb-8 font-semibold myblack dark:text-[#EEEEEE] pt-8 text-[#4ECCA3]">
        Experience
      </h3>
      <div className=" border-l-2 border-l-[#4ECCA3] h-auto flex flex-col relative">
        {eduInfo.map(({ id, year, heading, content }) => (
          <div
            className=" h-[150px] md:h-[200px] flex gap-10 md:gap-40 -ml-[6px] group"
            key={id}
          >
            <span className=" h-2 w-2 p-[5px] rounded-full bg-[#393E46] dark:bg-[#EEEEEE] group-hover:bg-[orange] "></span>
            <div>
              <p className=" mycolor font-bold pb-8"> {year}</p>
              <div className=" leading-8">
                <h3 className=" text-base font-bold myblack dark:text-white ">
                  {heading}
                </h3>
                <p className=" text-sm myshade font-semibold dark:text-[#CCC]">
                  {content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiment;
