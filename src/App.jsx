import { useEffect } from "react";
import Navbar from "./components/partials/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import { about } from "./components/data";
import useLocalStorage from "./components/hook/useLocalStorage";
import Contact from "./components/Contact";
import Footer from "./components/partials/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import PageTransition from "./components/PageTransition";
import FadeSlideUp from "./components/FadeSlideUp";

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
            <PageTransition>
              <div data-theme={theme} className={``}>
                <div className="  dark:bg-dark-mode dark:text-white overflow-y-hidden transition-colors flex flex-col">
                  <Navbar
                    theme={theme}
                    lightMode={handleLightMode}
                    darkMode={handleDarkMode}
                  />

                  <FadeSlideUp delay={100}>
                    <div className="w-full flex flex-col">
                      <Hero theme={theme} />
                    </div>
                  </FadeSlideUp>

                  <FadeSlideUp delay={0}>
                    <About card={about} />
                  </FadeSlideUp>

                  <FadeSlideUp delay={0}>
                    <Contact />
                  </FadeSlideUp>

                  <FadeSlideUp delay={0}>
                    <Footer />
                  </FadeSlideUp>
                </div>
              </div>
            </PageTransition>
          }
        ></Route>
        <Route
          exact
          path="/projects"
          element={
            <PageTransition>
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
            </PageTransition>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
