"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

const CountUP = () => {
  const { scrollYProgress } = useScroll();
  const totalProduct = 1200;
  const totalSell = 750;
  const totalOrder = 550;
  const totalCustomer = 400;

  return (
    <section
      className="inset-0 left-0 top-0 h-full w-full bg-cover bg-[#8cd9a6c2] bg-center bg-no-repeat lg:py-16 lg:my-24 mt-32 bg-opacity-50"
      style={{
        backgroundImage: `linear-gradient(#8cd9a6c2, #8cd9a6c2), url(https://i.ibb.co/HpmNXzG/Medical-Devices.jpg)`,
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
            className="flex flex-col items-center justify-center rounded-md bg-[url('https://i.postimg.cc/mgp5mzsg/pexels-eric-mufasa-578798-1350789-1.jpg')] bg-cover bg-center text-white"
          >
            <div className="grid h-full w-full items-center bg-[#fbbe24e1] rounded-md">
              <div className="text-center">
                <div className="flex items-center justify-center p-4 gap-4">
                  <Image
                    src={"https://i.postimg.cc/ydTZfF3w/Frame-2.png"}
                    alt="Total Customer"
                    height="100"
                    width="200"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <span className=" text-4xl font-bold leading-none">
                      <CountUp end={totalProduct} duration={4} />+
                    </span>
                    <p className="mt-4 text-xl capitalize">Total Product</p>
                  </div>
                </div>
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
            className="flex flex-col items-center justify-center rounded-md bg-[url('https://i.postimg.cc/CMDdYkP9/albero-furniture-bratislava-8-V-c-Ac-2-K08-unsplash-1.jpg')] bg-cover bg-center text-white"
          >
            <div className="grid h-full w-full items-center bg-[#fbbe24e1] rounded-md">
              <div className="text-center">
                <div className="flex items-center justify-center p-4 gap-4">
                  <Image
                    src={"https://i.postimg.cc/ZKsrtFsm/Frame.png"}
                    alt="Total Customer"
                    height="100"
                    width="200"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <span className=" text-4xl font-bold leading-none">
                      <CountUp end={totalSell} duration={4} />+
                    </span>
                    <p className="mt-4 text-xl capitalize">Total Sell</p>
                  </div>

                </div>
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
            className="flex flex-col items-center justify-center rounded-md bg-[url('https://i.postimg.cc/XqxR3sTw/glenn-carstens-peters-RLw-UC03-Gwc-unsplash-1.jpg')] bg-cover bg-center text-white"
          >
            <div className="grid h-full w-full items-center bg-[#fbbe24e1] rounded-md">
              <div className="text-center">
                <div className="flex items-center justify-center p-4 gap-4">
                  <Image
                    src={"https://i.postimg.cc/FRXyCrWJ/Frame-1.png"}
                    alt="Total Customer"
                    height="100"
                    width="200"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <span className=" text-4xl font-bold leading-none">
                      <CountUp end={totalOrder} duration={4} />+
                    </span>
                    <p className="mt-4 text-xl capitalize">Total Order</p>
                  </div>

                </div>
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
            style={{ borderRadius: "10px" }}
            className="flex flex-col rounded-md items-center justify-center bg-[url('https://i.postimg.cc/NG4q1055/cytonn-photography-v-Wch-Rczc-Qw-M-unsplash-1.jpg')] bg-cover bg-center text-white"
          >
            <div className="grid h-full w-full items-center bg-[#fbbe24e1] py-7 rounded-md">
              <div className="text-center">
                <div className="flex items-center justify-center p-4 gap-4">
                  <Image
                    src={"https://i.postimg.cc/YS3fvKqc/Frame.png"}
                    alt="Total Customer"
                    height="100"
                    width="200"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <span className=" text-4xl font-bold leading-none">
                      <CountUp end={totalCustomer} duration={4} />+
                    </span>
                    <p className="mt-4 text-xl capitalize">Total Customer</p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CountUP;
