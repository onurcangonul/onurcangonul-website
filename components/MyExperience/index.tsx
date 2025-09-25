import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { myExperiences } from "@/data/myExperience/experiencedata";

const MyExperience = () => {
  return (
    <section id="myExperience" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm text-muted-foreground mb-2">
          Career
        </h3>
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-primary/60 to-muted -translate-x-1/2 z-0 rounded-full" />

          <div className="flex flex-col gap-20 relative z-10">
            {myExperiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col md:flex-row items-center relative",
                    isLeft ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md z-20" />

                  <div
                    className={cn(
                      "w-full md:w-1/2",
                      isLeft ? "md:pr-12" : "md:pl-12"
                    )}
                  >
                    <Card
                      className={cn(
                        "relative rounded-2xl border bg-background/70 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                        item.currentyWork &&
                          "border-primary ring-1 ring-primary/30"
                      )}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary">{item.icon ?? ""}</span>
                          <h3 className="text-lg font-semibold text-primary">
                            {item.title ?? ""}
                          </h3>
                        </div>

                        <span className="block text-base font-medium text-foreground">
                          {item.company ?? ""}
                        </span>

                        <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {item.workYear ?? ""}
                        </span>

                        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                          {item.description ?? ""}
                        </p>
                      </CardContent>
                    </Card>
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
