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
    id: 1,
    title: "",
    subtitle: ["", ""],
    imageUrl: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
    imageUrlMobile: "https://i.ibb.co.com/txthZ7F/20231310511223.jpg",
    link: "",
    bg_color: "bg-transparent",
  },
  {
    id: 2,
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
    imageUrlMobile:
      "https://i.ibb.co/zV4TCVB/ynclean-cleanroom-manufacturer.webp",
    link: "/medical-equipment",
    bg_color: "bg-transparent",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    imageUrl: "https://i.ibb.co.com/kM6hsKS/phtos15.jpg",
    imageUrlMobile: "https://i.ibb.co.com/XL79D4r/phtots16.jpg",
    link: "",
    bg_color: "bg-transparent",
  },
  // {
  //   id: 3,
  //   title: (
  //     <>
  //       Build a Hospital In <br /> Bangladesh
  //     </>
  //   ),
  //   subtitle: [
  //     "Are You Planning To",
  //     "Contact World Renowed Health Care Consultant",
  //   ],
  //   imageUrl: "https://i.ibb.co.com/KN4C1HC/phots12-1.jpg",
  //   link: "/services",
  //   bg_color: "bg-transparent",
  // },

  // {
  //   id: 3,
  //   title: (
  //     <>
  //       Hospital Furtinure <br /> Excellence
  //     </>
  //   ),
  //   subtitle: [
  //     "",
  //     "Supplying high-quality hospital furtinure designed to enhance productivity and comfort.",
  //   ],
  //   imageUrl: "https://i.ibb.co/bJDx1R7/428ca6dd2a40444fe8425fd342ad54ee-1.jpg",
  //   link: "/office-equipment",
  // },
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
            <div className="relative h-[95vh] w-full bg-[#10465bd7]">
              <div
                className="absolute inset-0 hidden bg-cover bg-center md:block"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              />
              <div
                className="absolute inset-0 block w-auto bg-cover bg-center md:hidden"
                style={{
                  backgroundImage: `url(${slide.imageUrlMobile})`,
                }}
              />
              {/* Black overlay */}
              <div
                className={`absolute inset-0 ${slide?.bg_color} opacity-70`}
              ></div>
              {/* Content */}
              <div className="relative mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center gap-5 lg:items-start">
                {slide.subtitle[0] && (
                  <h4 className="max-w-sm text-balance rounded-xl bg-si-primary px-2 py-1 text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-xl">
                    {slide?.subtitle[0]}
                  </h4>
                )}
                <h2 className="text-balance border-l-4 border-l-[#fbbe24] pl-4 text-4xl font-bold text-[#fbbe24] md:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>
                <h4 className="max-w-sm text-balance text-center text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-start lg:text-xl">
                  {slide.subtitle[1]}
                </h4>
                <div className="flex items-center justify-center">
                  {slide?.link && (
                    <Link href={slide?.link}>
                      {" "}
                      <button className="mt-8 rounded-md border-2 border-si-accent bg-si-accent p-2 px-5 text-white duration-300 hover:bg-transparent hover:text-si-accent">
                        Get Started
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
