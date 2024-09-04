import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalCategoryCard from "@/components/custom/MedicalCategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { customLoader } from "@/utils/customLoader";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { GiMedicalDrip } from "react-icons/gi";
import { PiFaceMaskLight } from "react-icons/pi";
import { TbAirConditioning, TbAirConditioningDisabled } from "react-icons/tb";

const MedicalEquipmentPage = async () => {
  //* Fetching Category data
  let res = await fetch("http://localhost:5000/api/v1/medical-category", {
    cache: "no-store",
  });
  const data = await res.json();
  const categories = await data?.data?.result;

  //* Fetching MAIN Data
  let res2 = await fetch(
    "http://localhost:5000/api/v1/medicalEquipment/all-category",
    {
      cache: "no-store",
    },
  );

  const res2Json = await res2.json();
  const mainData = res2Json?.data;

  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Medical Equipment
      </h2>

      <MaxWidthWrapper className="grid grid-cols-12 grid-rows-12 items-center justify-between gap-5 lg:items-start">
        {/* Category selector */}
        <div className="col-span-12 row-span-12 h-full bg-background lg:col-span-3">
          <div className="flex flex-col items-start bg-si-secondary bg-opacity-55 p-4 pl-6">
            <h4 className="text-lg font-semibold">Categories</h4>
            <Link
              href="/#"
              className="mt-1 inline-flex items-center text-sm font-semibold text-primary underline-offset-2 hover:underline"
            >
              See All <DoubleArrowRightIcon className="ml-1 size-3" />
            </Link>
          </div>

          <div className="flex flex-col">
            {categories?.map((item) => (
              <Link
                key={item?._id}
                href={`/medical-equipment/${item?.name}`}
                className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
              >
                <span className="inline-flex items-center p-2 font-semibold">
                  <Image
                    loader={customLoader}
                    className="mr-3 h-7 w-7"
                    height={25}
                    width={25}
                    alt="category icon"
                    src={item?.image}
                  />{" "}
                  {item?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-12 row-span-12 flex w-full flex-col gap-5 lg:col-span-9">
          {/* Advertisement Carousel */}
          <Carousel opts={{ loop: true }} autoplay className="w-full">
            <CarouselContent className="ml-0 w-full">
              <CarouselItem className="p-0">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/file-jLjSYMkrwusYaZjPGDd8NA4z.webp"
                    alt="Advertisement"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="p-0">
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

      <MedicalCategoryCard data={mainData} />
    </div>
  );
};

export default MedicalEquipmentPage;
