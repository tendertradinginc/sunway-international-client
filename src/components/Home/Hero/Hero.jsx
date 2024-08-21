"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 2,
    title: "State of the Art Hospitals",
    subtitle:
      "Building modern hospitals equipped with the latest technology for superior patient care.",
    imageUrl: "/solen-feyissa-jGmBZypoFPc-unsplash.jpg",
  },
  {
    id: 1,
    title: "Innovative Medical Solutions",
    subtitle:
      "Leading the way in healthcare with advanced medical equipment and cutting-edge hospital construction.",
    imageUrl: "/national-cancer-institute-oCLuFi9GYNA-unsplash.jpg",
  },
  {
    id: 3,
    title: "Office Equipment Excellence",
    subtitle:
      "Supplying high-quality office equipment designed to enhance productivity and comfort.",
    imageUrl: "/benjamin-child-0sT9YhNgSEs-unsplash.jpg",
  },
  {
    id: 4,
    title: "Custom Healthcare Solutions",
    subtitle:
      "Tailoring healthcare environments to meet the unique needs of each client.",
    imageUrl: "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
  },
  {
    id: 5,
    title: "Transforming Workspaces",
    subtitle:
      "Providing ergonomic office solutions that improve well-being and efficiency.",
    imageUrl: "/adolfo-felix-PG8NyM_Mcts-unsplash.jpg",
  },
];

export function Hero() {
  return (
    <Carousel
      className="w-full min-h-[70dvh]"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4500,
        }),
      ]}
    >
      <CarouselContent>
        {slides?.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative w-full h-svh bg-si-secondary">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Content */}
              <div className="relative flex flex-col justify-center items-center text-center h-full gap-5">
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-balance font-semibold text-muted">
                  {slide.title}
                </h2>
                <h4 className="text-base lg:text-xl text-balance font-medium max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-muted">
                  {slide.subtitle}
                </h4>
                <div>
                  <Button>Get Started</Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
