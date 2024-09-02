"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const slides = [
  {
    id: 2,
    title: (
      <>
        Build a Hospital In <br /> Bangladesh
      </>
    ),
    subtitle: [
      "Are You Planning To",
      "Contact World Renowed Health Care Consultant",
    ],
    imageUrl: "https://i.ibb.co/G5tsH67/20228616454220.jpg",
    link: "/services",
  },
  {
    id: 1,
    title: (
      <>
        Innovative Medical <br /> Solutions
      </>
    ),
    subtitle: [
      "",
      "Leading the way in healthcare with advanced medical equipment and cutting-edge hospital construction.",
    ],
    imageUrl: "https://i.ibb.co/zV4TCVB/ynclean-cleanroom-manufacturer.webp",
    link: "/medical-equipment",
  },
  {
    id: 3,
    title: (
      <>
        Hospital Furtinure <br /> Excellence
      </>
    ),
    subtitle: [
      "",
      "Supplying high-quality hospital furtinure designed to enhance productivity and comfort.",
    ],
    imageUrl:
      "https://i.ibb.co/r79Hvqg/pexels-tima-miroshnichenko-9574568-1.jpg",
    link: "/office-equipment",
  },
  // {
  //   id: 4,
  //   title: "Custom Healthcare Solutions",
  //   subtitle:
  //   [ "", "Tailoring healthcare environments to meet the unique needs of each client."],
  //   imageUrl: "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Transforming Workspaces",
  //   subtitle:
  //    [ "","Providing ergonomic office solutions that improve well-being and efficiency."],
  //   imageUrl: "/adolfo-felix-PG8NyM_Mcts-unsplash.jpg",
  // },
];

export function Hero() {
  return (
    <Carousel
      className="min-h-[70dvh] w-full"
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
            <div className="relative h-[90vh] w-full bg-[#1C4759]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-[#1c4759b8] opacity-70"></div>
              {/* Content */}
              <div className="relative mx-auto flex h-full max-w-[1400px] flex-col items-start justify-center gap-5">
                <h4 className="max-w-sm text-balance text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-xl">
                  {slide.subtitle[0]}
                </h4>
                <h2 className="text-balance text-4xl font-bold text-[#fbbe24] md:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>
                <h4 className="max-w-sm text-balance text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-xl">
                  {slide.subtitle[1]}
                </h4>
                <div>
                  <Link href={slide.link}>
                    {" "}
                    <button className="mt-8 rounded-md border-2 border-si-accent p-2 px-5 text-si-accent duration-300 hover:bg-si-accent hover:text-white">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
