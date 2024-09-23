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
import Image from "next/image";
import Link from "next/link";

const HospitalFurniturePage = async () => {
  //* Fetching MAIN Data
  let res = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/officeEquipment/all-category",
    {
      cache: "no-store",
    },
  );

  const productsJson = await res.json();
  const products = productsJson?.data;

  //* Fething category data

  let res2 = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/office-equipment-category?limit=6",
    {
      cache: "no-store",
    },
  );

  const categoryJson = await res2.json();
  const categories = categoryJson?.data?.result;

  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Hospital Furniture
      </h2>

      {/* Advertisement section */}
      <MaxWidthWrapper className="flex flex-col  justify-between   gap-5 md:flex-row lg:items-start">
        {/* Category selector */}
        <div className="w-full md:w-[350px]  border-red-700">
          <div className="flex  flex-col items-start bg-si-secondary bg-opacity-55 p-4 pl-6">
            <h4 className="text-lg font-semibold">Categories</h4>
            {/* <Link
              href="/#"
              className="mt-1 inline-flex items-center text-sm font-semibold text-primary underline-offset-2 hover:underline"
            >
              See All <DoubleArrowRightIcon className="ml-1 size-3" />
            </Link> */}
          </div>

          <div className="flex  max-w-[350px] flex-col bg-background">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/hospital-furniture/${category?.name}`}
                className="scale-90 hover:scale-100 hover:text-primary hover:shadow-md"
              >
                <span className="inline-flex items-center p-2 font-semibold">
                  <Image
                    loader={customLoader}
                    className="mr-2 size-5"
                    src={category?.image}
                    alt={category?.name}
                    height={25}
                    width={25}
                  />
                  {category?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Advertisement Carousel */}
        <Carousel opts={{ loop: true }} autoplay className="w-full">
          <CarouselContent className="ml-0 w-full">
            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="https://i.postimg.cc/KztMsh9M/Whats-App-Image-2024-09-23-at-12-09-01-PM.jpg"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center lg:hidden"
                />
                <Image
                  loader={customLoader}
                  src="https://i.ibb.co.com/BtnbySp/Whats-App-Image-2024-09-09-at-6-44-54-PM.jpg"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center hidden lg:block"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="h-[350px] w-full pl-0">
              <div className="relative h-[350px] w-full">
                <Image
                  loader={customLoader}
                  src="https://i.postimg.cc/7LKHHsfW/Whats-App-Image-2024-09-23-at-12-10-17-PM.jpg"
                  alt="Advertisement"
                  fill
                  className=" object-center lg:hidden"
                />
                <Image
                  loader={customLoader}
                  src="https://i.ibb.co.com/zrXBgmn/Whats-App-Image-2024-09-09-at-4-14-30-PM.jpg"
                  alt="Advertisement"
                  fill
                  className="object-cover object-center hidden lg:block"
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
