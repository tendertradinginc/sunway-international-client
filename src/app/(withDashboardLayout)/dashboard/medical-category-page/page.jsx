import MedicalCategory from "@/components/Dashboard/MedicalCategory/MedicalCategory";

const page = () => {
  let pathName = "medical-category";
  let pageName = "Medical";
  return (
    <div>
      <MedicalCategory details={{ pathName, pageName }}> </MedicalCategory>
    </div>
  );
};

export default page;
