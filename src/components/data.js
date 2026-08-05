import browserExtension from "../assets/images/preview.jpg";
import evolvScreenShot from "../assets/images/evolv-screenshot.png";
import portfolioScreenshot from "../assets/images/portfolio-screenshot.png";
import webDashboard from "../assets/images/Web-mockup.png";
import mobileApp from "../assets/images/Mobile-Mockup.png"
export const about = [
  {
    title: "What I can do",
    desc: " I can help develop solutions that will help you grow your business:",
    bullets: ["Front-End Development", "Back-End Development", "Mobile Development"],
  },
  {
    title: "Tools I Use",
    desc: " I use the latest tools and technologies to build functional and scalable products:",
    frontEnd: ["Tailwind CSS", "React", "JavaScript", "Typescript", "NextJS", "React Native", "Expo App"],
    backEnd: ["MongoDB", "Python", "NodeJS","Express", "NextJS","SQLite", "PostgreSQL", "MySQL"],
    others: ["Figma", "Git","Github", "Postman"]
    
  },
  {
    title: "UI/UX Design",
    desc: "I create clean, modern, and user-friendly interfaces with a focus on clarity, usability, and smooth user experiences.",
    bullets: [
      "Modern & Minimal UI",
      "User-Centered Thinking",
      "Responsive Design"
    ],
  },
];

export const projects = [
  {
    projectName: "Extensions Manager",
    desc: "Extensions Manager in collection extensions.xl projectves, TypeScript, Web Extensions.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://browser-extensions-manager-flax.vercel.app/",
    image: browserExtension,
  },
  {
    projectName: "Qoala Mobile App",
    desc: "Qoala is a smart queuing system designed to optimize customer flow in various service-based businesses.",
    tech: ["Figma", "React", "Tailwind CSS"],
    link: "https://qoala-mockup-website.vercel.app/",
    image: mobileApp,
  },
  {
    projectName: "Qoala: Web Dashboard",
    desc: "Web dashboard for Qoala App. A Capstone Project for STI College Malolos.",
    tech: ["React", "Tailwind CSS", "Vite", "Recharts", "Socket.io", "PostgreSQL", "Prisma ORM", "Express"],
    link: "https://github.com/gosei128",
    image: webDashboard,
  },{
    projectName: "Evolv: Gamified Workout Tracker",
    desc: "Evolv is a passion/for-fun project that I made to help users track their workouts and stay motivated through gamification.",
    tech: ["React Native","Nativewind", "Expo App", "Drizzle ORM", "SQLite"],
    link: "https://evolv-gamification.vercel.app/",
    image: evolvScreenShot,
  }
];
export default { about, projects };

