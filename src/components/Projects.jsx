import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Navbar from "./Navbar";

const Projects = ({ theme, lightMode, darkMode }) => {
  console.log(lightMode);
  return (
    <div>
      <Navbar lightMode={lightMode} theme={theme} darkMode={darkMode} />
      <div className="mt-20">
        <h1>My Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
