"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ data }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="rounded-md shadow-2xl border-2 border-t-0">
      <div
        className="relative"
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <Image
          height={300}
          width={400}
          alt="construction"
          className="w-full h-64"
          src={data?.imageUrl}
        />
        <div
          className={`absolute h-full flex flex-col justify-center w-full px-8  left-0 top-0 duration-500   ${
           isShow ? "bg-[#22272798]" : ""
          }`}
        >
          <div  className={` transition duration-500  ease-in-out ${
            isShow ? "opacity-100" : "opacity-0 "
          }`}>
            <p className={`text-3xl text-si-accent `}>{data?.icon}</p>
            <h1 className="text-white font-semibold text-2xl my-5">
              {data?.title}
            </h1>
            <Link className="text-si-accent" href={data?.url}>
              Read More &nbsp;{" "}
              <FaArrowRight className="text-si-accent inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8 text-si-text font-medium bg-secondary ">
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
