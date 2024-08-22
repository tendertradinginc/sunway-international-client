import MedicalEquipmentTable from "@/components/Dashboard/MedicalEquipmentTable/MedicalEquipmentTable";

const medicalEquipmentTablePage = async () => {
  return (
    <div className="w-full p-5 md:p-10">
      <MedicalEquipmentTable />
    </div>
  );
};

export default medicalEquipmentTablePage;