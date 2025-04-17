import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMeItems, techIcons, aboutText } from "@/data/aboutPage/aboutData";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-3">
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        Introduction
      </h3>
      <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-10">
        About me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 h-auto flex justify-center">
          <div className="relative bg-primary w-[500px] h-[500px] rounded-xl overflow-hidden shadow-lg grid place-content-center">
            <FaReact className="animate-slow-spin text-background" size={100} />
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <p className="text-gray-700 dark:text-gray-300">{aboutText.text}</p>
          <div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aboutMeItems.map((item, index) => (
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
