import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalCategoryCard from "@/components/custom/MedicalCategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { GiMedicalDrip } from "react-icons/gi";
import { PiFaceMaskLight } from "react-icons/pi";
import { TbAirConditioning, TbAirConditioningDisabled } from "react-icons/tb";

const MedicalEquipmentPage = async () => {
  //* Fetching Category data
  let res = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/medical-category",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  const categories = await data?.data?.result;

  //* Fetching MAIN Data
  let res2 = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/medicalEquipment/all-category",
    {
      cache: "no-store",
    },
  );

  const res2Json = await res2.json();
  const mainData = res2Json?.data;

  return (
    <div className="bg-secondary">
      <MaxWidthWrapper>
        <h2 className="py-3 text-2xl font-bold md:py-5 lg:text-4xl">
          Medical Equipment
        </h2>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="grid grid-cols-12 grid-rows-12 items-center justify-between gap-5 lg:items-start">
        {/* Category selector */}
        <div className="col-span-12 row-span-12 h-full bg-background md:col-span-4 lg:col-span-3">
          <div className="flex flex-col items-start bg-si-secondary bg-opacity-55 p-4 pl-6">
            <h4 className="text-lg font-semibold">Categories</h4>
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
                    src={item?.image}
                    alt="category icon"
                    loader={customLoader}
                    className="mr-3 h-7 w-7"
                    height={25}
                    width={25}
                  />{" "}
                  {item?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-12 row-span-12 flex w-full flex-col gap-5 md:col-span-8 lg:col-span-9">
          {/* Advertisement Carousel */}
          <Carousel opts={{ loop: true }} autoplay className="w-full">
            <CarouselContent className="ml-0 w-full">
              {/* First CarouselItem */}
              <CarouselItem className="p-0">
                {/* Large screen image */}
                <div className="relative hidden h-[400px] w-full md:hidden lg:block">
                  <Image
                    loader={customLoader}
                    src="https://i.ibb.co.com/gSzJXxM/photos14.jpg"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Mobile screen image */}
                <div className="relative block h-[400px] w-full md:block lg:hidden">
                  <Image
                    loader={customLoader}
                    src="https://i.postimg.cc/44Mf3QxP/Whats-App-Image-2024-09-23-at-12-12-26-PM.jpg"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>

              {/* Second CarouselItem */}
              <CarouselItem className="p-0">
                {/* Large screen image */}
                <div className="relative hidden h-[400px] w-full md:hidden lg:block">
                  <Image
                    loader={customLoader}
                    src="https://i.ibb.co.com/zrXBgmn/Whats-App-Image-2024-09-09-at-4-14-30-PM.jpg"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Mobile screen image */}
                <div className="relative block h-[400px] w-full md:block lg:hidden">
                  <Image
                    loader={customLoader}
                    src="https://i.postimg.cc/1tGt65P9/Whats-App-Image-2024-09-23-at-12-10-17-PM.jpg"
                    alt="Advertisement"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* Small cards */}
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
