import ArchivedEquipmentTable from "@/components/Dashboard/ArchivedEquipmentTable/ArchivedEquipmentTable";
import { Suspense } from "react";
const archivedEquipmentTablePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ArchivedEquipmentTable />
      </Suspense>
    </div>
  );
};

export default archivedEquipmentTablePage;
