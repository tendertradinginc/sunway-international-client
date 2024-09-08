"use client";
import { Card, CardContent } from "@/components/ui/card";
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

import MaxWidthWrapper from "../custom/MaxWidthWrapper";

import SectionTitle from "../shared/SectionTitle/SectionTitle";


const MedicalInstrument = () => {
  const products = [
    {
      name: "",
      image:
        "https://i.postimg.cc/5NhTxxQL/Gemini-Generated-Image-50apzz50apzz50ap.jpg",
    },

    {
      name: "",
      image: "https://i.postimg.cc/CxbKLd4w/ot-Table-1.jpg",
    },
    {
      name: "",
      image:
        "https://i.postimg.cc/nVvKKm68/y-Fp-OUyfj-JOEk-ZA-XYZxyu-transformed.webp",
    },
    {
      name: "",
      image:
        "https://i.postimg.cc/XvfbMr2r/Gemini-Generated-Image-axc54waxc54waxc5.jpg",
    },
    {
      name: "",
      image:
        "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      name: "",
      image:
        "https://i.postimg.cc/FsYXrWW5/Gemini-Generated-Image-qtn41hqtn41hqtn4.jpg",
    },
    {
      name: "",
      image: "https://i.postimg.cc/2643DDmR/pexels-pixabay-236380-1-1.jpg",
    },
    {
      name: "",
      image:
        "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/vHrbjpP2/artbreeder-image-2024-09-01-T08-52-07-444-Z.jpg')",
      }}
      className="my-10 mt-40 min-h-[500px] w-full bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div
        style={{ height: "100%", width: "100%" }}
        className="h-full min-h-[500px] w-full bg-[#0000005e] py-10 backdrop-blur-sm"
      >
        <MaxWidthWrapper>
          <div className="mx-auto max-w-4xl py-10">
            {/* <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
              Medical Equipment
            </h1> */}
            <div
              className="text-center text-3xl font-bold text-white md:text-5xl">
              <SectionTitle title1={" Medical"} title2={"Equipment"}></SectionTitle>
            </div>

            <p className="mt-5 text-center font-semibold text-gray-300">
              Our hospital equipment service plays a crucial role in the
              healthcare industry by ensuring that medical facilities have the
              necessary tools and devices to provide quality patient care. This
              service specializes in sourcing, distributing, and maintaining a
              wide range of medical equipment, from basic diagnostic tools to
              advanced surgical instruments.
            </p>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="py-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
              }),
            ]}
            className="mx-auto w-full max-w-64 p-0 md:max-w-xl lg:max-w-5xl"
          >
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="bg-transparent md:basis-1/3 lg:basis-1/4"
                >
                  <div className="">
                    <Card className="rounded-none border-0">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image
                          loader={customLoader}
                          src={item?.image}
                          sizes="100vw"
                          height={500}
                          width={500}
                          // Make the image display full width
                          style={{
                            width: "100%",
                            height: "200px",
                          }}
                          alt={`product ${index + 1}`}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default MedicalInstrument;
