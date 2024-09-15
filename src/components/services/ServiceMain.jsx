import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";

import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {
  MdArchitecture,
  MdForwardToInbox,
  MdOutlineConstruction,
  MdOutlineRoofing,
  MdOutlineWatchLater,
} from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const ServiceMain = () => {
  return (
    <div className="py-12 md:py-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-0 md:gap-12">
          <div className="col-span-12 mt-12 md:col-span-5">
            <h2 className="text-center text-4xl font-semibold text-[#16A249] md:text-left">
              Our Services
            </h2>
            <div className="my-16">
              <a href="#renovation">
                <p className="flex w-full items-center justify-between gap-6 border px-5 py-3 text-2xl font-semibold duration-200 hover:border-[#16A249] hover:text-[#16A249] hover:shadow-md md:w-2/3">
                  Hospital Renovation{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </a>
              <a href="#renovation">
                <p className="my-2 flex w-full items-center justify-between gap-6 border px-5 py-3 text-2xl font-semibold duration-200 hover:border-[#16A249] hover:text-[#16A249] hover:shadow-md md:w-2/3">
                  {" "}
                  Hospital Equipment
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </a>
              <a href="#renovation">
                <p className="flex w-full items-center justify-between gap-6 border px-5 py-3 text-2xl font-semibold duration-200 hover:border-[#16A249] hover:text-[#16A249] hover:shadow-md md:w-2/3">
                  Hospital Furniture
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </a>
            </div>
            <div className="mt-16 md:mt-40">
              <h4 className="text-xl text-gray-700">Contact Us</h4>
              <div className="ml-4 mt-4 space-y-3">
                <div className="flex items-center gap-x-4">
                  <span>
                    <IoCallOutline />
                  </span>
                  <span>info@sample.com </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>
                    <MdForwardToInbox />
                  </span>
                  <span>info@sample.com </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>
                    HM Plaza, (13th Floor) Sector-03 Uttara, <br /> Dhaka-1230{" "}
                  </span>
                </div>
                <div className="flex items-center gap-x-4">
                  <span>
                    <MdOutlineWatchLater />
                  </span>
                  <span>
                    Mon-Sat: 9.00 AM - 5.00 PM <br /> Sunday Close{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div>
              <Image
                loader={customLoader}
                alt=" Image "
                height={500}
                width={500}
                src="/Frame186.png"
                className="mt-12 h-full w-fit md:mt-0"
              />
            </div>
            <div className="mt-12" id="renovation">
              <h2 className="text-3xl font-semibold text-[#16A249] md:text-4xl">
                Hospital Construction Solutions
              </h2>
              <p className="my-4">
                <b> Twin Trade International's</b> Hospital construction
                services is a specialized division focused on enhancing the
                physical environment of healthcare facilities. This service
                oversees building construction, ensuring that new hospital
                infrastructures are developed with state-of-the-art technology
                and adhere to rigorous safety standards.
              </p>
              <p className="">
                It collaborates closely with architectural design experts to
                create spaces that are both functional and aesthetically
                pleasing, supporting the complex needs of healthcare providers
                and patients. This includes everything from the layout of
                patient rooms and operating theaters to the design of communal
                areas that promote healing and well-being.
              </p>
            </div>
            <div className="mx-auto mt-12 w-full md:w-2/3">
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-center text-lg text-black md:grid-cols-2 md:text-left">
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <MdOutlineConstruction />
                  </span>
                  <h4>Bulding Contruction</h4>
                </div>
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <PiBuildingsBold />
                  </span>
                  <h4>Building Renovation </h4>
                </div>
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <GoProjectSymlink />
                  </span>
                  <h4>Project Management </h4>
                </div>
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <MdArchitecture />
                  </span>
                  <h4>Architecture Design </h4>
                </div>
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <MdOutlineRoofing />
                  </span>
                  <h4>Flooring & Roofing </h4>
                </div>
                <div className="text-bl flex items-center justify-center gap-x-4 font-semibold md:justify-start">
                  <span className="font-bol text-4xl text-[#414243]">
                    <GrUserManager />
                  </span>
                  <h4>Project Management </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceMain;
