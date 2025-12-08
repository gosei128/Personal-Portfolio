import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [isDarkMode, setIsDark] = useState(false);

  const handleLightMode = () => {
    setIsDark(false);
  };
  const handleDarkMode = () => {
    setIsDark(true);
  };
  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } w-screen min-h-screen flex items-center flex-col`}
    >
      <div className="dark:bg-dark-mode dark:text-white w-full min-h-screen transition-colors flex flex-col">
        <Navbar
          lightMode={handleLightMode}
          darkMode={handleDarkMode}
          isDarkMode={isDarkMode}
        />
        <div className="w-full flex flex-col ">
          <Hero theme={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
