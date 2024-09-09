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
      className="flex h-full min-h-[400px] flex-col bg-background"
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
      <div className="h-full flex-1 border-b px-2.5 py-3 text-left shadow-xl shadow-green-100 mb-16">
        <div className="flex h-full flex-col items-start justify-between">
          <div className="flex-1">
            <h3 className="line-clamp-2 text-lg font-bold">
              {data?.productName}
            </h3>
            <p className="line-clamp-2 flex-grow text-sm">
              <span className="font-semibold">Model:</span>{" "}
              {data && (data.modelNumber || data.model)}
            </p>
            <p className="mx-auto my-2 line-clamp-2 text-wrap text-sm text-muted-foreground">
              {data?.shortDescription}
            </p>
          </div>
          <Button asChild variant="custom">
            <Link href={navigateTo}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EquipmentCard;
