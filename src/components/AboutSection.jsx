import React from 'react';
import img from './assets/profile.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between pl-0 pr-4 py-16 md:py-20 gap-12 bg-[#02040f] text-white">

      {/* Profile Image with glow */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        {/* Purple glow (horizontal + vertical) */}
        <div className="absolute w-[500px] h-[180px] rounded-full bg-purple-700 blur-[110px] opacity-60 z-0" />

        {/* Oval Image with ring and shadows */}
        <div className="relative z-10 w-72 h-64 md:w-80 md:h-72 rounded-full border-4 border-purple-500 p-1 bg-[#0f0f1a] overflow-hidden shadow-[0px_20px_60px_rgba(128,0,255,0.25),0px_-10px_40px_rgba(128,0,255,0.15)]">
          <img
            src={img}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-bold text-purple-200 mb-4">About Me</h2>
        <p className="text-gray-300 mb-6">
          I’m a B.Tech Computer Science student at Pimpri Chinchwad College of Engineering, Pune. I’m deeply interested in building real-world solutions through data science, AI, and full-stack development.
          <br/><br/>
          Beyond academics, I’m an active member of both the Institution’s Innovation Cell (IIC) and the Association for Computing Machinery (ACM) student chapter, where I contribute to promoting a culture of innovation, technical excellence, and peer learning on campus. These roles have helped me grow as a team player and creative thinker.
          <br/><br/>
          I’ve completed certifications in Introduction to Large Language Models (NPTEL) and Data Structures in C++ (Scaler), strengthening both my theoretical knowledge and practical coding abilities. I’m also active on coding platforms like HackerRank and CodeChef, where I regularly practice problem-solving.
          <br/><br/>
          I’m currently seeking internships and collaborative opportunities in the fields of machine learning, data science, and full-stack development. I’m eager to contribute, learn, and grow in environments that challenge me to think critically and innovate meaningfully.
        </p>
      </div>
    </section>
  );
}
