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
    </div>
  );
};

export default page;
