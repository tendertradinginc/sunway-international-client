import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-2.5 md:px-5">
      <Skeleton className="mx-auto mt-3 h-8 w-3/4 max-w-lg md:mt-5 lg:mt-5 lg:h-10" />
      <div className="mt-4 flex w-full items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/hospital-furniture">Medical Equipment</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Skeleton className="h-4 w-24" />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Skeleton className="h-10 w-40" />{" "}
        {/* Placeholder for Search component */}
      </div>

      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:my-10 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="rounded-lg bg-background p-4 shadow">
            <Skeleton className="mb-4 h-48 w-full" /> {/* Image placeholder */}
            <Skeleton className="mb-2 h-6 w-3/4" /> {/* Title placeholder */}
            <Skeleton className="mb-2 h-4 w-full" />{" "}
            {/* Description placeholder */}
            <Skeleton className="h-4 w-1/2" />{" "}
            {/* Additional info placeholder */}
          </div>
        ))}
      </div>
    </div>
  );
}
