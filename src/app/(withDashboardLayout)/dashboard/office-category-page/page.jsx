import MedicalCategory from "@/components/Dashboard/MedicalCategory/MedicalCategory";

const page = () => {
  let pathName = "office-equipment-category";
  let pageName = "Office";
  return (
    <div>
      <MedicalCategory details={{ pathName, pageName }}> </MedicalCategory>
    </div>
  );
};

export default page;
