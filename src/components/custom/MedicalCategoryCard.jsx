import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import EquipmentCard from "../shared/EquipmentCard/EquipmentCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

const MedicalCategoryCard = () => {
  // TODO: replace the links with the actual category
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/medicalEquipment/all-category", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);

        const test = data?.data?.map((item, idx) => {
          const categoryName = Object.keys(item)[0];
          setCategories(categoryName);
          return categoryName;
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MaxWidthWrapper className="min-h-[50vh] py-16">
      {data?.slice(0, 4).map((categoryObj, index) => {
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
                  <Link href={`/medical-equipment/${categoryName}`}>
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
                      navigateTo={`/medical-equipment/${categoryName}/${item?._id}`}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
      ;
    </MaxWidthWrapper>
  );
};

export default MedicalCategoryCard;
