import React from "react";
import Image from "next/image";
import ProfileImage from "../../app/assent/images/onurcan-gonul.png";

//Icons
import {
  BriefcaseBusiness,
  CodeXml,
  GraduationCap,
  Languages,
} from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { Card, CardContent } from "@/components/ui/card";

const aboutUsItems = [
  {
    icon: <CodeXml className="text-primary mb-2" />,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, TypeScript, React, React Native, Next.js",
  },
  {
    icon: <GraduationCap className="text-primary mb-2" />,
    title: "Education",
    description: "Ahmet Yesevi University - Computer Programing",
  },
  {
    icon: <BriefcaseBusiness className="text-primary mb-2" />,
    title: "Projects",
    description: "Built more than 9+  web and mobile projects",
  },
];

const techIcons = [
  <IoLogoJavascript size={24} />,
  <FaReact size={24} />,
  <SiTypescript size={24} />,
  <SiNextdotjs size={24} />,
  <DiNodejs size={30} />,
  <SiRedux size={24} />,
  <SiTailwindcss size={24} />,
  <SiShadcnui size={24} />,
  <SiMui size={24} />,
  <FaGithub size={24} />,
];

const About = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Başlık */}
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        Introduction
      </h3>
      <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-10">
        About me
      </h2>

      {/* Ana içerik */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Profil Fotoğrafı */}
        <div className="w-full md:w-1/3 h-auto flex justify-center">
          <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ProfileImage}
              alt="Profile Photo"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>

        {/* Sağ Taraf İçerik */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Tanıtım */}
          <p className="text-gray-700 dark:text-gray-300">
            As a Frontend Developer with 3+ years of experience, I specialize in
            building scalable CRM systems, B2B platforms, and admin dashboards
            using React.js and Next.js. My expertise includes state management
            with Redux Toolkit and crafting responsive UIs with Tailwind CSS and
            Shadcn. I expanded my skills to mobile development by creating
            Togeth App, an English learning platform with React Native.
            Passionate about performance optimization and clean code, I thrive
            in agile environments where I can implement cutting-edge solutions
            to complex problems.
          </p>
          <div>
            {/* Kartlar */}
            <div className="space-y-6">
              {/* Kartlar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aboutUsItems.map((item, index) => (
                  <Card
                    key={index}
                    className="group border  transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]"
                  >
                    <CardContent className="p-5">
                      {item.icon}
                      <h4 className="font-semibold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-primary">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Araçlar */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Technologies I use
                </h4>
                <div className="flex flex-wrap gap-4">
                  {techIcons.map((Icon, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 border rounded-md flex items-center justify-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]"
                    >
                      {Icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
