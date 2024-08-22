import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EqipmentCard from "@/components/shared/EqipmentCard/EqipmentCard";
import { Button } from "@/components/ui/button";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const MedicalCategoryCard = () => {
  // TODO: replace the links with the actual category
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/medicalEquipment/all-category")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
       setData(data.data)
       const test = data?.data?.map((item, idx)=> {
        const categoryName = Object.keys(item)[0];
        return categoryName
        setCategories(categoryName)
       })
      console.log(test)
      })
      .catch((error) => console.log(error));
  }, [loading]);

  return (
    <MaxWidthWrapper className="py-16">
       {data.map((categoryObj, index) => {
        // Access the keys of each object (category name)
        const categoryName = Object.keys(categoryObj)[0];
        const items = categoryObj[categoryName];

        return (
          <div key={index}>
            <h2>{categoryName}</h2>
            <div className="card-container">
              {items.map((item, idx) => (
                <Card key={idx} className="w-full mb-16">
                <CardHeader>
                  <div className="flex items-center justify-between border-b-2 pb-1">
                    <CardTitle className="text-xl md:text-2xl lg:text-4xl">
                      Linen
                    </CardTitle>
                    <Button asChild>
                      <Link href={`/medical-equipment/${"linen"}`}>
                        View More <DoubleArrowRightIcon className="ml-2 size-5" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, index) => {
                    return (
                      <div key={index}>
                        <EqipmentCard
                          navigateTo={`/medical-equipment/linen/${index}`}
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        );
      })}
      {/* {data?.map((item, idx)=> <Card key={idx} className="w-full mb-16">
        <CardHeader>
          <div className="flex items-center justify-between border-b-2 pb-1">
            <CardTitle className="text-xl md:text-2xl lg:text-4xl">
              Linen
            </CardTitle>
            <Button asChild>
              <Link href={`/medical-equipment/${"linen"}`}>
                View More <DoubleArrowRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index}>
                <EqipmentCard
                  navigateTo={`/medical-equipment/linen/${index}`}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>)} */}
 
    </MaxWidthWrapper>
  );
};

export default MedicalCategoryCard;
