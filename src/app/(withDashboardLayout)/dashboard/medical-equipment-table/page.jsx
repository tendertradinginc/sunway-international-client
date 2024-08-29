import MedicalEquipmentTable from "@/components/Dashboard/MedicalEquipmentTable/MedicalEquipmentTable";
import { Suspense } from "react";
const medicalEquipmentTablePage = async () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <MedicalEquipmentTable />
      </Suspense>
    </div>
  );
};

export default medicalEquipmentTablePage;
