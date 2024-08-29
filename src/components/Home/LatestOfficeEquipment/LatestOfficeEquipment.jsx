import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EquipmentCard from "@/components/shared/EquipmentCard/EquipmentCard";

const LatestOfficeEquipment = async () => {
  const res = await fetch(
    "https://sunway-international-server.vercel.app/api/v1/officeEquipment/all",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  const blogs = data?.data?.result?.slice(0, 4);

  return (
    <MaxWidthWrapper className="mt-10 overflow-x-hidden py-20">
      <h1 className="mb-10 text-3xl font-semibold text-si-primary md:text-5xl">
        Latest Office Eqipment
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((item, index) => {
          return (
            <div key={index}>
              <EquipmentCard
                data={item}
                navigateTo={`/office-equipment/${index}`}
              />
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default LatestOfficeEquipment;
