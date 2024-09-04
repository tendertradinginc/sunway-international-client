"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const NewArrival = () => {
  return (
    <MaxWidthWrapper className="mt-7 overflow-x-hidden py-16">
      <h1 className="mb-12 text-3xl font-semibold text-si-primary md:text-5xl">
        Latest <span className="text-[#fbbf24]"> Innovations</span>
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 rounded-sm bg-[#faca503b] shadow-2xl md:grid-cols-2"
        >
          <div className="p-8">
            <button className="rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="my-3 text-2xl font-semibold">
              Digital Thermometer Gun For Covid - 19
            </h1>
            <p className="">
              A cardiopulmonary monitor displaying vital signs for heart and
              lung function in critical care.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-t-full bg-[#faca5083] md:rounded-l-full md:rounded-r-none">
            <Image
              height={100}
              width={200}
              alt="Covid 19 gun"
              src="https://i.postimg.cc/nVvKKm68/y-Fp-OUyfj-JOEk-ZA-XYZxyu-transformed.webp"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 rounded-sm bg-[#16a24934] shadow-2xl md:grid-cols-2"
        >
          <div className="p-8">
            <button className="rounded-sm bg-[#16a249d3] p-1 px-3 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="my-3 text-2xl font-semibold">
              Infant Phototherapy Incubator
            </h1>
            <p className="">
              An infant phototherapy incubator providing controlled light
              therapy for treating newborn jaundice.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-t-full bg-[#16a2494d] md:rounded-l-full md:rounded-r-none">
            <Image
              height={100}
              width={200}
              alt="Covid 19 gun"
              src="https://i.postimg.cc/W3dWb43N/5s1-Yb74-Jzqy-YWE3-Nt-AAjz-transformed.webp"
            />
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NewArrival;
