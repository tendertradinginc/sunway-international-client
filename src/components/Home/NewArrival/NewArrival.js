"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="mt-16">
     <div className="z-10">
          <SectionTitle
            title={"Latest Innovations"}
            description={
              "  Committed to improving health outcomes through innovation. Explore  our latest medical equipment and discover the future of healthcare."
            }
          ></SectionTitle>
        </div>
      <MaxWidthWrapper className="relative z-10  overflow-x-hidden py-5 pb-16">
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
          <motion.div
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 rounded-sm  bg-white border shadow-2xl md:grid-cols-2"
          >
            {/* bg-[#FEF3D7] */}
            <div className="p-8 py-16">
              <button className="rounded-sm border p-1 px-3 font-semibold text-si-primary  bg-[#16a2494d]">
              {/* bg-[#fbbe24d3] */}
                New Arrival
              </button>
              <h1 className="my-3 text-2xl font-bold text-si-primary">
              Advanced Cardiac Monitoring 
              </h1>
              <p className="">
                A cardiopulmonary monitor displaying vital signs for heart and
                lung function in critical care.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-t-full bg-secondary md:rounded-l-full md:rounded-r-none">
            {/* bg-[#FCDE92] */}
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
            className="grid grid-cols-1 rounded-sm bg-white shadow-2xl md:grid-cols-2 border"
            // bg-[#CFECDA]
          >
            <div className="p-8 py-16">
              <button className="rounded-sm text-si-primary  bg-[#16a2494d] p-1 px-3 font-semibold ">
                New Arrival
              </button>
              <h1 className="my-3 text-2xl font-bold text-si-primary">
                Infant Phototherapy Incubator
              </h1>
              <p className="">
                An infant phototherapy incubator providing controlled light
                therapy for treating newborn jaundice.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-t-full bg-secondary  md:rounded-l-full md:rounded-r-none">
            {/* bg-[#16a2494d] */}
              <Image
                loader={customLoader}
                height={100}
                width={200}
                alt="Covid 19 gun"
                src="https://i.postimg.cc/W3dWb43N/5s1-Yb74-Jzqy-YWE3-Nt-AAjz-transformed.webp"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      <div className="relative flex flex-col items-center py-48 -mt-56">
        <Image
          src="https://i.postimg.cc/MpkRXPpH/new-arrival-bg.png"
          height={500}
          width={1400}
          alt="new arrival background Image"
          className="absolute left-0 bottom-0 z-0 h-full w-full opacity-20"
        />
        
      </div>
    </div>
  );
};

export default NewArrival;
