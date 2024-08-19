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

const MedicalEquipmentPage = () => {
  // TODO: Get api to send data in 4 seperate chunks like Linen:[{obj}, {obj}, {obj}] , whilchare:[{obj}, {obj}, {obj}]. Map that and show category cards
  return (
    <div className="bg-secondary">
      <h2 className="pt-3 text-center text-2xl font-bold md:pt-5 lg:text-4xl">
        Medical Equipment
      </h2>

      <MaxWidthWrapper className="flex justify-between gap-5">
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
              className="scale-90 hover:scale-100 hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold hover:text-primary">
                <TbAirConditioning className="mr-2 size-5" /> Air Purification
                Equipment
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold hover:text-primary">
                <GiMedicalDrip className="mr-2 size-6" /> Hospital Operating
                Room Support Equipment
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold hover:text-primary">
                <PiFaceMaskLight className="mr-2 size-6" /> Air Filter
              </span>
            </Link>
            <Link
              href="/#"
              className="scale-90 hover:scale-100 hover:shadow-md"
            >
              <span className="inline-flex items-center p-2 font-semibold hover:text-primary">
                <TbAirConditioningDisabled className="mr-2 size-6" /> Air
                Conditioning and Ventilation Terminal Equipment
              </span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <MedicalCategoryCard />
    </div>
  );
};

export default MedicalEquipmentPage;
