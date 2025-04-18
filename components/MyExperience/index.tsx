import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { myExperiences } from "@/data/myExperience/experiencedata";

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
            {myExperiences.map((item, index) => {
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
                            <span>{item.icon??""}</span>
                            <h3 className="text-lg font-semibold text-primary">
                              {item.title??""}
                            </h3>
                          </div>
                          <span className="text-lg font-medium text-primary">
                            {item.company??""}
                          </span>
                          <p className="text-sm font-light text-primary mt-2">
                            {item.workYear??""}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            {item.description??""}
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
