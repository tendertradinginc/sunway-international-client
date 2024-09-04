"use client";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const MedicalInstrument = () => {
  const products = [
    {
      name: "",
      image: "https://i.postimg.cc/2643DDmR/pexels-pixabay-236380-1-1.jpg",
    },
    {
      name: "",
      image: "https://i.postimg.cc/wT92nxHz/pexels-pixabay-40568-1.jpg",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "",
      image: "https://i.postimg.cc/2643DDmR/pexels-pixabay-236380-1-1.jpg",
    },
    {
      name: "",
      image: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/vHrbjpP2/artbreeder-image-2024-09-01-T08-52-07-444-Z.jpg')",
      }}
      className="min-h-[500px] w-full my-10 bg-cover bg-center bg-no-repeat bg-fixed mt-40"
    >
      <div
        style={{ height: "100%", width: "100%" }}
        className="bg-[#0000005e] min-h-[500px] h-full w-full backdrop-blur-sm  py-10"
      >
        <MaxWidthWrapper>
          <div className="py-10 max-w-4xl mx-auto ">
            <h1 className="text-3xl md:text-5xl font-bold  text-white text-center ">
              Regular Equipment
            </h1>
            <p className="text-center mt-5 text-gray-300  font-semibold ">
              Here is a comprehensive description for the hospital construction
              section: Comprehensive Hospital Construction Solutions At Sunrise
              International, we specialize in delivering end-to-end hospital
              construction services that meet the highest standards of
              healthcare infrastructure. From initial planning and design to
              construction and final handover, our experienced team ensures that
              every project is
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
            className="w-full max-w-64 md:max-w-xl lg:max-w-5xl mx-auto p-0 "
          >
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 bg-transparent ">
                  <div className="">
                    <Card className="rounded-none border-0">
                      <CardContent className="flex  items-center justify-center p-0">
                      <Image
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
