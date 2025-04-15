"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Globe, Smartphone, PenTool, Image as ImageIcon } from "lucide-react"

export default function ServicesCarousel() {
  const services = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Web design",
      description: "Web development is the process of building, programming...",
    },
    {
      icon: <Smartphone className="text-primary" size={24} />,
      title: "Mobile app",
      description: "Web development is the process of building, programming...",
    },
    {
      icon: <PenTool className="text-primary" size={24} />,
      title: "UI/UX design",
      description: "Web development is the process of building, programming...",
    },
    {
      icon: <ImageIcon className="text-primary" size={24} />,
      title: "Graphics design",
      description: "Web development is the process of building, programming...",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      What I developed
      </h3>
      <h2 className="text-3xl font-bold text-primary text-center mb-10">
        My Project
      </h2>

      <Carousel>
        <CarouselContent>
          {services.map((service, i) => (
      <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3">
      <div className="group relative border rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]">
        <div className="mb-4">{service.icon}</div>
        <h4 className="font-semibold text-lg text-primary mb-2">{service.title}</h4>
        <p className="text-sm text-muted-foreground">{service.description}</p>
        <p className="text-sm mt-4 text-primary">Read more →</p>
      </div>
    </CarouselItem>
    
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
