import UpdateOfficeEquipmentForm from "@/components/Dashboard/OfficeEquipmentTable/UpdateOfficeEquipmentForm";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateOfficeEquipmentForm />
      </Suspense>
    </div>
  );
};

export default page;
