"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceCard = ({ data, index }) => {
  const [isShow, setIsShow] = useState(false);
  const scrollRef = useRef(null);
  return (
    <motion.div
      initial={{ y: 150 }}
      whileInView={{  y: 0 }}
      transition={{
        duration: (index+1) * .5,
        ease: [0, .71, .71, 1.01],
      }}
      className="rounded-md  shadow-xl"
    >
      <div
        className="relative"
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <Image
          height={300}
          width={400}
          alt="construction"
          className="h-64 w-full"
          src={data?.imageUrl}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-full flex-col justify-center px-8 duration-500 ${
            isShow ? "bg-[#22272798]" : ""
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
      <div className="bg-secondary p-8 font-medium text-si-text">
        <p className=" line-clamp-4">{data?.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
