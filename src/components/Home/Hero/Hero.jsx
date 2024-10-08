"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const slides = [
  // {
  //   id: 2,
  //   title: (
  //     <>
  //       Build A Hospital In <br /> Bangladesh
  //     </>
  //   ),
  //   subtitle: ["Are you planning to", " "],
  //   imageUrl:
  //     "https://i.postimg.cc/4dD1j3k3/Whats-App-Image-2024-09-14-at-19-15-16-9c4a91b1-1-1.png",
  //   imageUrlMobile: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
  //   link: "/services",
  //   divMain: "items-start",
  //   bg_color: "",
  //   head: "text-[#fbbe24] text-left border-l-green-800",
  //   paragraph: "text-left text-gray-900",
  // },
  // {
  //   id: 2,
  //   title: (
  //     <>
  //       Modular OT <br /> Solution
  //     </>
  //   ),
  //   subtitle: ["Are you planning to", " "],
  //   imageUrl:
  //     "https://i.postimg.cc/4dD1j3k3/Whats-App-Image-2024-09-14-at-19-15-16-9c4a91b1-1-1.png",
  //   imageUrlMobile: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
  //   link: "/services",
  //   divMain: "items-start",
  //   bg_color: "",
  //   head: "text-[#fbbe24] text-left border-l-green-800",
  //   paragraph: "text-left text-gray-900",
  // },

  // {
  //   id: 3,
  //   title: (
  //     <>
  //       Modern Hospital Furniture <br /> Equipment
  //     </>
  //   ),
  //   subtitle: ["Hospital Revonation", " "],
  //   imageUrl: "https://i.postimg.cc/T1gR0K0J/Downloader-La-941904-1.png",
  //   imageUrlMobile: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
  //   link: "/services",
  //   divMain: "items-start",
  //   bg_color: "",
  //   head: "text-[#fbbe24] text-left border-l-green-800",
  //   paragraph: "text-left text-gray-900",
  // },
  // {
  //   id: 1,
  //   title: (
  //     <>
  //       Purchase the best <br /> Medical Product
  //     </>
  //   ),
  //   subtitle: ["Medical Equipment & Furniture", " "],
  //   imageUrl: "https://i.postimg.cc/T1P4hs1D/Downloader-La-232013-1.png",
  //   imageUrlMobile: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
  //   link: "/services",
  //   divMain: "items-start",
  //   bg_color: "",
  //   head: "text-[#fbbe24] text-left border-l-green-800",
  //   paragraph: "text-left text-gray-900",
  // },
  {
    id: 1,
    title: (
      <>
        Modern Modular OT
        <br /> Solution
      </>
    ),
    subtitle: ["Medical Equipment & Furniture", " "],
    imageUrl: "/Frame 7.jpg",
    link: "/services",
    divMain: "items-start",
    bg_color: "",
    head: "text-[#fbbe24] text-left border-l-green-800",
    paragraph: "text-left text-gray-900",
  },
  {
    id: 2,
    title: (
      <>
        Hospital Furniture
        <br /> Solution
      </>
    ),
    subtitle: ["Make your choices for", " "],
    imageUrl: "/Frame8.jpg",
    link: "/services",
    divMain: "items-start",
    bg_color: "",
    head: "text-[#fbbe24] text-left border-l-green-800",
    paragraph: "text-left text-gray-900",
  },
  {
    id: 3,
    title: (
      <>
        Medical Equipment
        <br /> Solution
      </>
    ),
    subtitle: ["Medical Equipment & Furniture", " "],
    imageUrl: "/Frame9.jpg",
    link: "/services",
    divMain: "items-start",
    bg_color: "",
    head: "text-[#fbbe24] text-left border-l-green-800",
    paragraph: "text-left text-gray-900",
  },
];

export function Hero() {
  return (
    <Carousel
      className="mt-14 max-h-[80vh] min-h-[80dvh] w-full md:max-h-[80vh]"
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
          <CarouselItem key={slide.id} className="w-full">
            <div className="relative">
              <div className="absolute left-0 top-0 -z-10 w-full">
                <Image
                  fill
                  unoptimized={true}
                  src={slide?.imageUrl}
                  alt="Home page banner"
                  className="min-h-[70vh] w-full object-cover object-[left_top] md:min-h-[90vh] md:object-center lg:object-fill"
                />
              </div>

              <div className="z-20 flex min-h-[90vh] w-full flex-col justify-center md:max-h-[90vh]">
                <MaxWidthWrapper>
                  <p className="text-xl font-semibold text-white">
                    {slide?.subtitle[0]}
                  </p>
                  <h1 className="my-5 text-3xl font-semibold text-white md:text-6xl">
                    {slide?.title}
                  </h1>
                  <Link href="/services">
                    {" "}
                    <Button className="mt-5">Exlpore More</Button>
                  </Link>
                </MaxWidthWrapper>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
