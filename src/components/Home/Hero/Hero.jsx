"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-svh bg-si-secondary">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://picsum.photos/700/550?v=${index})`,
                }}
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Content */}
              <div className="relative flex flex-col justify-center items-center text-center h-full gap-5">
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-balance font-semibold text-muted">
                  Lorem ipsum dolor sit amet.
                </h2>
                <h4 className="text-base lg:text-xl text-balance font-medium max-w-sm md:max-w-lg lg:max-w-2xl mx-auto text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem maiores veritatis nobis at quae voluptate possimus
                  repudiandae dolor inventore corporis cum itaque, fuga porro
                  nesciunt a aut ducimus laboriosam tempore!
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

{
  /* <div className="p-1 relative w-full h-dvh">
<Image
src={`https://picsum.photos/700/550?v=${index}`}
alt="Your alt text"
fill={true}
className="object-cover object-center"
/>
</div> */
}
