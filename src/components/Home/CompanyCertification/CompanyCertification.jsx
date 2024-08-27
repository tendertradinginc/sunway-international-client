"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const CompanyCertification = () => {
    return (
        <MaxWidthWrapper className="my-20">


            <h1 className="text-3xl font-semibold text-si-primary md:text-5xl my-12">
                Company Certification
            </h1>

            <div className="relative flex flex-col lg:flex-row justify-center lg:justify-end items-center shadow-none">

                {/* Right Section with Content */}
                <div className="w-full lg:w-8/12 min-h-[50vh] lg:min-h-[70vh] bg-si-primary text-center p-6 lg:p-10 order-2 lg:order-1">
                    <div className="lg:text-end p-4 lg:p-24">
                        <h2 className="text-si-accent text-2xl lg:text-5xl font-bold">Our Achievements</h2>
                        <p className="text-white text-sm lg:text-xl pt-3 lg:pl-6">
                            Our Company offers a variety of services to meet your project's needs, from collaboration meetings all the way to ribbon-cutting and beyond.
                        </p>
                        <div className="pt-3 flex items-center lg:items-end justify-center lg:justify-end">
                            <button className="flex gap-3 bg-si-accent hover:bg-[#b9af21] duration-700 rounded-sm px-3 lg:px-6 py-2 font-semibold text-white">
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

                    className="relative w-full lg:w-auto lg:absolute left-0 transform lg:translate-x-[10%] order-1 lg:order-2 mb-4 lg:mb-0">
                    <Image
                        src="https://i.postimg.cc/SRvVNgcV/ct.png"
                        alt="Certificate Image"
                        width={500}
                        height={200}
                        className="object-cover rounded-none w-full lg:w-[100%]"
                    />
                </motion.div>

            </div>
        </MaxWidthWrapper>
    );
};

export default CompanyCertification;
