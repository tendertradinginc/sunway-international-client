"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import axios from "axios";
import { useEffect, useState } from "react";

import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";
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

const HospitalFurnitureCategoryPage = ({ params }) => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Decode the category name
  const decodedCategory = decodeURIComponent(params.category);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await axios.get(
          `https://sunway-international-server.vercel.app/api/v1/officeEquipment/category/${params.category}`,
        );
        setEquipment(response?.data?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [params.category]);

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

        <Input
          type="text"
          name="search"
          placeholder="Search For Products..."
          className="max-w-[185px] bg-background lg:max-w-[250px]"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="col-span-4 text-center text-red-500">{error}</p>
        ) : equipment?.length > 0 ? (
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
