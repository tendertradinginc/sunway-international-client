import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Loading() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4">
        <Skeleton className="my-3 h-10 w-3/4 max-w-sm md:my-5" />
      </div>
      <div className="container mx-auto grid grid-cols-12 grid-rows-12 gap-5 px-4">
        {/* Category selector skeleton */}
        <div className="col-span-12 row-span-12 bg-background lg:col-span-3">
          <div className="bg-si-secondary bg-opacity-55 p-4 pl-6">
            <Skeleton className="mb-2 h-6 w-24" />
          </div>
          <div className="flex flex-col space-y-2 p-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 row-span-12 space-y-5 lg:col-span-9">
          {/* Advertisement Carousel skeleton */}
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Skeleton className="h-[400px] w-full" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* MedicalCategoryCard skeleton */}
      <div className="container mx-auto mt-8 px-4">
        <Skeleton className="mb-4 h-8 w-48" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg bg-background p-4 shadow">
              <Skeleton className="mb-4 h-40 w-full" />
              <Skeleton className="mb-2 h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
