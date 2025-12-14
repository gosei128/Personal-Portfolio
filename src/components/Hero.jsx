import lightAvatar from "../assets/images/3d-avatar-light.png";
import darkAvatar from "../assets/images/3d-avatar-dark.png";
import cvFile from "../assets/Roni_CV (2).pdf";
import { MdAlternateEmail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";

const Hero = ({ theme }) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Roni_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" w-full flex justify-center items-center h-screen md:mt-5 tablet:mt-0 relative overflow-hidden">
      <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-pink-300 dark:bg-red-400 dark:opacity-20 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute top-[20%] right-[20%] w-[450px] h-[450px] bg-purple-300 dark:bg-purple-900 dark:opacity-20  rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-[-10%] right-[45%] w-[350px] h-[350px] bg-blue-300 dark:bg-blue-800 dark:opacity-20 rounded-full blur-3xl opacity-60"></div>

      <div className=" max-w-4xl w-full tablet:h-[400px] flex flex-wrap gap-2 md:gap-6 relative z-10 p-5">
        <div className=" flex justify-center tablet:items-center w-full gap-8 sm:flex-col tablet:flex-row ">
          <img
            src={theme === "light" ? lightAvatar : darkAvatar}
            alt=""
            className="md:w-35 tablet:w-40"
          />
          <div className="md:text-3xl w-full tablet:text-5xl lg:text-6xl">
            <h1 className="md:font-bold tablet:font-extrabold flex">
              Hey, I'm{"\u00A0"}
              <span className="dark:bg-gradient-to-t from-purple-950 via-purple-500 to-purple-500 bg-clip-text dark:text-transparent">
                Roni
              </span>{" "}
              <div className="motion-preset-seesaw-lg">👋</div>
            </h1>
            <h1 className="font-bold">
              {" "}
              A
              <strong className=" dark:bg-gradient-to-t from-purple-950 via-purple-500 to-purple-500 bg-clip-text dark:text-transparent">
                {" "}
                Front-End Developer{" "}
              </strong>
            </h1>
          </div>
        </div>
        {/* CTA Section */}
        <div className="flex flex-col w-full gap-6 ">
          <p className="text-xl ">
            Learning <strong>full-stack </strong> one project at a time -
            blending clean <strong>design </strong> with solid functionality.
          </p>
          <div className="flex gap-5 md:flex-col tablet:flex-row">
            <div className="flex gap-2 ">
              <button
                onClick={handleDownloadCV}
                className="cursor-pointer border flex items-center justify-center gap-2 border-gray-200 dark:border-gray-700 shadow-lg p-2 bg-white dark:bg-dark-mode hover:bg-gray-100 dark:hover:bg-gray-950 duration-100 w-50 rounded-lg"
              >
                <FaRegFilePdf />
                My Resume
              </button>
              <Link to="/projects">
                <button className="cursor-pointer border flex items-center justify-center gap-2 border-gray-200 dark:border-gray-700 duration-100 p-2 shadow-md bg-white dark:bg-dark-mode hover:bg-gray-100 dark:hover:bg-gray-950 w-35 rounded-lg">
                  <GrProjects />
                  Projects
                </button>
              </Link>
            </div>

            <div className="flex gap-10 items-center">
              {"|"}
              <a
                href="https://github.com/gosei128"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/roni-sore-0a42b3394/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
