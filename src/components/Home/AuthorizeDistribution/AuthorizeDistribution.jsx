"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { MdBathtub } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";
import { PiBedBold } from "react-icons/pi";
import { TfiWheelchair } from "react-icons/tfi";


import { motion } from "framer-motion";

const AuthorizeDistribution = () => {
    return (
        <MaxWidthWrapper className="my-20">
            <h1 className="text-3xl font-semibold text-si-primary md:text-5xl my-12">
                Authorize Distribution
            </h1>

            <motion.div

                // initial={{ y: 150 }}
                // whileInView={{ y: 0 }}
                // transition={{
                //     duration: (index + 1) * .5,
                //     ease: [0, .71, .71, 1.01],
                // }}

                className="">
                <div className="mb-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {/* category 1 */}
                    <div className="flex w-80 h-36 flex-col items-center justify-center  from-[#fbbe24d3] to-[#faca5083] text-white duration-500 bg-gradient-to-r">
                        <RiFirstAidKitFill className="mb-2 text-6xl text-si-primary" />
                        <h1 className="text-md text-center font-semibold text-black">
                            Walking Aids Series
                        </h1>
                    </div>
                    {/* category 2 */}
                    <div className="flex w-80 h-36 flex-col items-center justify-center  from-[#fbbe24d3] to-[#faca5083] text-white duration-500 bg-gradient-to-r">
                        <MdBathtub className="mb-2 text-6xl text-si-primary" />
                        <h1 className="text-md text-center font-semibold text-black">
                            Bathroom Safety Series
                        </h1>
                    </div>
                    {/* category 3 */}
                    <div className="flex w-80 h-36 flex-col items-center justify-center  from-[#fbbe24d3] to-[#faca5083] text-white duration-500 bg-gradient-to-r">
                        <TfiWheelchair className="mb-2 text-6xl text-si-primary" />
                        <h1 className="text-md text-center font-semibold text-black">
                            Wheelchair Series
                        </h1>
                    </div>
                    {/* category 4 */}
                    <div className="flex w-80 h-36 flex-col items-center justify-center  from-[#fbbe24d3] to-[#faca5083] text-white duration-500 bg-gradient-to-r">
                        <PiBedBold className="mb-2 text-6xl text-si-primary" />
                        <h1 className="text-md text-center font-semibold text-black">
                            Hospital Bed Series
                        </h1>
                    </div>
                </div>
            </motion.div>
        </MaxWidthWrapper>
    );
};

export default AuthorizeDistribution;