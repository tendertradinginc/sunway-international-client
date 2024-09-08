"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { customLoader } from "@/utils/customLoader";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuLampDesk } from "react-icons/lu";
import {
  PiDesk,
  PiMonitor,
  PiOfficeChair,
  PiPrinter,
  PiProjectorScreenChart,
} from "react-icons/pi";

const HospitalFurniturePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sunway-international-server.vercel.app/api/v1/officeEquipment/all-category",
        );
        const data = await response.json();
        setProducts(data?.data || []);
      } catch (error) {
        console.error("Error fetching office equipment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Hospital Furniture
      </h2>

      {/* Advertisement section */}
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
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <PiDesk className="mr-2 size-5" /> Office Tables
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <PiOfficeChair className="mr-2 size-6" /> Ergonomic Chairs
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <PiMonitor className="mr-2 size-6" /> Computer Monitors
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <PiPrinter className="mr-2 size-6" /> Office Printers
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <PiProjectorScreenChart className="mr-2 size-6" /> Projectors
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold">
                <LuLampDesk className="mr-2 size-6" /> Table Lamps
              </span>
            </Link>
          </div>
        </div>

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
          <CarouselContent className="ml-0 w-full">
            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="/DALL·E 2024-08-20 11.18.51 - An advertisement image promoting an ergonomic office chair. The chair is modern and sleek with adjustable features and lumbar support, designed for co.webp"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="/DALL·E 2024-08-20 11.18.53 - An advertisement image promoting a modern office desk. The desk is sleek with a minimalist design, featuring a large workspace, integrated cable manag.webp"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="/DALL·E 2024-08-20 11.42.33 - A professional advertisement poster focused on a high-quality projector in a modern office setting. The projector is placed on one side of the poster,.webp"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="/DALL·E 2024-08-20 11.42.39 - A sleek advertisement poster for office equipment featuring high-quality projectors and printers. The scene showcases a modern office setting with the.webp"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="min-h-[50vh] overflow-x-hidden py-16">
        {products.map((categoryObj, index) => {
          // Access the keys of each object (category name)
          const categoryName = Object.keys(categoryObj)[0];
          const items = categoryObj[categoryName];

          return (
            <Card key={index} className="mb-16 w-full">
              <CardHeader>
                <div className="flex items-center justify-between border-b-2 pb-1">
                  <CardTitle className="text-xl md:text-2xl lg:text-4xl">
                    {categoryName}
                  </CardTitle>
                  <Button asChild>
                    <Link href={`/hospital-furniture/${categoryName}`}>
                      View More <DoubleArrowRightIcon className="ml-2 size-5" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => {
                  return (
                    <div key={index}>
                      <EquipmentCard
                        data={item}
                        navigateTo={`/hospital-furniture/${categoryName}/${item?._id}`}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </MaxWidthWrapper>
    </div>
  );
};

export default HospitalFurniturePage;
