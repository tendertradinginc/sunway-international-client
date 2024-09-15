import MedicalEquipmentService from "@/components/services/MedicalEquipmentService";
import ServiceBanner from "@/components/services/ServiceBanner";
import ServiceMain from "@/components/services/ServiceMain";

const page = () => {
  return (
    <div className="py-10">
      {/* <ContructionService />
      <MedicalInstrument />
      <RegularEquipment /> */}
      <ServiceBanner />
      <ServiceMain></ServiceMain>
      <MedicalEquipmentService></MedicalEquipmentService>
    </div>
  );
};

export default page;
