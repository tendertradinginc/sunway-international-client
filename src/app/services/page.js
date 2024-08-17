import ContructionService from "@/components/services/ContructionService";
import RegularEquipment from "@/components/services/RegularEquipment";

const page = () => {
  return (
    <div className="py-10">
      <ContructionService />
      <RegularEquipment />
    </div>
  );
};

export default page;
