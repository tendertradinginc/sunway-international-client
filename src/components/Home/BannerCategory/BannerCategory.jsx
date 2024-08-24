"use client";
import { MdBathtub, MdOutlineListAlt } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";
import { PiBedBold } from "react-icons/pi";
import { TfiWheelchair } from "react-icons/tfi";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const BannerCategory = () => {
  return (
    <section className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1.2 }}
        className="mb-8 grid grid-cols-1 border-b md:grid-cols-2 lg:grid-cols-6"
      >
        {/* category 1 */}
        <div className="flex h-36 flex-col items-center justify-center border-r from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <RiFirstAidKitFill className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Walking Aids Series
          </h1>
        </div>
        {/* category 2 */}
        <div className="flex h-36 flex-col items-center justify-center border-r from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <MdBathtub className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Bathroom Safety Series
          </h1>
        </div>
        {/* category 3 */}
        <div className="flex h-36 flex-col items-center justify-center border-r from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <TfiWheelchair className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Wheelchair Series
          </h1>
        </div>
        {/* category 4 */}
        <div className="flex h-36 flex-col items-center justify-center border-r from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <PiBedBold className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Hospital Bed Series
          </h1>
        </div>
        {/* category 5 */}
        <div className="flex h-36 flex-col items-center justify-center border-r from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <MdAddShoppingCart className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Hospital Furniture Series
          </h1>
        </div>
        {/* category 6 */}
        <div className="flex h-36 flex-col items-center justify-center from-[#fbbe24d3] to-[#faca5083] text-white duration-500 hover:bg-gradient-to-r">
          <MdOutlineListAlt className="mb-2 text-6xl text-si-primary" />
          <h1 className="text-md text-center font-semibold text-black">
            Accessories
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerCategory;
