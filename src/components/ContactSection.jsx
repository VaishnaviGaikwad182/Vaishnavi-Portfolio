import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0b0b15] text-white py-16 px-4 text-center relative overflow-hidden"
    >
      {/* Glowing Purple Circle */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[150px] rounded-full bg-purple-700 blur-[110px] opacity-60 z-0" />

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 relative z-10">
        Contact Me
      </h2>

      <p className="text-lg mb-4 relative z-10">
        Feel free to reach out via email or connect with me on social platforms.
      </p>

      <div className="flex justify-center gap-6 text-3xl text-gray-300 relative z-10">
        <a
          href="mailto:vaishnavig182@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/VaishnaviGaikwad182"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/vaishnavi-gaikwad-675093294/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/vaishnavi_gaikwad182"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
