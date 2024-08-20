import BarChartData from "@/components/Dashboard/Dashboard/BarChartData";
import TotalClients from "@/components/Dashboard/Dashboard/TotalClients";
import TotalConstructionBlogs from "@/components/Dashboard/Dashboard/TotalConstractionBlogs";
import TotalFurnitureEquipments from "@/components/Dashboard/Dashboard/TotalFurnitureEquipments";
import TotalMedicalEquipments from "@/components/Dashboard/Dashboard/TotalMedicalEquipments";

const dashboardPage = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4">
                <TotalConstructionBlogs />
                <TotalMedicalEquipments />
                <TotalFurnitureEquipments />
                <TotalClients />
            </div>
            <div className="grid mt-4 px-4">
                <div className="w-3/5 border">
                    <BarChartData />
                </div>
                <div className="w-2/5">

                </div>
            </div>
        </div>
    );
};

export default dashboardPage;