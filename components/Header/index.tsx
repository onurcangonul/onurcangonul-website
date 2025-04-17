import React from "react";
import Link from "next/link";
import { ThemeModeToggle } from "../ThemeModeToggle";
import { FaReact } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";
import { Button } from "../ui/button";
import { ContactSheet } from "../ContactSheet";

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-wrap items-center justify-between md:justify-around px-4 md:px-8 py-4">
      {/* Logo/Icon linking to home */}
      <Link href="/">
        <span className="text-xl font-medium flex items-center gap-2 cursor-pointer">
          <FaReact className="animate-slow-spin text-primary" size={32} />
        </span>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex gap-8 border-primary px-6 py-3 shadow-sm rounded-full">
          <li>
            <Link href="#about" className="cursor-pointer hover:text-gray-600 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="#myProjects" className="cursor-pointer hover:text-gray-600 transition-all">
              My Projects
            </Link>
          </li>
          <li>
            <Link href="#myApp" className="cursor-pointer hover:text-gray-600 transition-all">
              My App
            </Link>
          </li>
          <li>
            <Link href="#myExperience" className="cursor-pointer hover:text-gray-600 transition-all">
              Experience
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
        <ContactSheet>
          <Button className="flex items-center gap-2 bg-background text-primary px-4 py-2 border shadow-sm rounded-md text-sm md:text-base hover:bg-background hover:shadow-background hover:cursor-pointer">
            <MdOutlineAdsClick size={20} />
            Contact
          </Button>
        </ContactSheet>
        <ThemeModeToggle />
      </div>
    </header>
  );
};

export default Header;