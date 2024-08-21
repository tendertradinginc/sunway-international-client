import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EqipmentCard from "@/components/shared/EqipmentCard/EqipmentCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const MedicalCategoryPage = ({ params }) => {
  return (
    <MaxWidthWrapper>
      <h2 className="mt-3 text-center text-2xl font-bold capitalize md:mt-5 lg:mt-5 lg:text-4xl">
        {params?.category}
      </h2>
      <div className="w-full flex justify-between items-center">
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
                <Link href="/medical-equipment">Medical Equipment</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Category</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Input
          type="text"
          name="search"
          placeholder="Search For Products..."
          className="bg-background max-w-[185px] lg:max-w-[250px]"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <div key={index}>
              <EqipmentCard navigateTo={`/medical-equipment/linen/${index}`} />
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default MedicalCategoryPage;
