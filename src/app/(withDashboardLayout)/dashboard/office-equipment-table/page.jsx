import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

export const dynamic = "force-dynamic";

const officeEquipmentTablePage = async () => {
  const data = await fetch(
    "http://localhost:5000/api/v1/officeEquipment/all?search=&limit=&page=",
  ).then((res) => res.json());

  const products = data?.data?.result || [];

  console.log(products[0]);

  return (
    <div>
      <MaxWidthWrapper>
        <h3>Total Office Equipment: 10</h3>
      </MaxWidthWrapper>
    </div>
  );
};

export default officeEquipmentTablePage;
