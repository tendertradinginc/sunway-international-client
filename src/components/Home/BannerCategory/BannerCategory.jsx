

const BannerCategory = () => {
    return (
        <section >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ">

                {/* category 1 */}
                <div className=" flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className=" text-center text-black text-lg font-semibold">Walking Aids Series</h1>
                </div>
                {/* category 2 */}
                <div className="flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className="text-center text-black text-lg font-semibold">Bathroom Safety Series</h1>
                </div>
                {/* category 3 */}
                <div className="flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className="text-center text-black text-lg font-semibold">Wheelchair Series</h1>
                </div>
                {/* category 4 */}
                <div className="flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className="text-center text-black text-lg font-semibold">Hospital Bed Series</h1>
                </div >
                {/* category 5 */}
                <div className="flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className="text-center text-black text-lg font-semibold">Hospital Furniture Series</h1>
                </div>
                {/* category 6 */}
                <div className="flex justify-center items-center h-32 hover:bg-gradient-to-r from-[#fbbe24d3]  via-[#faca5083] to-[#FEF3D7] text-white">
                    <h1 className="text-center text-black text-lg font-semibold">Accessories</h1>
                </div>

            </div>
        </section>
    );
};

export default BannerCategory;