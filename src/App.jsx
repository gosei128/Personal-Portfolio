import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import about from "./components/data";
import useLocalStorage from "./components/hook/useLocalStorage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
          theme={theme}
          // isDarkMode={isDarkMode}
        />
        <div className="w-full flex flex-col ">
          <Hero theme={theme} />
        </div>

        <About card={about} />
        <Contact />
          <Footer />
      </div>
    </div>
  );
}

export default App;
