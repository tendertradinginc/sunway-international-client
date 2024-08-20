import { FaUsers } from "react-icons/fa";


const TotalClients = () => {
    return (
        <div>
        <div className="flex justify-center items-center gap-3 h-36 duration-500 bg-gradient-to-r from-[#16a249]  to-[#fbbf24] text-white">
            <FaUsers className="text-7xl text-si-white mb-2" />
            <h1 className=" text-center text-black text-md font-semibold">Total Clents</h1>
        </div>
    </div>
    );
};

export default TotalClients;