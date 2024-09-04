import UpdateHospitalFurnitureForm from "@/components/Dashboard/HospitalFurnitureTable/UpdateHospitalFurnitureForm";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateHospitalFurnitureForm />
      </Suspense>
    </div>
  );
};

export default page;
