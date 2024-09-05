"use client";

import { Button } from "@/components/ui/button";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const EquipmentCard = ({ navigateTo = "", data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-[400px] bg-background"
    >
      <div className="relative mx-auto h-[250px] w-full">
        <Image
          src={data ? data?.images[0] : ""}
          alt={data?.productName || "Product"}
          fill
          className="h-auto w-auto object-contain object-center"
          loader={customLoader}
        />
      </div>
      <div className="text-balance border-b px-2.5 py-3 text-left shadow-xl shadow-green-100">
        <h3 className="line-clamp-1 text-lg font-bold">{data?.productName}</h3>

        <p className="mx-auto my-2 line-clamp-2 text-wrap text-sm text-muted-foreground">
          {data?.shortDescription}
        </p>
        <Button asChild variant="custom">
          <Link href={navigateTo}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default EquipmentCard;
