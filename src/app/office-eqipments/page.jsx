import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import OfficeEqipmentCard from "@/components/shared/OfficeEqipmentCard/OfficeEqipmentCard";

const OfficeEqipmentsPage = () => {

  return (
    <div>
      <h2 className="mt-3 text-center text-2xl font-bold md:mt-5 lg:mt-5 lg:text-4xl">
        Office Eqipments
      </h2>

      <MaxWidthWrapper className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <div key={index}>
              <OfficeEqipmentCard />
            </div>
          );
        })}
      </MaxWidthWrapper>
    </div>
  );
};

export default OfficeEqipmentsPage;
