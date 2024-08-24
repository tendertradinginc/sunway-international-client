"use client"
import { MdBathtub, MdOutlineListAlt } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";
import { PiBedBold } from "react-icons/pi";
import { TfiWheelchair } from "react-icons/tfi";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const BannerCategory = () => {
    return (
        <section className="overflow-x-hidden" >
            <motion.div initial={{ x:1000 }} transition={{duration:1.2}} whileInView={{x:0}}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-b mb-8 ">

                {/* category 1 */}
                <div className=" flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-r">
                <RiFirstAidKitFill  className="text-6xl text-si-primary mb-2" />
                    <h1 className=" text-center text-black text-md font-semibold">Walking Aids Series</h1>
                </div>
                {/* category 2 */}
                <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-r">
                <MdBathtub className="text-6xl text-si-primary mb-2" />
                    <h1 className="text-center text-black text-md font-semibold">Bathroom Safety Series</h1>
                </div>
                {/* category 3 */}
                <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-r">
                <TfiWheelchair className="text-6xl text-si-primary mb-2" />
                    <h1 className="text-center text-black text-md font-semibold">Wheelchair Series</h1>
                </div>
                {/* category 4 */}
                <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-r">
                <PiBedBold  className="text-6xl text-si-primary mb-2" />
                    <h1 className="text-center text-black text-md font-semibold">Hospital Bed Series</h1>
                </div >
                {/* category 5 */}
                <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-r">
                <MdAddShoppingCart className="text-6xl text-si-primary mb-2" />
                    <h1 className="text-center text-black text-md font-semibold">Hospital Furniture Series</h1>
                </div>
                {/* category 6 */}
                <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white">
                <MdOutlineListAlt className="text-6xl text-si-primary mb-2" />
                    <h1 className="text-center text-black text-md font-semibold">Accessories</h1>
                </div>

            </motion.div>
        </section>
    );
};

export default BannerCategory;