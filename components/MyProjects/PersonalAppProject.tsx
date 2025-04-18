"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAppStore } from "react-icons/fa";
import { PiGooglePlayLogo } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselDots } from "../ui/corouselDots";

const images = [
  "/images/carousel-1.webp",
  "/images/carousel-2.webp",
  "/images/carousel-3.webp",
  "/images/carousel-4.webp",
  "/images/carousel-5.webp",
  "/images/carousel-6.webp",
  "/images/carousel-7.webp",
];

const PersonalAppProject = () => {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section id="myApp" className="container mx-auto px-4 my-10">
      <h3 className="text-center text-sm text-muted-foreground mb-2">Togeth</h3>
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        My App
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap- md:ml-10 ">
        <div className="md:w-1/2 w-full text-left space-y-6 md:mt-0 mt-8">
          <h3 className="text-2xl font-semibold text-primary">Togeth App</h3>
          <p className="text-muted-foreground leading-relaxed">
            Togeth App is a completely free application designed to enhance one
            of the most crucial steps in learning English: building your
            vocabulary. By leveraging word data sourced from the world&apos;s leading
            dictionaries and resources, Togeth provides you with the tools to
            expand your vocabulary effectively. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
            While focusing on vocabulary
            development, Togeth also integrates advanced learning techniques
            such as the Pomodoro method to enhance your study efficiency.
            Additionally, fun features like Word Hunt allow you to reinforce
            your learning through interactive and engaging word discovery games.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link
              href="https://apps.apple.com/us/app/togeth-app/id6740346065?platform=iphone"
              target="_blank"
            >
              <Button className="inline-flex items-center gap-2 text-sm font-medium">
                <FaAppStore size={20} />
                App Store
              </Button>
            </Link>
            <Button disabled variant="outline" className="gap-2 text-sm">
              <PiGooglePlayLogo size={22} />
              Google Play
            </Button>
            <Link href="https://togeth.app/" target="_blank">
              <Button variant="outline" className="gap-2 text-sm">
                <TfiWorld size={22} />
                Web
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <Carousel
          setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="relative w-[500px] h-[500px]">
                    <Image
                      src={src}
                      alt={`Togeth screenshot ${index + 1}`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
                  <CarouselDots api={api} />
          
        </div>
      </div>
    </section>
  );
};

export default PersonalAppProject;
