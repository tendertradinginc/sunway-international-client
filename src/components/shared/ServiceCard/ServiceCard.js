"use client";
import { customLoader } from "@/utils/customLoader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
      className="rounded-md shadow-xl"
    >
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
          className="h-64 w-full"
          src={data?.imageUrl}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-full flex-col justify-center px-8 duration-500 ${
            isShow ? "bg-[#1c4759b8]" : ""
          }`}
        >
          <div
            className={`transition duration-500 ease-in-out ${
              isShow ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className={`text-3xl text-si-accent`}>{data?.icon}</p>
            <h1 className="my-5 text-2xl font-semibold text-white">
              {data?.title}
            </h1>
            <Link className="text-si-accent" href={data?.url}>
              Read More &nbsp;{" "}
              <FaArrowRight className="inline-block text-si-accent" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-secondary px-2 py-8 text-justify font-medium text-si-text">
        <h2 className="py-2 text-xl font-bold text-si-primary">
          {" "}
          {data?.title2}
        </h2>
        <p>{data?.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
