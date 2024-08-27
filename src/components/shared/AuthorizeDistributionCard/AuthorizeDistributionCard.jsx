"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AuthorizeDistributionCard = ({ authorizer, index }) => {
    return (

        <motion.div

            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{
                duration: (index + 1) * .5,
                ease: [0, .71, .71, 1.01],
            }}

            className="">

            <div className="flex w-80 h-36 flex-col items-center justify-center  text-white duration-500 bg-white">
                <Image
                    src={authorizer?.image}
                    alt="Authorize Distribution"
                    height="100"
                    width="200"
                    className=""
                />
            </div>
        </motion.div>
    );
};

export default AuthorizeDistributionCard;