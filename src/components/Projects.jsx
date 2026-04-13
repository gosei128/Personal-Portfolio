import Navbar from "./partials/Navbar.jsx";
import Footer from "./partials/Footer.jsx";
import { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { projects } from "./data.js";
const Projects = ({ theme, lightMode, darkMode, numCard = 6 }) => {
  const [isHover, setIsHover] = useState(null);

  const handleHover = (currentId) => {
    setIsHover(currentId);
  };
  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <div>
      <Navbar lightMode={lightMode} theme={theme} darkMode={darkMode} />
      <section className="w-full px-6 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-extrabold">My Projects</h1>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
              Here you will find a selection of projects I have worked on.
            </p>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-2 w-full gap-4 md:gap-6 mt-12">
            {projects.map((project, i) => (
              <div
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={handleMouseLeave}
                key={i}
                className="relative border border-gray-400/60 dark:border-gray-800 bg-white dark:bg-dark-mode rounded-xl overflow-hidden hover:shadow-lg transition-shadow  duration-200"
              >
                <img
                  src={project.image}
                  alt={project.projectName}
                  className={`w-full h-auto object-cover transition-transform duration-300 ease-in-out ${
                    isHover === i ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute p-3 inset-0 bg-gradient-to-b from-black/80 to-black/60 text-white z-10 flex flex-col items-start justify-end transition-opacity duration-300 ease-in-out ${
                    isHover === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="">
                    <h1 className="text-xl font-bold hover:underline">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.projectName}
                      </a>
                    </h1>
                    <p className="text-sm">{project.desc}</p>
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="m-1 bg-gray-600 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="self-end flex flex-col p-4 items-center gap-4">
              {" "}
              <LuMessageCircleQuestion size={60} />
              <h1 className="text-xl font-bold">Let's Work Together!</h1>
              <p className="text-lg">
                Have a project in mind? Let's talk about it.
              </p>
              <button className="cursor-pointer border flex items-center justify-center gap-2 border-gray-200 dark:border-gray-700 shadow-lg p-2 bg-white dark:bg-dark-mode hover:bg-gray-100 dark:hover:bg-gray-950 duration-100 w-35 rounded-lg">
                <LuSendHorizontal />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
