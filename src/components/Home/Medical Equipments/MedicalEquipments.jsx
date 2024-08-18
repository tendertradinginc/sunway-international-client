import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalEquipmentCard from "@/components/shared/MedicalEquipmentCard/MedicalEquipmentCard";


const MedicalEquipments = () => {
    return (
        <MaxWidthWrapper className="py-16">
            <h1 className="mb-10 text-3xl font-semibold text-si-primary md:text-5xl">
                Medical Equipments
            </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => {
                    return (
                        <div key={index}>
                            <MedicalEquipmentCard />
                        </div>
                    );
                })}
            </div>
        </MaxWidthWrapper>
    );
};

export default MedicalEquipments;