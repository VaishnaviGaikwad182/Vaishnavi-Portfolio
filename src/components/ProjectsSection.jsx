import React from "react";
import { motion } from "framer-motion";
import robot from '../assets/robot.png';
import l2e from '../assets/l2e.png';
import plp from '../assets/plp.png';
import sdp from '../assets/sdp.png';

const projects = [
  {
    title: "Learn2Excel - Online Skill Development Platform",
    description:
      "Interactive skill-building platform with quizzes and user engagement",
    image: l2e,
    repo: "https://github.com/VaishnaviGaikwad182/Learn2Excel",
  },
  {
    title: "Personalised Learning Tool",
    description: "A full-stack personalised tool for students and teachers.",
    image: plp,
    repo: "https://github.com/VaishnaviGaikwad182/Personalised-Learning-Tool",
  },
  {
    title: "Sleep Disorder Prediction",
    description:
      "Identifies risk of sleep disorders based on user health and lifestyle data",
    image: sdp,
    repo: "https://github.com/VaishnaviGaikwad182/Sleep_Disorder_Prediction",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-8 py-24 bg-[#0f0f1a] text-white text-center overflow-hidden"
    >
      {/* Left Tilted Robot */}
      <motion.img
        src={robot}
        alt="Left Robot"
        className="hidden md:block absolute top-10 left-20 w-46 rotate-[-25deg] opacity-80 z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right Tilted Robot */}
      <motion.img
        src={robot}
        alt="Right Robot"
        className="hidden md:block absolute top-10 right-20 w-46 rotate-[25deg] opacity-80 z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing Purple Circle Behind Title */}
      <div className="relative text-center mb-10 z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[180px] rounded-full bg-purple-700 blur-[130px] opacity-70 -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold z-10">My Projects</h2>
      </div>

      <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
        A quick look at some of the work I've done recently. I love building
        beautiful and performant interfaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1b1b2f] p-6 rounded-2xl shadow hover:shadow-purple-500/20 transition"
          >
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <div
                className="h-40 bg-gray-700 rounded mb-4 overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold mb-2 inline-block hover:text-purple-400"
            >
              {project.title}
            </a>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
