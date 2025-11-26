import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = ({ isDarkMode, handleToggle }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex justify-center ">
        <div className="bg-white dark:bg-dark-mode dark:text-white border p-4 flex justify-between container max-w-4xl">
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="ml-8 items-center gap-5 md:hidden tablet:inline-flex">
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-2">
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
            {isClicked ? (
              <div className="absolute translate-y-10 -translate-x-23 bg w-[120px] p-2.5 border bg-white rounded-xl animate-pop-over duration-200">
                <button className="w-24 text-left">Light</button>
                <button className="w-24 text-left">Dark</button>
                <button className="w-24 text-left">System</button>
              </div>
            ) : null}

            <GiHamburgerMenu
              size={40}
              className="p-2.5 border rounded-lg tablet:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
