import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, lightMode, darkMode }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target)
      ) {
        setIsClicked(false);
        setDropDownMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      {dropDownMenu ? (
        <div className="bg-blue-400 absolute w-full z-10  items-center animate-drop-down">
          <div className="mt-5 flex flex-col gap-5 items-center p-5">
            <a>Home</a>
            <a>Projects</a>
            <a>Contacts</a>
          </div>
        </div>
      ) : null}
      <div className="flex justify-center relative ">
        <div className="bg-white dark:bg-dark-mode dark:text-white border fixed p-4 flex justify-between container max-w-4xl">
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="ml-8 items-center gap-5 md:hidden sm:hidden tablet:inline-flex">
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-2" ref={themeMenuRef}>
            <button
              className="border p-2 rounded-lg relative"
              onClick={() => setIsClicked(!isClicked)}
            >
              {isDarkMode ? (
                <MdOutlineDarkMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )}
            </button>
            {/* Drop down theme */}
            {isClicked ? (
              <div className="absolute translate-y-10 -translate-x-23 bg w-[120px] p-2.5 border bg-white dark:bg-dark-mode rounded-xl motion-preset-fade ">
                <button className="w-24 text-left" onClick={lightMode}>
                  Light
                </button>
                <button className="w-24 text-left" onClick={darkMode}>
                  Dark
                </button>
                <button className="w-24 text-left">System</button>
              </div>
            ) : null}

            <GiHamburgerMenu
              size={40}
              className="p-2.5 border rounded-lg tablet:hidden"
              onClick={() => setDropDownMenu(!dropDownMenu)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
