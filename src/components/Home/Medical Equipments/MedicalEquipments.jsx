import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const MedicalEquipments = async () => {
  const res = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/medicalEquipment/all",
    { cache: "no-store" },
  );
  const data = await res.json();
  const blogs = data?.data?.result?.slice(0, 4);

  return (
    <MaxWidthWrapper>
      <SectionTitle
        title="Medical Equipment"
        description="Twin Trade International aims to create spaces that heal, supply tools that cure as we deliver excellence to your doorstep"
      />
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((item, index) => (
          <div key={index}>
            <EquipmentCard
              data={item}
              navigateTo={`/medical-equipment/${item?.category}/${item?._id}`}
            />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default MedicalEquipments;
