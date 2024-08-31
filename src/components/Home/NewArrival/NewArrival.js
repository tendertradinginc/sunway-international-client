"use client"
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const NewArrival = () => {
  return (
    <MaxWidthWrapper className="py-16 mt-7 overflow-x-hidden">
      <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">
        Latest Innovations
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-10 mt-12 ">
        <motion.div initial={{ x:-300 }} whileInView={{x:0}} transition={{duration:1}}   className="grid grid-cols-1 md:grid-cols-2  rounded-sm shadow-2xl bg-[#faca503b]">
          <div className="p-8">
            <button className="bg-[#fbbe24d3] rounded-sm px-3 p-1 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="text-2xl font-semibold my-3">
              Digital Thermometer Gun For Covid - 19
            </h1>
            <p className="">
            A cardiopulmonary monitor displaying vital signs for heart and lung function in critical care.
            </p>
          </div>
          <div className="bg-[#faca5083] rounded-t-full md:rounded-l-full md:rounded-r-none flex justify-center items-center ">
            <Image
              height={100}
              width={200}
              alt="Covid 19 gun"
              src="https://i.postimg.cc/nVvKKm68/y-Fp-OUyfj-JOEk-ZA-XYZxyu-transformed.webp"
            />
          </div>
        </motion.div>

        <motion.div initial={{ x:300 }} whileInView={{x:0}} transition={{duration:1}} className="grid grid-cols-1 md:grid-cols-2  rounded-sm shadow-2xl bg-[#16a24934]">
          <div className="p-8">
            <button className="bg-[#16a249d3] rounded-sm px-3 p-1 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="text-2xl font-semibold my-3">
            Infant Phototherapy Incubator
            </h1>
            <p className="">
            An infant phototherapy incubator providing controlled light therapy for treating newborn jaundice.
            </p>
          </div>
          <div className="bg-[#16a2494d] rounded-t-full md:rounded-l-full md:rounded-r-none flex justify-center items-center ">
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
