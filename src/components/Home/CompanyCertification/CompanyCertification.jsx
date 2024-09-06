"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const CompanyCertification = () => {
  return (
    <MaxWidthWrapper className="my-20">
      <SectionTitle title1={"Our"} title2={"Achievement"}></SectionTitle>
      <div className="relative flex flex-col items-center justify-center shadow-none lg:flex-row lg:justify-end">
        {/* Right Section with Content */}
        <div className="order-2 min-h-[50vh] w-full bg-si-primary p-6 text-center lg:order-1 lg:min-h-[70vh] lg:w-8/12 lg:p-10">
          <div className="p-4 lg:p-24 lg:text-end">
            <h2 className="text-2xl font-bold text-si-accent lg:text-5xl">
              Our Achievements
            </h2>
            <p className="pt-3 text-sm text-white lg:pl-6 lg:text-xl">
              Our Company offers a variety of services to meet your project's
              needs, from collaboration meetings all the way to ribbon-cutting
              and beyond.
            </p>
            <div className="flex items-center justify-center pt-3 lg:items-end lg:justify-end">
              <button className="flex gap-3 rounded-sm bg-si-accent px-3 py-2 font-semibold text-white duration-700 hover:bg-[#b9af21] lg:px-6">
                Explore More
                <FaArrowRightLong className="text-lg lg:text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Positioned Image Slightly Overlapping the Content */}
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,

            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative left-0 order-1 mb-4 w-full transform lg:absolute lg:order-2 lg:mb-0 lg:w-auto lg:translate-x-[10%]"
        >
          <Image
            src="https://i.postimg.cc/SRvVNgcV/ct.png"
            alt="Certificate Image"
            width={500}
            height={200}
            className="w-full rounded-none object-cover lg:w-[100%]"
          />
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CompanyCertification;
