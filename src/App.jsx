import { useEffect } from "react";
import Navbar from "./components/partials/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import { about } from "./components/data";
import useLocalStorage from "./components/hook/useLocalStorage";
import Contact from "./components/Contact";
import Footer from "./components/partials/Footer.jsx";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Projects from "./components/Projects";
import PageTransition from "./components/PageTransition";
import FadeSlideUp from "./components/FadeSlideUp";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <Router>
        <ScrollToTop />
        <Navbar
          theme={theme}
          lightMode={handleLightMode}
          darkMode={handleDarkMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PageTransition>
                <div data-theme={theme} className={`overflow-hidden`}>
                  <div className="dark:bg-dark-mode dark:text-white transition-colors flex flex-col pt-16">
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
                  <div className="dark:bg-dark-mode dark:text-white w-full min-h-screen transition-colors flex flex-col pt-16">
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
    </ReactLenis>
  );
}

export default App;
