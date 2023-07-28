import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { navList } from "../../constant/Constant";

const Navbar = () => {
  const [open, setOpen] = useState(localStorage.getItem("mode") === "true");
  const [menu, setMenu] = useState(false);

  const handleOpen = () => {
    const newMode = !open;
    setOpen(newMode);
    localStorage.setItem("mode", newMode.toString());
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode !== null) {
      setOpen(storedMode === "true");
    }
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  if (open) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const closeMenu = () => {
    setMenu(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className=" w-full sticky top-0 bg-white dark:bg-[#232931] z-[999] ">
      <div className=" w-[90%] md:w-[80%] mx-auto flex justify-between items-center h-10 md:h-[60px] mont text-[#555] dark:text-white">
        <h3 className=" font-bold uppercase md:text-xl text-lg z-[999]">
          King<span className=" text-[#4ECCA3]">sley</span>
        </h3>
        <ul className=" hidden md:flex justify-between gap-8 font-bold capitalize">
          <li>
            <span
              onClick={handleOpen}
              className=" hover:text-[#ff0] cursor-pointer"
            >
              {open ? <BsSun size={20} /> : <BsMoonStarsFill size={20} />}
            </span>
          </li>
          {navList.map(({ id, name, link }) => (
            <li
              key={id}
              className=" hover:text-[#4ECCA3] duration-300 cursor-pointer"
            >
              <span
                onClick={() => {
                  scrollToSection(link);
                }}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-[999] flex gap-3 item-center">
          <span
            onClick={handleOpen}
            className=" hover:text-[#ff0] cursor-pointer"
          >
            {open ? <BsSun size={18} /> : <BsMoonStarsFill size={18} />}
          </span>
          <span onClick={handleMenu} className="md:hidden z-[999]">
            {menu ? (
              <FaTimes size={20} style={{ color: "#4ECCA3" }} />
            ) : (
              <FaBars size={20} />
            )}
          </span>
        </div>

        <div
          className={` h-screen top-0 ${
            menu ? "right-0" : "right-[-100%]"
          } md:hidden absolute w-full duration-300 bg-[#fff] dark:bg-[#232931] `}
        >
          <ul className=" flex flex-col gap-8 pt-[80px] items-center justify-center capitalize font-semibold cursor-pointer ">
            {/* <li className=" pt-[80px]">
              <span
                onClick={handleOpen}
                className=" hover:text-[#ff0] cursor-pointer"
              >
                {open ? <BsSun size={20} /> : <BsMoonStarsFill size={20} />}
              </span>
            </li> */}
            {navList.map(({ id, name, link }) => (
              <li
                key={id}
                className=" py-5 hover:text-[#4ECCA3]"
                onClick={closeMenu}
              >
                <span
                  onClick={() => {
                    scrollToSection(link);
                  }}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
