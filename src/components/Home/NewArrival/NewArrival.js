"use client"
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const NewArrival = () => {
  return (
    <MaxWidthWrapper className="py-16 overflow-x-hidden">
      <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">
        Latest Innovations
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-10 mt-10">
        <motion.div initial={{ x:-300 }} whileInView={{x:0}} transition={{duration:1}} className="grid grid-cols-1 md:grid-cols-2  rounded-sm shadow-2xl bg-[#faca503b]">
          <div className="p-8">
            <button className="bg-[#fbbe24d3] rounded-sm px-3 p-1 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="text-2xl font-semibold my-3">
              Digital Thermometer Gun For Covid - 19
            </h1>
            <p className="">
              Accurately measure body temperature with our Digital Thermometer
              Gun, designed for quick, contactless readings.
            </p>
          </div>
          <div className="bg-[#faca5083] rounded-t-full md:rounded-l-full md:rounded-r-none flex justify-center items-center ">
            <Image
              height={100}
              width={200}
              alt="Covid 19 gun"
              src="https://i.postimg.cc/1Rd5JDfq/imagesgun-removebg-preview.png"
            />
          </div>
        </motion.div>

        <motion.div initial={{ x:300 }} whileInView={{x:0}} transition={{duration:1}} className="grid grid-cols-1 md:grid-cols-2  rounded-sm shadow-2xl bg-[#16a24934]">
          <div className="p-8">
            <button className="bg-[#16a249d3] rounded-sm px-3 p-1 font-semibold text-white">
              New Arrival
            </button>
            <h1 className="text-2xl font-semibold my-3">
              Digital Thermometer Gun For Covid - 19
            </h1>
            <p className="">
              Accurately measure body temperature with our Digital Thermometer
              Gun, designed for quick, contactless readings.
            </p>
          </div>
          <div className="bg-[#16a2494d] rounded-t-full md:rounded-l-full md:rounded-r-none flex justify-center items-center ">
            <Image
              height={100}
              width={200}
              alt="Covid 19 gun"
              src="https://i.postimg.cc/1Rd5JDfq/imagesgun-removebg-preview.png"
            />
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NewArrival;
