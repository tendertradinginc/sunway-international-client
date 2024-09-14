"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";

const ConstructionService = () => {
  return (
    <MaxWidthWrapper className="mt-10 overflow-x-hidden py-16">
      <SectionTitle
        title="Hospital Renovation"
        description="Twin Trade International aims to create spaces that heal, supply tools that cure as we deliver excellence to your doorstep"
      />
      <div className="mt-10 grid grid-cols-12 grid-rows-12 gap-y-10 md:gap-10">
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-span-12 row-span-12 bg-[url('https://i.ibb.co/XFvgv42/national-cancer-institute-w7-Pby5b-DKW4-unsplash-1.jpg')] bg-cover md:col-span-6 md:row-span-12"
        ></motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ConstructionService;
