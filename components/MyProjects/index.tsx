'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { myProjectsData } from "@/data/myProjects/myProjectsData"
import { useState } from "react"
import { CarouselDots } from "../ui/corouselDots"

export default function MyProjects() {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section id="myProjects" className="container mx-auto px-4 py-10">
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        What I developed
      </h3>
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        My Projects
      </h2>

      <Carousel setApi={setApi}>
        <CarouselContent>
          {myProjectsData.map((service, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="group relative border rounded-xl p-6 md:h-[260px] h-[290px] flex flex-col justify-start transition-all">
                <div className="mb-4">{service.icon}</div>
                <h4 className="font-semibold text-lg text-primary mb-2">
                  {service.title ?? ""}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-[7]">
                  {service.description ?? ""}
                </p>
                <p className="text-xs font-medium text-muted-foreground line-clamp-[7] mt-3 underline">
                  {service.company ?? ""}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="md:flex hidden" />
        <CarouselNext className="md:flex hidden" />
        <CarouselDots api={api} />
      </Carousel>
    </section>
  )
}
