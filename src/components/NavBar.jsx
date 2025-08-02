import React from 'react';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#000000] text-white">
      <div className="text-2xl font-extrabold italic">Vaishnavi Gaikwad</div>
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <a href="#" className="hover:text-purple-500">Home</a>
        <a href="#about" className="hover:text-purple-500">About</a>
        <a href="#skills" className="hover:text-purple-500">Skills</a>
        <a href="#projects" className="hover:text-purple-500">My projects</a>
        <a href="#contact" className="border px-4 py-1 rounded-full border-white hover:bg-purple-500 hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}
