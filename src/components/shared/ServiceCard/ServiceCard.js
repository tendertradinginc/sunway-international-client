"use client";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const ServiceCard = ({ data, index }) => {
  const [isShow, setIsShow] = useState(false);
  const scrollRef = useRef(null);
  return (
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: (index + 1) * 0.5,
        ease: [0, 0.71, 0.71, 1.01],
      }}
      className="rounded-md"
    >
      <div>
        <div
          className="relative"
          onMouseOver={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <Image
            loader={customLoader}
            height={300}
            width={400}
            alt="construction"
            className="shadow- h-full w-full hover:rounded-none"
            src={data?.imageUrl}
          />
          <div style={{borderRadius:"5px"}} className="mx-auto w-[90%] bg-white p-5 py-10 -mt-20 relative z-10 shadow-xl ">
            <Link href={data?.url} className=" text-center text-2xl font-bold text-si-primary block hover:underline">
              {data?.title}
            </Link>
            <p className="line-clamp-2 text-center  mx-auto my-3">{data?.description}</p>
           <Link href={data?.url}> <FaCircleArrowRight className="mx-auto bg-white text-si-primary rounded-full text-4xl" /></Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
