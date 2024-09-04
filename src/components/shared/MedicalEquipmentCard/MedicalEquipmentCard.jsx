"use client";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MedicalEquipmentCard = ({ data, navigateTo }) => {
  const { productName, images, model } = data;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="flex h-full flex-col border shadow-inner"
    >
      <Image
        loader={customLoader}
        src={images[0]}
        alt="medical equipment"
        height="100"
        width="200"
        className="w-96 grow"
      />
      <div className="flex flex-1 flex-col p-3 shadow-md">
        <h3 className="mt-7 text-lg hover:underline">
          <b> {productName}</b>
        </h3>
        <p className="mt-1 line-clamp-2 flex-grow text-sm">
          <span>Model:</span> <b>{model}</b>
        </p>
        {/* <Link href={"/"} className="text-si-accent pa font-bold">Explore More</Link> */}
        <Link href={navigateTo}>
          <button className="mt-2 rounded-sm border border-[#fbbe24d3] bg-[#fbbe24d3] p-1 px-3 text-sm font-semibold text-black duration-300 hover:bg-transparent hover:text-si-accent">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MedicalEquipmentCard;
