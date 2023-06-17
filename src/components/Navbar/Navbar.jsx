import React, { useEffect, useState } from "react";
import { navList } from "../../constant/Constant";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" w-full h-10 md:h-16 relative">
      <div className=" h-full flex items-center justify-between max-w-[90%] md:max-w-[80%] text-[#232931] mx-auto dark:text-[#EEEEEE]  ">
        <h1 className=" font-bold text-xl uppercase md:text-2xl z-50">
          King<span className=" text-[#4ECCA3]">sley</span>
        </h1>

        {/* WideScreen NavBar */}
        <div className=" flex items-center justify-center gap-5">
          <span
            onClick={handleTheme}
            className=" cursor-pointer hidden md:block "
          >
            {theme === "dark" ? (
              <span className=" hover:text-[#ff0]">
                <BsSun size={20} color={{ color: "#fff" }} />
              </span>
            ) : (
              <BsFillMoonStarsFill size={20} />
            )}
          </span>
          <ul className="  hidden md:flex items-center justify-center gap-4 text-xl capitalize">
            {navList.map((data) => (
              <li
                key={data.id}
                className=" hover:text-[#4ECCA3] duration-300 cursor-pointer"
              >
                <Link>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile navbar */}
        <span className=" md:hidden duration-300 z-50" onClick={handleOpen}>
          {open ? (
            <span className=" text-[#4ECCA3]">
              <FaTimes size={20} />
            </span>
          ) : (
            <span className=" dark:text-white">
              <FaBars size={20} />
            </span>
          )}
        </span>

        <ul
          className={` absolute top-0 ${
            open ? "right-0" : "-right-[100%]"
          } h-screen w-full bg-white bg-opacity-4 dark:text-[#EEEEEE] text-[#232931] dark:bg-[#26282B] flex flex-col items-center text-xl justify-center capitalize  leading-10 md:hidden duration-300`}
        >
          <li className=" mb-5">
            <span onClick={handleTheme}>
              {theme === "dark" ? (
                <span className=" hover:text-[#ff0]">
                  <BsSun size={20} color={{ color: "#fff" }} />
                </span>
              ) : (
                <BsFillMoonStarsFill size={20} />
              )}
            </span>
          </li>
          {navList.map((data) => (
            <li
              key={data.id}
              className="hover:text-[#4ECCA3] cursor-pointer py-[8px]"
            >
              <Link onClick={() => setOpen(false)}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
