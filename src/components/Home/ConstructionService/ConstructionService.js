"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";
import Image from "next/image";

const ConstructionService = () => {
  return (
    <MaxWidthWrapper className="overflow-x-hidden py-16">
      <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Contruction Services
      </h1>
      <div className="mt-10 grid grid-cols-12 grid-rows-12 gap-y-10 md:gap-10">
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,

            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-span-12 row-span-12 bg-[url('https://i.postimg.cc/63y7RCfc/pexels-oleksandr-plakhota-1270583835-26183653.jpg')] bg-cover md:col-span-6 md:row-span-12"
        >
          <div className="flex h-full w-full flex-col gap-y-2 bg-[#0c0d0d52] pl-8 text-white">
            <p className="mt-10">BUILDING</p>
            <h1 className="text-3xl font-semibold">Modern House</h1>
            <p>Mellbourn, Australia</p>
            <Link href="#">
              {" "}
              <button className="mt-8 rounded-md border-2 border-si-accent p-2 px-5">
                View More
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-span-12 row-span-12 bg-[url('https://i.postimg.cc/jjR3sS4t/pexels-yury-kim-181374-585419.jpg')] bg-cover md:col-span-6 md:row-span-5"
        >
          <div className="flex h-full w-full flex-col justify-center gap-y-2 bg-gradient-to-r from-[#0c0d0de7] via-[#0c0d0db2] to-transparent p-5 pl-8 text-white">
            <p className="mt-5">GENERAL DIRECTOR</p>
            <h1 className="text-3xl font-semibold">We are hiring specialist</h1>

            <Link href="#">
              {" "}
              <button className="mt-5 rounded-lg bg-si-accent p-2 px-5">
                View More
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 600 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-span-12 row-span-12 bg-[url('https://i.postimg.cc/nVwLBsXS/pexels-expect-best-79873-323780.jpg')] bg-cover md:col-span-6 md:row-span-7"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 bg-[#fbbe24c5] p-5 pl-8 text-white">
            <Image
              alt="map cotruction service"
              height={100}
              width={300}
              src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
            />
            <p className="mt-2 text-muted">Contruction</p>
            <h1 className="text-3xl font-semibold text-gray-700">
              Twin Trade Int. - Contact Us
            </h1>
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ConstructionService;
