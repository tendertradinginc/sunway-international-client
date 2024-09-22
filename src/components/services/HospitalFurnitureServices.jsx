import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import Link from "next/link";
const HospitalFurnitureServices = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper>
        <div className="">
          <div className="grid grid-cols-12 items-center justify-center gap-0 md:gap-12">
            <div className="col-span-12 md:col-span-6" id="renovation">
              <h2 className="pb-4 text-3xl font-semibold text-[#16A249] md:text-4xl lg:text-start text-center">
                Hospital Furniture Solutions
              </h2>
              <p className="my-4 lg:text-start  text-justify">
                <b> Twin Trade International's</b> Hospital construction
                services is a specialized division focused on enhancing the
                physical environment of healthcare facilities. This service
                oversees building construction, ensuring that new hospital
                infrastructures are developed with state-of-the-art technology
                and adhere to rigorous safety standards.
              </p>
              <p className="lg:text-start  text-justify">
                It collaborates closely with architectural design experts to
                create spaces that are both functional and aesthetically
                pleasing, supporting the complex needs of healthcare providers
                and patients. This includes everything from the layout of
                patient rooms and operating theaters to the design of communal
                areas that promote healing and well-being.
              </p>
              <Link
                href={"/hospital-furniture"}
                className="text-right flex lg:justify-start justify-center gap-2 items-center  text-si-primary font-semibold pt-8"
              >
                <button className="border-2 border-green-600 bg-si-primary hover:bg-white duration-500 text-white hover:text-si-primary px-12 text-sm py-2 rounded-md">
                  View Details
                </button>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/rdh2jTN/Frame-188.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/c37HCW5/Frame-333-1.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/SvDmDKj/Frame-188-1.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/D8f6N63/Frame-189-1.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HospitalFurnitureServices;
