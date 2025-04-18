import { ReactNode } from "react";
import { FaCode} from "react-icons/fa";

export interface Experiences {
    company:string
  icon: ReactNode;
  title: string;
  description: string;
  workYear:string;
  currentyWork: boolean
}
export const myExperiences: Experiences[] = [
    {
      company: "Setsis Information Technologies",
      title: "Frontend Developer",
      icon: <FaCode size={20} className="text-primary" />,
      description:
        "Developed and optimized B2B platforms, Admin Dashboards, and HR applications using React.js, TypeScript, Redux Toolkit, Shadcn, and Tailwind CSS, improving UI efficiency and scalability. Led frontend development, ensuring high-performance, responsive designs, and seamless API integrations with RESTful services. Conducted code reviews, mentored junior developers, and contributed to agile workflows.",
      workYear: "02/2024 - Present",
      currentyWork: true,
    },
    {
      company: "Alfa Nova Software",
      title: "Frontend Developer",
      icon: <FaCode size={20} className="text-primary" />,
      description:
        "Designed and developed dashboard and CRM applications using React.js, Next.js, Material UI, and Redux Toolkit, optimizing UI performance and enhancing user engagement. Improved page load speed by 40% through efficient state management and rendering techniques. Developed reusable UI components, reducing code redundancy by 25%, and collaborated with UX teams for better user experience.",
      workYear: "08/2023 - 02/2024",
      currentyWork: false,
    },
    {
      company: "Sokak Software House",
      title: "Frontend Developer",
      icon: <FaCode size={20} className="text-primary" />,
      workYear: "05/2022 - 08/2024",
      description:
        "Built and maintained dashboard applications using React.js, Material UI, and SASS, ensuring cross-browser compatibility and mobile responsiveness. Contributed to over 10 projects, including WordPress-based web applications, focusing on UI/UX improvements and frontend optimization. Assisted in agile development processes, improving user accessibility and interaction across platforms.",
      currentyWork: false,
    },
  ];
  