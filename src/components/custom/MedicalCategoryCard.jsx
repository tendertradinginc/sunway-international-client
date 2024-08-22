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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/medicalEquipment/all-category", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
        console.log(data?.data);
        const test = data?.data?.map((item, idx) => {
          const categoryName = Object.keys(item)[0];
          setCategories(categoryName);
          return categoryName;
        });
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <MaxWidthWrapper className="py-16 min-h-[50vh]">
       {data?.slice(0,4).map((categoryObj, index) => {
        // Access the keys of each object (category name)
        const categoryName = Object.keys(categoryObj)[0];
        const items = categoryObj[categoryName];
        
        return (
          <Card key={index} className="w-full mb-16">
          <CardHeader>
            <div className="flex items-center justify-between border-b-2 pb-1">
              <CardTitle className="text-xl md:text-2xl lg:text-4xl">
                {categoryName}
              </CardTitle>
              <Button asChild>
                <Link href={`/medical-equipment/${"linen"}`}>
                  View More <DoubleArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <EqipmentCard data={item}  navigateTo={`/medical-equipment/linen/${index}`} />
                </div>
              );
            })}
          </CardContent>
        </Card>
          // <div key={index}>
          //   <h2>{categoryName}</h2>
          //   <div className="card-container">
          //     {items.map((item, idx) => (
          //       <div key={idx} className="card">
          //         {console.log(item)
          //         }
          //     <p>{item.productName}</p>
          //       </div>
          //     ))}
          //   </div>
          // </div>
        )
      })}
      ;
    </MaxWidthWrapper>
  );
};

export default MedicalCategoryCard;
