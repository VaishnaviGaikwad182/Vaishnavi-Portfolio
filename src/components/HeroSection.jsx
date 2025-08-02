import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import robot from './assets/robot2.png';
import myPDF from './assets/Vaishnavi_Gaikwad_CV.pdf'; 


export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-20 md:py-32 bg-[#02040f] text-white">
      {/* Left Text Section */}
      <div className="relative md:w-1/2 space-y-6 text-center md:text-left">
        {/* Purple Glowing Circle Behind Text */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-purple-700 blur-[120px] opacity-60 z-0" />

        {/* Animated Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Vaishnavi Gaikwad</h1>
          <br />
          <h2 className="text-xl md:text-2xl text-purple-500 font-semibold">
            Full Stack Developer || AI Enthusiast
          </h2>
          <br />
          <p className="text-gray-300">
            Passionate about Full Stack Development, AI and EdTech Solutions. I
            love building impactful digital experiences that solve real-world
            problems. Always exploring the intersection of technology,
            creativity, and lifelong learning.
          </p>
          <br />

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
            <a
              href="mailto:vaishnavig182@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 text-red-400"
            >
              <Mail />
            </a>

            <a
              href="https://github.com/VaishnaviGaikwad182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 text-purple-400"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/vaishnavi-gaikwad-675093294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-blue-400"
            >
              <Linkedin />
            </a>

            <a
              href="https://instagram.com/vaishnavi_gaikwad182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 text-pink-400"
            >
              <Instagram />
            </a>
          </div>
          <br />

          {/* Download CV Button */}
          <a
            href={myPDF}
            download
            className="inline-block mt-6 px-6 py-2 border border-white rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Side Robot Image */}
      <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={robot}
            alt="robot"
            className="w-[400px] md:w-[500px] z-10 relative"
          />
        </motion.div>
      </div>
    </section>
  );
}
