"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalCategoryCard from "@/components/custom/MedicalCategoryCard";
import { TbAirConditioning } from "react-icons/tb";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { GiMedicalDrip } from "react-icons/gi";
import { PiFaceMaskLight } from "react-icons/pi";
import { TbAirConditioningDisabled } from "react-icons/tb";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const MedicalEquipmentPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/medical-category", {cache:"no-cache"})
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategories(data.data.result)
        console.log(data.data.result);
      });
  }, []);
  // TODO: Get api to send data in 4 seperate chunks like Linen:[{obj}, {obj}, {obj}] , Wheelchair:[{obj}, {obj}, {obj}]. Map that and show category cards
  if(loading){
    return
  }
  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Medical Equipment
      </h2>

      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:items-start">
        {/* Category selector */}
        <div className="size-[350px]">
          <div className="flex h-1/4 flex-col items-start bg-si-secondary bg-opacity-55 p-4 pl-6">
            <h4 className="text-lg font-semibold">Categories</h4>
            <Link
              href="/#"
              className="mt-1 inline-flex items-center text-sm font-semibold text-primary underline-offset-2 hover:underline"
            >
              See All <DoubleArrowRightIcon className="ml-1 size-3" />
            </Link>
          </div>

          <div className="flex h-3/4 max-w-[350px] flex-col bg-background">
            {categories?.map((item) => (
              <Link
                key={item?._id}
                href="/#"
                className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
              >
                <span className="inline-flex items-center p-2 font-semibold">
                  <Image className="h-7 w-7 mr-3" height={25} width={25} alt="category icon" src={item?.image} />  {item?.name}
                </span>
              </Link>
            ))}

        

         
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          {/* Advertisement Carousel */}
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="w-full">
              <CarouselItem className="h-[300px] w-full">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/file-jLjSYMkrwusYaZjPGDd8NA4z.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-[300px] w-full">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/file-zT5yWezv2NDJtZBxzM4JFEZv.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* small cards */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-3 bg-background p-4">
              <TbAirConditioning className="size-10 text-primary" />
              <h5 className="text-wrap text-center font-semibold">
                Air Purification Equipment
              </h5>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-background p-4">
              <GiMedicalDrip className="size-10 text-primary" />
              <h5 className="text-center font-semibold">
                Hospital Operating Room Support Equipment
              </h5>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-background p-4">
              <PiFaceMaskLight className="size-10 text-primary" />
              <h5 className="text-center font-semibold">Air Filter</h5>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-background p-4">
              <TbAirConditioningDisabled className="size-10 text-primary" />
              <h5 className="text-center font-semibold">
                Air Conditioning and Ventilation Terminal Equipment
              </h5>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MedicalCategoryCard />
    </div>
  );
};

export default MedicalEquipmentPage;
