import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'My Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#000000] text-white fixed w-full z-50 shadow">
      <div className="text-2xl font-extrabold italic text-purple-400">Vaishnavi Gaikwad</div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`hover:text-purple-500 ${label === 'Contact' ? 'border px-4 py-1 rounded-full border-white hover:bg-purple-500 hover:text-white transition' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f1a] flex flex-col items-center py-4 md:hidden z-40">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`py-2 text-white hover:text-purple-400 ${label === 'Contact' ? 'border px-4 py-1 rounded-full border-white hover:bg-purple-500 hover:text-white transition' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
