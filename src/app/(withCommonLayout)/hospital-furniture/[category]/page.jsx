import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";
import Search from "@/components/shared/Search/Search";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const HospitalFurnitureCategoryPage = async ({ params, searchParams }) => {
  const searchText = searchParams.search;

  // Decode the category name
  const decodedCategory = decodeURIComponent(params.category);

  //* Fetching MAIN Data
  let res = await fetch(
    `http://localhost:5000/api/v1/officeEquipment/category/${decodedCategory}?search=${searchText ? searchText : ""}`,
    {
      cache: "no-store",
    },
  );

  const equipmentJson = await res.json();
  const equipment = equipmentJson?.data;

  return (
    <MaxWidthWrapper>
      <h2 className="mt-3 text-center text-2xl font-bold capitalize md:mt-5 lg:mt-5 lg:text-4xl">
        {decodedCategory}
      </h2>
      <div className="flex w-full items-center justify-between">
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
                <Link href="/hospital-furniture">Hospital Furniture</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{decodedCategory}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Search category={decodedCategory} pageName="hospital-furniture" />
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {equipment?.length > 0 ? (
          equipment?.map((item) => (
            <div key={item._id}>
              <EquipmentCard
                data={item}
                navigateTo={`/hospital-furniture/${params.category}/${item._id}`}
              />
            </div>
          ))
        ) : (
          <p className="col-span-4 min-h-56 text-center text-xl font-bold">
            No equipment found in this category.
          </p>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default HospitalFurnitureCategoryPage;
