import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EqipmentCard from "@/components/shared/EqipmentCard/EqipmentCard";
import { Button } from "@/components/ui/button";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

const MedicalCategoryCard = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between border-b-2 pb-1">
            <CardTitle className="text-xl md:text-2xl lg:text-4xl">
              Linen
            </CardTitle>
            <Button>
              View More <DoubleArrowRightIcon className="ml-2 size-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index}>
                <EqipmentCard navigateTo={`/medical-equipment/${index}`} />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default MedicalCategoryCard;
