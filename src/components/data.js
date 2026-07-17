import browserExtension from "../assets/images/preview.jpg";
import qoalaMockup from "../assets/images/qoala-mockup.png";
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
    backEnd: ["MongoDB", "Python", "NodeJS","Express", "SQLite", "PostgreSQL", "MySQL"],
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
    projectName: "Browser Extension",
    desc: "Manage your browser extension with ease.",
    tech: ["HTML", "Tailwind CSS", "React", "Typescript"],
    link: "https://browser-extensions-manager-flax.vercel.app/",
    image: browserExtension,
  },{
    projectName: "Landing Page for Qoala App",
    desc: "This project is a marketing landing page for Qoala, a mockup for smart queue management system.",
    tech: ["React", "Tailwind CSS", "Typescript"],
    link: "https://qoala-mockup-website.vercel.app/",
    image: qoalaMockup,
}
];
export default { about, projects };
