import MedicalCategoryCard from "@/components/custom/MedicalCategoryCard";

const MedicalEquipmentPage = () => {
  // TODO: Get api to send data in 4 seperate chunks like Linen:[{obj}, {obj}, {obj}] , whilchare:[{obj}, {obj}, {obj}]. Map that and show category cards
  return (
    <div>
      <h2 className="mt-3 text-center text-2xl font-bold md:mt-5 lg:mt-5 lg:text-4xl">
        Medical Equipment
      </h2>

      <MedicalCategoryCard />
    </div>
  );
};

export default MedicalEquipmentPage;
