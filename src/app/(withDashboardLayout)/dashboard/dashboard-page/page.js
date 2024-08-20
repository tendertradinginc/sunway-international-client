import TotalConstructionBlogs from "@/components/Dashboard/Dashboard/TotalConstractionBlogs";

const dashboardPage = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4">
                <TotalConstructionBlogs />
                <TotalConstructionBlogs />
                <TotalConstructionBlogs />
                <TotalConstructionBlogs />
            </div>
        </div>
    );
};

export default dashboardPage;