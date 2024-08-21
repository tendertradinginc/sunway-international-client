import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import EqipmentCard from "@/components/shared/EqipmentCard/EqipmentCard";

const OfficeEquipmentPage = async () => {
  const data = await fetch(
    "http://localhost:5000/api/v1/officeEquipment/all?search=&limit=&page=",
  ).then((res) => res.json());

  const products = data?.data?.result || [];

  return (
    <div className="bg-secondary">
      <h2 className="py-3 text-center text-2xl font-bold md:py-5 lg:text-4xl">
        Office Equipment
      </h2>

      <MaxWidthWrapper className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {products?.map((product, index) => (
          <div key={product.id || index}>
            <EqipmentCard
              navigateTo={`/office-equipment/${product._id}`}
              data={product}
            />
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default OfficeEquipmentPage;
