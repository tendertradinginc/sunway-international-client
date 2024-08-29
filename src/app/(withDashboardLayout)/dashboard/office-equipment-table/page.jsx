import OfficeEquipmentTable from "@/components/Dashboard/OfficeEquipmentTable/OfficeEquipmentTable";
import { Suspense } from "react";
const officeEquipmentTablePage = async () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <OfficeEquipmentTable />
      </Suspense>
    </div>
  );
};

export default officeEquipmentTablePage;
