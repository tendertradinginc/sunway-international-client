"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";
import "./construction.css";

const ConstructionService = () => {
  return (
    <MaxWidthWrapper className="overflow-x-hidden py-24">
      <SectionTitle
        title="Hospital Renovation"
        description="Twin Trade International aims to create spaces that heal, supply tools that cure as we deliver excellence to your doorstep"
      />
      <div className="gid bg-container mt-10">
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative bg-cover"
        >
          <div className="grid grid-cols-1 px-8 py-32 md:grid-cols-2">
            <div className="text-[#EFEFEF]">
              <h3 className="text-xl">BUILDING</h3>
              <h2 className="my-3 text-3xl font-bold text-[#EFEFEF]">
                Latest ICU Room For <br /> Emergency
              </h2>
              <p className="my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <button className="flex items-center gap-x-2 rounded-md border border-transparent text-lg font-semibold duration-300 hover:border-[#fff] hover:text-[#fff]">
                <Link className="px-3 py-2" href="/services">
                  View more{" "}
                </Link>
                <span>
                  {" "}
                  <FaArrowRight />
                </span>
              </button>
            </div>
            <div></div>
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ConstructionService;
