import HospitalFurnitureTable from "@/components/Dashboard/HospitalFurnitureTable/HospitalFurnitureTable";
import { Suspense } from "react";
const HospitalFurnitureTablePage = async () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <HospitalFurnitureTable />
      </Suspense>
    </div>
  );
};

export default HospitalFurnitureTablePage;
