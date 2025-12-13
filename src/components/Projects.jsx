import Navbar from "./Navbar";
import portfolio from "../assets/images/portfolio-screenshot.png";
const Projects = ({ theme, lightMode, darkMode, numCard = 6 }) => {
  console.log(lightMode);
  return (
    <div className="h-screen min-w-full">
      <Navbar lightMode={lightMode} theme={theme} darkMode={darkMode} />
      <div className=" flex justify-center">
        <div className="mt-20 w-5xl p-4 border ">
          <h1 className="text-3xl font-extrabold">My Projects</h1>
          <p>Here you will find a selection of projects I have worked on.</p>

          <div className="flex flex-wrap flex-row gap-2 justify-center w-full mt-12">
            {[...Array(numCard)].map((projectCards, i) => (
              <div className="  size-64 relative  border">
                {/* <img src={portfolio} alt="" className="absolute" /> */}
                <div> hello </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
