"use client";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

const MedicalEquipmentCard = ({ data }) => {
  const { productName, images, shortDescription } = data;
  console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="flex h-full flex-col"
    >
      <Image
        loader={customLoader}
        src={images[0]}
        alt="medical equipment"
        height="100"
        width="200"
        className="w-96"
      />
      <div className="flex flex-1 flex-col p-3 shadow-md">
        <h3 className="mt-7 text-lg hover:underline">
          <b>Product Name:</b> {productName}
        </h3>
        <p className="mt-1 line-clamp-2 flex-grow text-sm">
          <b>Short Description:</b> {shortDescription}
        </p>
        {/* <Link href={"/"} className="text-si-accent pa font-bold">Explore More</Link> */}
        <Link href={"/"}>
          <button className="mt-2 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-black">
            Explore More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MedicalEquipmentCard;
