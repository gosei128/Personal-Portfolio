import Footer from "./partials/Footer.jsx";
import { useState } from "react";
import Swal from "sweetalert2";
import { 
  LuSendHorizontal, 
  LuMessageCircleQuestion, 
  LuSparkles, 
  LuExternalLink, 
  LuLayers,
  LuAtom
} from "react-icons/lu";
import { projects } from "./data.js";
import { Laptop, Phone, PhoneIcon, Smartphone } from "lucide-react";

const CardCorners = ({ colorClass }) => (
  <>
    {/* Top-left */}
    <span className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${colorClass} rounded-tl-sm pointer-events-none z-10`} />
    {/* Top-right */}
    <span className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${colorClass} rounded-tr-sm pointer-events-none z-10`} />
    {/* Bottom-left */}
    <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${colorClass} rounded-bl-sm pointer-events-none z-10`} />
    {/* Bottom-right */}
    <span className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${colorClass} rounded-br-sm pointer-events-none z-10`} />
  </>
);

const getProjectStyle = (index) => {
  const styles = [
    { 
      border: "border-cyan-400", 
      hover: "hover:border-cyan-400/50", 
      icon: <LuAtom className="text-red-400 w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />, 
      bg: "bg-zinc-100 dark:bg-zinc-950/40" 
    },
    { 
      border: "border-blue-500", 
      hover: "hover:border-blue-500/50", 
      icon: <LuLayers className="text-blue-500 w-5 h-5" />, 
      bg: "bg-blue-950/5 dark:bg-blue-950/20" 
    },
    { 
      border: "border-purple-500", 
      hover: "hover:border-purple-500/50", 
      icon: <Laptop className="text-purple-400 w-5 h-5" />, 
      bg: "bg-purple-950/5 dark:bg-purple-950/20" 
    },
    { 
      border: "border-pink-500", 
      hover: "hover:border-pink-500/50", 
      icon: <Smartphone className="text-pink-400 w-5 h-5" />, 
      bg: "bg-pink-950/5 dark:bg-pink-950/20" 
    }
  ];
  return styles[index % styles.length];
};

const Projects = ({ theme, lightMode, darkMode }) => {
  const onContactSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "34cc1d89-97ed-41f5-926e-01d1a2377d48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Thank You!",
        text: "I appreciate your interest and will get back to you shortly.",
        icon: "success",
        theme: "auto",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full mt-24 pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white text-zinc-900">
              My Projects
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-base md:text-lg">
              Here you will find a selection of projects I have worked on.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
            
            {/* Dynamic Projects Rendering */}
            {projects.map((project, i) => {
              const style = getProjectStyle(i);
              return (
                <div 
                  key={i} 
                  className={`lg:col-span-6 relative border border-gray-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 rounded-2xl overflow-hidden shadow-md dark:shadow-2xl/20 flex flex-col tablet:flex-row transition-all duration-300 ${style.hover} group`}
                >
            
                  
                  {/* Mockup Left */}
                  <div className={`w-full tablet:w-1/2 h-56 tablet:h-auto ${style.bg} p-6 flex items-center justify-center overflow-hidden relative border-b tablet:border-b-0 tablet:border-r border-gray-200/80 dark:border-zinc-800/80`}>
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="w-full h-full object-contain  transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Right */}
                  <div className="w-full tablet:w-1/2 p-6 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        {style.icon}
                        <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                          {project.projectName}
                        </h2>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tech.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-fit px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-sm font-semibold text-zinc-700 dark:text-zinc-300 rounded-lg bg-zinc-50 dark:bg-zinc-800/20 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all cursor-pointer shadow-sm"
                    >
                      View This Project
                    </a>
                  </div>
                </div>
              );
            })}

            {/* CARD 5: Let's Work Together! Form (Full Width lg:col-span-12) */}
            <div className="lg:col-span-12 relative border border-gray-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 rounded-2xl overflow-hidden shadow-md dark:shadow-2xl/20 flex flex-col tablet:flex-row transition-all duration-300 hover:border-pink-500/50 min-h-[300px]">
              <CardCorners colorClass="border-pink-500/70" />
              
              {/* Star sparkles background decoration */}
              <LuSparkles className="absolute bottom-6 right-6 text-pink-500/10 dark:text-pink-500/5 w-12 h-12 pointer-events-none animate-pulse" />

              {/* Left Side: Header info */}
              <div className="w-full tablet:w-1/2 flex flex-col items-center justify-center p-6 border-b tablet:border-b-0 tablet:border-r border-gray-200/80 dark:border-zinc-800/80 text-center gap-2 relative z-10 bg-zinc-50/50 dark:bg-zinc-950/20">
                <LuMessageCircleQuestion size={48} className="text-pink-500 dark:text-purple-400" style={{animationDuration: '3s'}}  />
                <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Let's Work Together!
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                  Have a project in mind? Let's talk about it.
                </p>
              </div>

              {/* Right Side: Form */}
              <div className="w-full tablet:w-1/2 p-6 flex flex-col justify-center relative z-10">
                <form onSubmit={onContactSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      pattern="[A-Za-z\s]+"
                      className="w-full bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg p-2.5 text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                      className="w-full bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg p-2.5 text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <textarea
                    required
                    name="message"
                    rows="3"
                    placeholder="Message"
                    className="w-full bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-lg p-2.5 text-xs text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none resize-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-black hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-500 text-white font-semibold rounded-lg text-xs transition-all shadow-md shadow-pink-500/10 cursor-pointer active:scale-95 duration-100"
                  >
                    Submit
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
