import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import about from "./components/data";
import useLocalStorage from "./components/hook/useLocalStorage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const handleLightMode = () => setTheme("light");
  const handleDarkMode = () => setTheme("dark");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div data-theme={theme} className={`w-screen min-h-screen`}>
              <div className="dark:bg-dark-mode dark:text-white w-full min-h-screen transition-colors flex flex-col">
                <Navbar
                  theme={theme}
                  lightMode={handleLightMode}
                  darkMode={handleDarkMode}
                />

                <div className="w-full flex flex-col ">
                  <Hero theme={theme} />
                </div>

                <About card={about} />
                <Contact />

                <Footer />
              </div>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/projects"
          element={
            <div data-theme={theme} className={`w-screen min-h-screen`}>
              <div className="dark:bg-dark-mode dark:text-white w-full min-h-screen transition-colors flex flex-col">
                <Projects
                  exact
                  lightMode={handleLightMode}
                  darkMode={handleDarkMode}
                  theme={theme}
                />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
