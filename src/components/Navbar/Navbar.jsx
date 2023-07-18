import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { navList } from "../../constant/Constant";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  // const [shade, setShade] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    localStorage.setItem("mode", `${open}`);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  const shade = localStorage.getItem("mode");
  console.log(shade);

  if (shade === "true") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" w-full sticky top-0 bg-white dark:bg-[#232931] z-[999]">
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
              {`${open}` === "true" ? (
                <BsMoonStarsFill size={20} />
              ) : (
                <BsSun size={20} />
              )}
            </span>
          </li>
          {navList.map(({ id, name, link }) => (
            <li
              key={id}
              className=" hover:text-[#4ECCA3] duration-300 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="contact" //could be the name of the id
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <span onClick={handleMenu} className="md:hidden z-[999]">
          {menu ? (
            <FaTimes size={20} style={{ color: "#4ECCA3" }} />
          ) : (
            <FaBars size={20} />
          )}
        </span>

        <div
          className={` h-screen top-0 ${
            menu ? "right-0" : "right-[-100%]"
          } md:hidden absolute w-full duration-300 bg-[#fff] dark:bg-[#232931] `}
        >
          <ul className=" flex flex-col gap-8 items-center justify-center capitalize font-semibold cursor-pointer ">
            <li className=" pt-[80px]">
              <span
                onClick={handleOpen}
                className=" hover:text-[#ff0] cursor-pointer"
              >
                {`${open}` === "true" ? (
                  <BsMoonStarsFill size={20} />
                ) : (
                  <BsSun size={20} />
                )}
              </span>
            </li>
            {navList.map(({ id, name, link }) => (
              <li
                key={id}
                className=" py-5 hover:text-[#4ECCA3]"
                onClick={closeMenu}
              >
                <Link
                  activeClass="active"
                  to={link} //could be the name of the id
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
