"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="mt-16">
      <div className="relative flex flex-col items-center  py-28 pb-56">
        <Image
          src="https://i.postimg.cc/MpkRXPpH/new-arrival-bg.png"
          height={500}
          width={1400}
          alt="new arrival background Image"
          className="absolute left-0 top-0 z-0 h-full w-full opacity-20"
        />
        <div className="z-10">
          <h1 className="mb-5 text-center text-3xl font-semibold text-si-primary md:text-5xl">
            Latest <span className="text-si-accent">Innovations</span>
          </h1>
          <p className="max-w-xl text-center font-semibold">
            Committed to improving health outcomes through innovation. Explore
            our latest medical equipment and discover the future of healthcare.
          </p>
        </div>
      </div>
      <MaxWidthWrapper className="relative z-10 -mt-52 overflow-x-hidden py-5 pb-16">
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 rounded-sm bg-[#FEF3D7] shadow-2xl md:grid-cols-2"
          >
            <div className="p-8 py-16">
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
            <div className="flex items-center justify-center rounded-t-full bg-[#FCDE92] md:rounded-l-full md:rounded-r-none">
              <Image
                loader={customLoader}
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
            className="grid grid-cols-1 rounded-sm bg-[#CFECDA] shadow-2xl md:grid-cols-2"
          >
            <div className="p-8 py-16">
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
                loader={customLoader}
                height={100}
                width={200}
                alt="Covid 19 gun"
                src="https://i.postimg.cc/W3dWb43N/5s1-Yb74-Jzqy-YWE3-Nt-AAjz-transformed.webp"
              />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NewArrival;
