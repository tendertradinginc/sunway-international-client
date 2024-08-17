import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ContructionService = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20  lg:gap-5">
        <div>
          <h1
            style={{ lineHeight: "60px" }}
            className="text-3xl md:text-5xl font-semibold text-si-primary leading-relaxed"
          >
            Hospital Construction Solutions
          </h1>
          <p className="text-justify mt-8 text-si-text font-medium ">
            Here is a comprehensive description for the hospital construction
            section: Comprehensive Hospital Construction Solutions At Sunrise
            International, we specialize in delivering end-to-end hospital
            construction services that meet the highest standards of healthcare
            infrastructure. From initial planning and design to construction and
            final handover, our experienced team ensures that every project is
            tailored to the specific needs of healthcare providers. We focus on
            creating functional, safe, and sustainable environments that enhance
            patient care and operational efficiency. 
          </p>
          <ul className="mt-5 max-w-96">
            <li className="flex items-center text-xl font-semibold py-3 border-b border-gray-300 gap-2"> <FaRegArrowAltCircleRight className="text-si-accent text-2xl" /> Bulding Contruction</li>
            <li className="flex items-center text-xl font-semibold py-3 border-b border-gray-300 gap-2"> <FaRegArrowAltCircleRight className="text-si-accent text-2xl" /> Architecture Design</li>
            <li className="flex items-center text-xl font-semibold py-3 border-b border-gray-300 gap-2"> <FaRegArrowAltCircleRight className="text-si-accent text-2xl" /> Building Renovation</li>
            <li className="flex items-center text-xl font-semibold py-3 border-b border-gray-300 gap-2"> <FaRegArrowAltCircleRight className="text-si-accent text-2xl" />Flooring & Roofing</li>
            <li className="flex items-center text-xl font-semibold py-3 border-b border-gray-300 gap-2"> <FaRegArrowAltCircleRight className="text-si-accent text-2xl" />Project Management</li>
          </ul>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="flex justify-end">
            <div className="w-full h-full">
              {" "}
              <Image
                height={700}
                width={700}
                className="ml-10 md:ml-20 h-[90%] w-[85%]"
                src="https://i.postimg.cc/B6QtzWFQ/daniel-hay-7-B5-UEn4al-LU-unsplash-1.jpg"
                alt="contruction image"
              />
            </div>
          </div>
          <div className="flex justify-start items-end absolute -bottom-5 left-0">
            <div className="w-[40%] xl:w-[75%]">
              <Image
                src="https://i.postimg.cc/KjQnkryJ/woman-construction-worker-Getty-Images-463207617.webp"
                alt="Contruction Image "
                height={500}
                width={500}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContructionService;
