import UpdateOfficeMedicalEquipment from "@/components/Dashboard/OfficeEquipmentTable/UpdateOfficeMedicalEquipment";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateOfficeMedicalEquipment></UpdateOfficeMedicalEquipment>
      </Suspense>
    </div>
  );
};

export default page;
