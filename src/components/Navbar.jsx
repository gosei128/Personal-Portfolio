import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
const Navbar = ({ theme, lightMode, darkMode }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const themeMenuRef = useRef(null);

  return (
    <>
      {dropDownMenu ? (
        <div className="bg-white border-b fixed border-gray-400 dark:bg-black shadow-xl dark:bg-opacity-50 h-fit  w-full z-50  items-center -motion-translate-y-in-100">
          <div className="mt-5  flex flex-col gap-5 items-center text-center p-5">
            <HiOutlineX
              className="self-end"
              size={25}
              onClick={() => setDropDownMenu(false)}
            />
            <Link
              to="/"
              onClick={() => setDropDownMenu(false)}
              className="block w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-lg duration-100"
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setDropDownMenu(false)}
              className="block w-full  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-lg duration-100"
            >
              Contact
            </Link>
            <Link
              to="/projects"
              onClick={() => setDropDownMenu(false)}
              className="block w-full  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-lg duration-100"
            >
              Projects
            </Link>
          </div>
        </div>
      ) : null}
      <div className="flex justify-center relative w-full ">
        <div className="bg-white dark:bg-dark-mode dark:text-white fixed p-4 flex md:justify-between  lg:justify-around z-30 border-b-2 border-gray-100 dark:border-gray-800 shadow-md rounded-xl container min-w-full">
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="ml-8 items-center gap-5 md:hidden sm:hidden tablet:inline-flex">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-2" ref={themeMenuRef}>
            <button
              className="border bg-white dark:bg-[#131316] dark:border-gray-800 border-gray-300 inset-shadow-sm inset-shadow-gray-300 dark:inset-shadow-gray-800 p-2 rounded-lg relative"
              onClick={() => setIsClicked(!isClicked)}
            >
              {theme === "light" ? (
                <MdOutlineDarkMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )}
            </button>
            {/* Drop down theme */}
            {isClicked ? (
              <div className="absolute translate-y-10 -translate-x-23 bg w-[120px] p-1 border border-gray-300 shadow-lg bg-white dark:bg-[#131316] dark:border-gray-800 rounded-xl motion-preset-fade ">
                <button
                  className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md"
                  onClick={lightMode}
                >
                  Light
                </button>
                <button
                  className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md"
                  onClick={darkMode}
                >
                  Dark
                </button>
                <button className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md">
                  System
                </button>
              </div>
            ) : null}

            <GiHamburgerMenu
              size={40}
              className=" border tablet:hidden bg-white dark:bg-[#131316] dark:border-gray-800 border-gray-300 inset-shadow-sm inset-shadow-gray-300 dark:inset-shadow-gray-800 p-2 rounded-lg"
              onClick={() => setDropDownMenu(!dropDownMenu)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
