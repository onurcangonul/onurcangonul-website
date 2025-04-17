import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaCode} from "react-icons/fa";
import { cn } from "@/lib/utils";

const experiences = [
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
    description:
      "Built and maintained dashboard applications using React.js, Material UI, and SASS, ensuring cross-browser compatibility and mobile responsiveness. Contributed to over 10 projects, including WordPress-based web applications, focusing on UI/UX improvements and frontend optimization. Assisted in agile development processes, improving user accessibility and interaction across platforms.",
    currentyWork: false,
  },
];

const MyExperience = () => {
  return (
    <section id="myExperience" className="py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm text-muted-foreground mb-2">
          Career
        </h3>
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
        Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-20 relative z-10">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    } md:relative`}
                  >
                    <div className="relative">
                      <Card
                        className={cn(
                          "relative z-10 rounded-2xl border bg-background/50 backdrop-blur-lg ransition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)] ",
                          item.currentyWork &&
                            "border-primary ring-1 ring-primary/30 "
                        )}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <span>{item.icon}</span>
                            <h3 className="text-lg font-semibold text-primary">
                              {item.title}
                            </h3>
                          </div>
                          <span className="text-lg font-medium text-primary">
                            {item.company}
                          </span>
                          <p className="text-sm font-light text-primary mt-2">
                            {item.workYear}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
