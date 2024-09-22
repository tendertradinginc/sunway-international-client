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

const MedicalCategoryPage = async ({ params, searchParams }) => {
  const searchText = searchParams.search || "";

  // Decode the category name
  const decodedCategory = decodeURIComponent(params.category);

  //* Fetching MAIN Data
  let res = await fetch(
    `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/category?category=${decodedCategory}${searchText ? `&search=${searchText}` : ""}`,
    {
      cache: "no-store",
    },
  );

  const equipmentJson = await res.json();
  const equipment = equipmentJson?.data;

  return (
    <MaxWidthWrapper className="mt-28">
      <h2 className="mt-3 mb-8 text-center text-2xl font-bold capitalize md:mt-5 lg:mt-5 lg:text-4xl">
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
                <Link href="/medical-equipment">Medical Equipment</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{decodedCategory}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Search category={decodedCategory} pageName="medical-equipment" />
      </div>

      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:my-10 lg:grid-cols-4">
        {equipment.length > 0 ? (
          equipment.map((item) => (
            <div key={item._id}>
              <EquipmentCard
                data={item}
                navigateTo={`/medical-equipment/${params.category}/${item._id}`}
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

export default MedicalCategoryPage;
