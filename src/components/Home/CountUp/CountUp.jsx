"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CountUp from "react-countup";
import { motion, useScroll } from "framer-motion";

const CountUP = () => {
  const { scrollYProgress } = useScroll();
  const totalProduct = 1200;
  const totalSell = 750;
  const totalOrder = 550;
  const totalCustomer = 400;

  return (
    <MaxWidthWrapper className="my-6 p-6 text-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {/* totalProduct */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center justify-center rounded-lg bg-si-accent text-black"
        >
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalProduct} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Product</p>
          </div>
        </motion.div>

        {/* totalSell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay:0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center justify-center rounded-none bg-si-accent py-20 text-black"
        >
          <div className="">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalSell} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total sell</p>
          </div>
        </motion.div>

        {/* totalOrder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay:0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center justify-center rounded-lg bg-si-accent py-20 text-black"
        >
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalOrder} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Order</p>
          </div>
        </motion.div>

        {/* totalCustomer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay:0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center justify-center rounded-lg bg-si-accent py-20 text-black"
        >
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalCustomer} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Customer</p>
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CountUP;
