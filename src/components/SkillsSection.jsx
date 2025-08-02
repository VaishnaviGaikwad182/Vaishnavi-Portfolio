import React, { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPostman,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl mb-2" />,
    label: "HTML",
  },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl mb-2" />, label: "CSS" },
  {
    icon: <FaJs className="text-yellow-400 text-5xl mb-2" />,
    label: "JavaScript",
  },
  { icon: <FaReact className="text-cyan-400 text-5xl mb-2" />, label: "React" },
  {
    icon: <SiTailwindcss className="text-sky-400 text-5xl mb-2" />,
    label: "TailwindCSS",
  },
  {
    icon: <FaBootstrap className="text-purple-600 text-5xl mb-2" />,
    label: "Bootstrap",
  },
  { icon: <SiVite className="text-violet-400 text-5xl mb-2" />, label: "Vite" },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl mb-2" />,
    label: "Node.js",
  },
  {
    icon: <SiExpress className="text-gray-400 text-5xl mb-2" />,
    label: "Express.js",
  },
  { icon: <FaGitAlt className="text-red-500 text-5xl mb-2" />, label: "Git" },
  {
    icon: <FaGithub className="text-gray-300 text-5xl mb-2" />,
    label: "GitHub",
  },
  {
    icon: <SiPostman className="text-orange-500 text-5xl mb-2" />,
    label: "Postman",
  },
  { icon: <SiMysql className="text-blue-600 text-5xl mb-2" />, label: "MySQL" },
  {
    icon: <SiMongodb className="text-green-400 text-5xl mb-2" />,
    label: "MongoDB",
  },
];

const SkillsSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      id="skills"
      className="bg-[#0b0b15] text-white py-16 px-4 flex flex-col items-center relative"
    >
      <div className="relative text-center my-10">
        {/* Glowing Purple Circle */}
        <div className="absolute w-[450px] h-[150px] rounded-full bg-purple-700 blur-[110px] opacity-60 z-0" />
        {/* Text Content */}
        <h2 className="text-5xl font-bold mb-12">
          My Expertise <span className="text-purple-400">and Skills</span>
        </h2>
      </div>

      <div className="relative w-full">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a2e] p-2 rounded-full hover:bg-purple-500 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-8 px-12 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-[#1a1a2e] rounded-xl shadow-md flex flex-col items-center justify-center"
            >
              {skill.icon}
              <span className="text-xs mt-1">{skill.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a2e] p-2 rounded-full hover:bg-purple-500 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;

//        <h2 className="text-5xl font-bold mb-2">My Expertise <span className="text-purple-400">and Skills</span></h2>
