import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
const Navbar = ({ theme, lightMode, darkMode }) => {
  const [showTheme, setShowTheme] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const fadeOutRef = useRef(null);
  const themeMenuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
      setShowTheme(false);
      setDropDownMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <>
      <div
        className={`bg-white border-b fixed border-gray-400  dark:bg-dark-mode shadow-xl dark:bg-opacity-50 h-fit pb-24 w-full z-50 items-center transition-all duration-200 ease-in-out ${
          dropDownMenu
            ? "translate-y-0  pointer-events-auto"
            : "-translate-y-full  pointer-events-none"
        }`}
      >
        <div className="mt-5 flex flex-col gap-5 items-center text-center p-5">
          <HiOutlineX
            className="self-end cursor-pointer"
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

          <a href="mailto:ronisore360@gmail.com">Contact </a>

          <Link
            to="/projects"
            onClick={() => setDropDownMenu(false)}
            className="block w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-lg duration-100"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex justify-center relative w-full ">
        <div className="bg-white dark:bg-dark-mode dark:text-white fixed p-4 tablet:px-20 flex md:justify-between  lg:justify-around z-30 border-b-2 border-gray-100 dark:border-gray-800 shadow-md rounded-xl container min-w-full">
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-extrabold dark:dark:bg-gradient-to-t from-purple-950 via-purple-500 to-purple-500 bg-clip-text dark:text-transparent">
              {"<Roni.dev/>"}
            </h1>
            <ul className="ml-8 items-center gap-5 md:hidden sm:hidden tablet:inline-flex">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <li>
                <a href="mailto:ronisore360@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2" ref={themeMenuRef}>
            <button
              className="border bg-white dark:bg-[#131316] dark:border-gray-800 border-gray-300 inset-shadow-sm inset-shadow-gray-300 dark:inset-shadow-gray-800 p-2 rounded-lg relative"
              onClick={() => setShowTheme(!showTheme)}
            >
              {theme === "light" ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </button>

            <div
              ref={fadeOutRef}
              className={`absolute translate-y-10 -translate-x-23 w-[120px] p-1 border border-gray-300 shadow-lg bg-white dark:bg-[#131316] dark:border-gray-800 rounded-xl transition-opacity duration-200 ${
                showTheme
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
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
            </div>

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
