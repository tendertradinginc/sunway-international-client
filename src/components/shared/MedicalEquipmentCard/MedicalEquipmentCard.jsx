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
      className="flex h-full flex-col shadow-inner w-96" // Ensure a fixed width for each card
    >
      <div className="h-52 relative overflow-hidden"> {/* Ensure a fixed aspect ratio for the image container */}
        <Image
          loader={customLoader}
          src={images[0]}
          alt="medical equipment"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-1 flex-col border-b p-3 shadow-md shadow-green-100">
        <h3 className="mt-7 text-lg hover:underline">
          <b>{productName}</b>
        </h3>
        <p className="mt-1 line-clamp-2 flex-grow text-sm">
          <span>Model:</span> <b>{model}</b>
        </p>
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
