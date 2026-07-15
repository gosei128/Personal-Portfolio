import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
const About = ({
  card,
  title = "Building Digital Experience",
  subtitle = "I specialize in creating stunning user interfaces and developing high-quality applications that stand out.",
}) => {
  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-2 text-md text-gray-600">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-5 w-full mt-5">
          {card.map((info) => (
            <div
              key={info.title}
              className="border border-gray-400/60 dark:hover:shadow-md hover:shadow-xl hover:translate-y-[-2px] dark:border-gray-800 bg-white dark:bg-dark-mode duration-75 transition-all rounded-xl p-6 w-full lg:w-[500px]"
            >
              <h3 className="text-2xl font-semibold mb-1">{info.title}</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">{info.desc}</p>

              {Array.isArray(info.bullets) && info.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-2">
                  {info.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {info.frontEnd && (
                <div className="mt-3">
                  <h4 className="font-semibold text-md ">Front-End & Mobile:</h4>
                  <p className="text-gray-800 text-sm dark:text-gray-400">{info.frontEnd.join(", ")}</p>
                </div>
              )}

              {info.backEnd && (
                <div className="mt-3">
                  <h4 className="font-semibold text-md">Back-End:</h4>
                  <p className="text-gray-800 text-sm dark:text-gray-400">{info.backEnd.join(", ")}</p>
                </div>
              )}

              {info.others && (
                <div className="mt-3">
                  <h3 className="font-semibold text-md">Others:</h3>
                  <p className="text-gray-800 text-sm dark:text-gray-400">{info.others.join(", ")}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link to="/projects" className="self-end">
          <button className="border cursor-pointer w-50 rounded-md p-3 flex flecx items-center border-gray-400 dark:border-gray-800 justify-center gap-2">
            <GrProjects /> View Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
