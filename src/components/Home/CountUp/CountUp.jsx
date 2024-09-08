"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { motion, useScroll } from "framer-motion";
import CountUp from "react-countup";

const CountUP = () => {
  const { scrollYProgress } = useScroll();
  const totalProduct = 1200;
  const totalSell = 750;
  const totalOrder = 550;
  const totalCustomer = 400;

  return (
    <section
      className="inset-0 left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 71, 89, 0.7), rgba(28, 71, 89, 0.7)), url(https://i.ibb.co/HpmNXzG/Medical-Devices.jpg)`,

        backgroundPosition: "center",
      }}
    >
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
            className="flex flex-col items-center justify-center rounded-lg rounded-t-full bg-[url('https://i.postimg.cc/mgp5mzsg/pexels-eric-mufasa-578798-1350789-1.jpg')] bg-cover bg-center text-black"
          >
            <div className="grid h-full w-full items-center rounded-t-full bg-[#fbbe24da]">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="pb-2 text-5xl font-semibold leading-none">
                    <CountUp end={totalProduct} duration={4} />+
                  </span>
                </div>
                <p className="mt-4 text-xl capitalize">Total Product</p>
              </div>
            </div>
          </motion.div>

          {/* totalSell */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col items-center justify-center rounded-none rounded-r-full bg-[url('https://i.postimg.cc/CMDdYkP9/albero-furniture-bratislava-8-V-c-Ac-2-K08-unsplash-1.jpg')] bg-cover bg-center text-black"
          >
            <div className="grid h-full w-full items-center rounded-r-full bg-[#fbbe24da]">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="pb-2 text-5xl font-semibold leading-none">
                    <CountUp end={totalSell} duration={4} />+
                  </span>
                </div>
                <p className="mt-4 text-xl capitalize">Total sell</p>
              </div>
            </div>
          </motion.div>

          {/* totalOrder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col items-center justify-center rounded-lg rounded-l-full bg-[url('https://i.postimg.cc/XqxR3sTw/glenn-carstens-peters-RLw-UC03-Gwc-unsplash-1.jpg')] bg-cover bg-center text-black"
          >
            <div className="grid h-full w-full items-center rounded-l-full bg-[#fbbe24da]">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="pb-2 text-5xl font-semibold leading-none">
                    <CountUp end={totalOrder} duration={4} />+
                  </span>
                </div>
                <p className="mt-4 text-xl capitalize">Total Order</p>
              </div>
            </div>
          </motion.div>

          {/* totalCustomer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col items-center justify-center rounded-lg rounded-t-full bg-[url('https://i.postimg.cc/NG4q1055/cytonn-photography-v-Wch-Rczc-Qw-M-unsplash-1.jpg')] bg-cover bg-center text-black"
          >
            <div className="grid h-full w-full items-center rounded-t-full bg-[#fbbe24da] py-20">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <span className="pb-2 text-5xl font-semibold leading-none">
                    <CountUp end={totalCustomer} duration={4} />+
                  </span>
                </div>
                <p className="mt-4 text-xl capitalize">Total Customer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CountUP;
