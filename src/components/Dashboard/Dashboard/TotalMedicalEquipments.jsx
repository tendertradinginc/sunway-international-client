import { FaStethoscope } from "react-icons/fa";


const TotalMedicalEquipments = () => {
    return (
        <div>
            {/* category 1 */}
            <div className="flex justify-center items-center gap-3 h-36 duration-500 bg-gradient-to-r from-[#16a249]  to-[#fbbf24] text-white">
                <FaStethoscope className="text-4xl text-si-white mb-2" />
                <h1 className=" text-center text-black text-md font-semibold">Total Blogs</h1>
            </div>
        </div>
    );
};

export default TotalMedicalEquipments;