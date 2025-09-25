import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiFigma
} from "react-icons/si";

import { DiNodejs } from "react-icons/di";
import { ReactNode } from "react";

export interface AboutItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const aboutText: { text: string } = {
  text: `As a Frontend Developer with 4+ years of experience, I specialize in building scalable CRM systems, B2B platforms, and admin dashboards using React.js and Next.js. My expertise includes state management with Redux Toolkit and crafting responsive UIs with Tailwind CSS and Shadcn. I expanded my skills to mobile development by creating Togeth App, an English learning platform with React Native. Passionate about performance optimization and clean code, I thrive in agile environments where I can implement cutting-edge solutions to complex problems.`,
};

export const aboutMeItems: AboutItem[] = [
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
    description: "Built more than 9+ web and mobile projects",
  },
];

export const techIcons: ReactNode[] = [
  <IoLogoJavascript size={24} key="js" />,
  <FaReact size={24} key="react" />,
  <SiTypescript size={24} key="ts" />,
  <SiNextdotjs size={24} key="next" />,
  <DiNodejs size={30} key="node" />,
  <SiRedux size={24} key="redux" />,
  <SiTailwindcss size={24} key="tailwind" />,
  <SiShadcnui size={24} key="shadcn" />,
  <SiMui size={24} key="mui" />,
  <FaGithub size={24} key="github" />,
  <SiFigma size={24} key="figma" />,

  
];
