"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";

const ConstructionService = () => {
  return (
    <MaxWidthWrapper className="overflow-x-hidden py-16">
      <h1 className="mb-2 text-3xl font-semibold text-si-primary md:text-5xl">
        Hospital <span className="text-[#fbbf24]"> Renovation</span>
      </h1>
      <div className="mt-10 grid grid-cols-12 grid-rows-12 gap-y-10 md:gap-10">
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-span-12 row-span-12 bg-[url('https://i.ibb.co/XFvgv42/national-cancer-institute-w7-Pby5b-DKW4-unsplash-1.jpg')] bg-cover md:col-span-6 md:row-span-12"
        >
          <div className="flex h-full w-full flex-col gap-y-2 bg-[#1c475943] pl-8 text-white">
            <p className="mt-10">BUILDING</p>
            <h1 className="text-3xl font-semibold">Modern House</h1>
            <p>Mellbourn, Australia</p>
            <Link href="/services">
              {" "}
              <button className="mt-8 rounded-md border-2 border-si-accent p-2 px-5 duration-300 hover:bg-si-accent">
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
          className="col-span-12 row-span-12 bg-[url('https://i.ibb.co/kV7bTKh/martha-dominguez-de-gouveia-KF-h9-HMx-RKg-unsplash-1.jpg')] bg-cover bg-center md:col-span-6 md:row-span-5"
        >
          <div className="flex h-full w-full flex-col justify-center gap-y-2 bg-gradient-to-r from-[#0c0d0de7] via-[#0c0d0db2] to-transparent p-5 pl-8 text-right text-white">
            <p className="mt-5">GENERAL DIRECTOR</p>
            <h1 className="text-3xl font-semibold">We are hiring specialist</h1>

            <Link href="#">
              {" "}
              <button className="mt-5 rounded-lg border-2 border-si-accent bg-si-accent p-2 px-5 duration-300 hover:bg-transparent">
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
          className="col-span-12 row-span-12 bg-[url('https://i.ibb.co/zXWYnjG/martha-dominguez-de-gouveia-n-My-M7fxpok-E-unsplash-1.jpg')] bg-cover bg-center md:col-span-6 md:row-span-7"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 bg-[#fbbe246e] p-5 pl-8 text-white">
            {/* <Image
              alt="map cotruction service"
              height={100}
              width={300}
              src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
            /> */}
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
