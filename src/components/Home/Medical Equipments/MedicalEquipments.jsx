import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalEquipmentCard from "@/components/shared/MedicalEquipmentCard/MedicalEquipmentCard";

const MedicalEquipments = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/medicalEquipment/all",
    { cache: "no-store" },
  );
  const data = await res.json();
  const blogs = data?.data?.result?.slice(0, 4);

  return (
    <div className="bg-green-50">
      <MaxWidthWrapper className="mt-20 overflow-x-hidden py-20">
        <h1 className="mb-12 text-3xl font-semibold text-si-primary md:text-5xl">
          Medical <span className="text-[#fbbf24]"> Equipments</span>
        </h1>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((item, index) => {
            return (
              <div key={index}>
                <MedicalEquipmentCard
                  data={item}
                  navigateTo={`/medical-equipment/${item?.category}/${item?._id}`}
                />
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MedicalEquipments;
