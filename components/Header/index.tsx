'use client'
import React, { useState } from "react";
import { ThemeModeToggle } from "../ThemeModeToggle";
import { FaReact } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full relative z-50 px-4 md:px-8 py-4 flex items-center justify-between md:justify-around">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaReact className="animate-slow-spin text-primary" size={32} />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 border-primary px-6 py-3 shadow-sm rounded-full">
          <li className="cursor-pointer hover:text-gray-700 transition-all">Home</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">About me</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">Services</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">My work</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">Testimonials</li>
        </ul>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="px-4 py-2 border shadow-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm md:text-base">
          Connect
        </button>
        <ThemeModeToggle />

        {/* Hamburger (Mobile Only) */}
        <button className="md:hidden ml-2" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 md:hidden animate-fade-in-down">
          <ul className="flex flex-col gap-4 text-center">
            <li className="cursor-pointer hover:text-primary transition-all">Home</li>
            <li className="cursor-pointer hover:text-primary transition-all">About me</li>
            <li className="cursor-pointer hover:text-primary transition-all">Services</li>
            <li className="cursor-pointer hover:text-primary transition-all">My work</li>
            <li className="cursor-pointer hover:text-primary transition-all">Testimonials</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;