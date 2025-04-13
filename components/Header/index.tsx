import React from 'react'
import { ThemeModeToggle } from '../ThemeModeToggle'
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-around px-8 py-4">
      <span className="text-xl font-medium"> <FaReact className="animate-slow-spin" size={32} /></span>
      <nav>
        <ul className="flex gap-8 border-primary  px-6 p-3 shadow-sm rounded-full">
          <li className="cursor-pointer hover:text-gray-700 transition-all">Home</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">About me</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">Services</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">My work</li>
          <li className="cursor-pointer hover:text-gray-600 transition-all">Testimonials</li>
        </ul>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 border  shadow-sm rounded-md hover:bg-gray-100">
          Connect
        </button>
        <ThemeModeToggle />
      </div>
    </header>
  )
}

export default Header