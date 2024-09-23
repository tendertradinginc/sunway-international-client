"use client";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";

const AuthorizeDistributionCard = ({ authorizer, index }) => {
  return (
    <motion.div
      initial={{ y: -150 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: (index + 1) * 0.5,
        ease: [0, 0.71, 0.71, 1.01],
      }}
      className=""
    >
      <div className="flex h-36 flex-col items-center justify-center bg-white text-white duration-500">
        <Image
          loader={customLoader}
          src={authorizer?.image}
          alt="Authorize Distribution"
          height="100"
          width="200"
          className=""
        />
      </div>
    </motion.div>
  );
};

export default AuthorizeDistributionCard;
