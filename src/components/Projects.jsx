import Navbar from "./Navbar";

const Projects = ({ theme, lightMode, darkMode, numCard = 5 }) => {
  console.log(lightMode);
  return (
    <div className="h-screen min-w-full">
      <Navbar lightMode={lightMode} theme={theme} darkMode={darkMode} />
      <div className="flex justify-center">
        <div className="mt-20 w-5xl p-4 border ">
          <h1 className="text-3xl font-extrabold">My Projects</h1>
          <p>Here you will find a selection of projects I have worked on.</p>

          <div className="flex flex-wrap justify-center mt-12">
            {[...Array(numCard)].map((projectCards, i) => (
              <div className="w- border"> Projects </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
