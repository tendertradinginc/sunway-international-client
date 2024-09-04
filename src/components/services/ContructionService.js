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
          <span className="text-si-accent font-bold">Twin Trade International's</span> Hospital construction services is a specialized division focused on enhancing the physical environment of healthcare facilities. This service oversees building construction, ensuring that new hospital infrastructures are developed with state-of-the-art technology and adhere to rigorous safety standards. It collaborates closely with architectural design experts to create spaces that are both functional and aesthetically pleasing, supporting the complex needs of healthcare providers and patients. This includes everything from the layout of patient rooms and operating theaters to the design of communal areas that promote healing and well-being.
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
                src="https://i.postimg.cc/LsMTW5YQ/Gemini-Generated-Image-abdmh9abdmh9abdm.jpg"
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
