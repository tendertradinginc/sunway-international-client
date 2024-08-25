"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
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

const OfficeEquipmentPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/officeEquipment/all?search=&limit=&page=",
        );
        const data = await response.json();
        setProducts(data?.data?.result || []);
      } catch (error) {
        console.error("Error fetching office equipment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Office Equipment
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
            <CarouselContent className="ml-0 w-full">
              <CarouselItem className="h-[300px] w-full pl-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/DALL·E 2024-08-20 11.18.51 - An advertisement image promoting an ergonomic office chair. The chair is modern and sleek with adjustable features and lumbar support, designed for co.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="h-[300px] w-full pl-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/DALL·E 2024-08-20 11.18.53 - An advertisement image promoting a modern office desk. The desk is sleek with a minimalist design, featuring a large workspace, integrated cable manag.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="h-[300px] w-full pl-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/DALL·E 2024-08-20 11.42.33 - A professional advertisement poster focused on a high-quality projector in a modern office setting. The projector is placed on one side of the poster,.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="h-[300px] w-full pl-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/DALL·E 2024-08-20 11.42.39 - A sleek advertisement poster for office equipment featuring high-quality projectors and printers. The scene showcases a modern office setting with the.webp"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* Search bar */}

          <Input
            type="text"
            name="search"
            placeholder="Search For Products..."
            className="bg-background"
          />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pb-10">
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {products?.map((product, index) => (
            <div key={product.id || index}>
              <EquipmentCard
                navigateTo={`/office-equipment/${product._id}`}
                data={product}
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OfficeEquipmentPage;
