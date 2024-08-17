import ContructionService from "@/components/services/ContructionService";
import MedicalInstrument from "@/components/services/MedicalInstrument";
import RegularEquipment from "@/components/services/RegularEquipment";

const page = () => {
  return (
    <div className="py-10">
      <ContructionService />
      <MedicalInstrument />
      <RegularEquipment />
    </div>
  );
};

export default page;
