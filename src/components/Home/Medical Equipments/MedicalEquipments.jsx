import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import MedicalEquipmentCard from "@/components/shared/MedicalEquipmentCard/MedicalEquipmentCard";


const MedicalEquipments = async () => {
    const res = await fetch("http://localhost:5000/api/v1/medicalEquipment/all", {cache:"no-store"})
    const data = await res.json()
    const blogs = data?.data?.result?.slice(0,4)

    return (
        <MaxWidthWrapper className="py-20 mt-20 overflow-x-hidden">
            <h1 className="mb-12 text-3xl font-semibold text-si-primary md:text-5xl">
                Medical Equipments
            </h1>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
                {blogs.map((item, index) => {
                    return (
                        <div key={index}>
                            <MedicalEquipmentCard data={item} />
                        </div>
                    );
                })}
            </div>
        </MaxWidthWrapper>
    );
};

export default MedicalEquipments;