"use client";

import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const RegularEquipment = () => {
  return (
    <MaxWidthWrapper className="py-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-10">
        <div className="grid gap-10 grid-cols-2 ">
          <div>
            <Image
              className="rounded-lg shadow-xl"
              height={300}
              width={300}
              alt="regular equipment"
              src="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <Image
              className="rounded-lg shadow-xl"
              height={300}
              width={300}
              alt="regular equipment"
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <Image
              className="rounded-lg shadow-xl"
              height={300}
              width={300}
              alt="regular equipment"
              src="https://i.postimg.cc/vThVHpgc/ci-office-reception-1.webp"
            />
          </div>
          <div>
            <Image
              className="rounded-lg h-max shadow-xl"
              height={300}
              width={300}
              alt="regular equipment"
              src="https://i.postimg.cc/MTP5KPcZ/pexels-fotios-photos-1957478.jpg"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-si-primary ">
            Regular Equipment
          </h1>
          <p className="text-justify mt-8 text-si-text font-medium ">
            Here is a comprehensive description for the hospital construction
            section: Comprehensive Hospital Construction Solutions At Sunrise
            International, we specialize in delivering end-to-end hospital
            construction services that meet the highest standards of healthcare
            infrastructure. From initial planning and design to construction and
            final handover, our experienced team ensures that every project is
          </p>
          <ul className="mt-5 bg-opacity-20 p-3">
            <li className="flex items-center text-xl font-semibold py-3  border-gray-300 gap-3">
              {" "}
              <FaRegArrowAltCircleRight className="text-si-accent text-2xl" />{" "}
              Comprehensive Service
            </li>
            <li className="flex items-center text-xl font-semibold py-3 border-gray-300 gap-3">
              {" "}
              <FaRegArrowAltCircleRight className="text-si-accent text-2xl" />{" "}
              Advance Technology
            </li>
            <li className="flex items-center text-xl font-semibold py-3 border-gray-300 gap-3">
              {" "}
              <FaRegArrowAltCircleRight className="text-si-accent text-2xl" />
              Tranparent Communication
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default RegularEquipment;
