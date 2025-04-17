import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { myProjectsData } from "@/data/myProjects/myProjectsData";
export default function MyProjects() {
  return (
    <section id="myProjects" className="container mx-auto px-4 py-10">
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        What I developed
      </h3>
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        My Projects
      </h2>

      <Carousel>
        <CarouselContent>
          {myProjectsData.map((service, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="group relative border rounded-xl p-6 h-[260px] flex flex-col justify-start transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]">
                <div className="mb-4">{service.icon}</div>
                <h4 className="font-semibold text-lg text-primary mb-2">
                  {service.title??""}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-[7]">
                  {service.description??""}
                </p>
                <p className="text-xs font-medium text-muted-foreground line-clamp-[7] mt-3 underline">
                  {service.company??""}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
