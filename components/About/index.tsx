import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../app/assent/images/onurcan-gonul.png'
import { BriefcaseBusiness, CodeXml, GraduationCap, Languages } from 'lucide-react'
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Başlık */}
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">Introduction</h3>
      <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-10">About me</h2>

      {/* Ana içerik */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Profil Fotoğrafı */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ProfileImage}
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Sağ Taraf İçerik */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">

          {/* Tanıtım */}
          <p className="text-gray-700 dark:text-gray-300">
            I am an experienced Frontend Developer with over a decade of professional expertise in the field.
            Throughout my career, I have had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          {/* Kartlar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
                <CodeXml className='text-primary mb-2' />
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Languages</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">HTML, CSS, JavaScript<br/>React JS, Next JS</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <GraduationCap className='text-primary mb-2' />
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Education</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">B.Tech in Computer Science</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <BriefcaseBusiness className='text-primary mb-2' />
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Projects</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Built more than 5 projects</p>
            </div>
          </div>

          {/* Araçlar */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Tools I use</h4>
            <div className="flex flex-wrap gap-4">
              <div className="w-10 h-10 border rounded-md flex items-center justify-center">
                <FaReact/>
              </div>
              <div className="w-10 h-10 border rounded-md flex items-center justify-center"></div>
              <div className="w-10 h-10 border rounded-md flex items-center justify-center"></div>
              <div className="w-10 h-10 border rounded-md flex items-center justify-center"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
