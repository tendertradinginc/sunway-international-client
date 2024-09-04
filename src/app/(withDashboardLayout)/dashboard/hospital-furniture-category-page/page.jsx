import MedicalCategory from "@/components/Dashboard/MedicalCategory/MedicalCategory";
import { Suspense } from "react";
const page = () => {
  let pathName = "office-equipment-category";
  let pageName = "Office";
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MedicalCategory details={{ pathName, pageName }}> </MedicalCategory>
      </Suspense>
    </div>
  );
};

export default page;
