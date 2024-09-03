import UpdateMedicalEqupment from "@/components/Dashboard/MedicalEquipmentTable/UpdateMedicalEqupment";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateMedicalEqupment />
      </Suspense>
    </div>
  );
};

export default page;
