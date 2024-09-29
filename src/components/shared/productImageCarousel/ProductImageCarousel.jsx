"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { customLoader } from "@/utils/customLoader";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ProductImageCarousel = ({ images }) => {
  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className=" ml-0 h-full w-full px-6 ">
          {images.map((src, idx) => {
            return (
              <CarouselItem className="pl-0" key={src + idx}>
                <div className="relative h-auto min-h-[500px] w-full ">
                  <Image
                    loader={customLoader}
                    src={src}
                    alt="Advertisement"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute bottom-5 left-1/2">

          {images?.lenght > 1 && (
            <div>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          )}
        </div>
      </Carousel>
    </div>
  );
};

export default ProductImageCarousel;
