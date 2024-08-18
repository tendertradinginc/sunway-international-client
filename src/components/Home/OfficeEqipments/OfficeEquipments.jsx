import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import OfficeEqipmentCard from "@/components/shared/OfficeEqipmentCard/OfficeEqipmentCard";
import React from "react";

const OfficeEquipments = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <h1 className="mb-10 text-3xl font-semibold text-si-primary md:text-5xl">
        Office Eqipments
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div key={index}>
              <Medical />
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default OfficeEquipments;
