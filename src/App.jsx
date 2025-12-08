import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useLocalStorage from "./components/hook/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage(["theme", "dark"]);

  const handleLightMode = () => {
    setTheme("dark");
  };
  const handleDarkMode = () => {
    setTheme("light");
  };
  return (
    <div
      data-theme={theme}
      className={`${
        theme === "light" ? "dark" : "light"
      } w-screen min-h-screen flex items-center flex-col`}
    >
      <div className="dark:bg-dark-mode dark:text-white w-full min-h-screen transition-colors flex flex-col">
        <Navbar
          lightMode={handleLightMode}
          darkMode={handleDarkMode}
          // isDarkMode={isDarkMode}
        />
        <div className="w-full flex flex-col ">
          <Hero theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
