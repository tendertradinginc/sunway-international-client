import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import Link from "next/link";
const MedicalEquipmentService = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper>
        <div className="">
          <div className="grid grid-cols-12 items-center justify-center gap-0 md:gap-12">
            <div className="order-2 col-span-12 md:order-1 md:col-span-6">
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
                    src="https://i.ibb.co.com/9rTxbDY/Frame-333.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/m5tB8xF/Frame-189.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
                <div>
                  <Image
                    loader={customLoader}
                    alt=" Image "
                    height={500}
                    width={500}
                    src="https://i.ibb.co.com/GTpzrJk/Frame-187.png"
                    className="mt-12 h-full w-full md:mt-0"
                  />
                </div>
              </div>
            </div>
            <div
              className="order-1 col-span-12 md:order-2 md:col-span-6"
              id="renovation"
            >
              <h2 className="pb-4 text-3xl font-semibold text-[#16A249] md:text-4xl lg:text-start text-center">
                Medical Equipment Solutions
              </h2>
              <p className="my-4 lg:text-start  text-justify">
                <b> Twin Trade International's</b> Medical equipment service plays a crucial role in the healthcare industry by ensuring that medical facilities have the necessary tools and devices to provide quality patient care. This service specializes in sourcing, distributing, and maintaining a wide range of medical equipment, from basic diagnostic tools to advanced surgical instruments.
              </p>
              <p className="lg:text-start  text-justify ">
                In addition to equipment delivery, these services often provide ongoing support, including installation, training for healthcare professionals, and routine maintenance to ensure the equipment operates at peak performance. The service may also offer inventory management solutions, helping hospitals track and manage their equipment more effectively, reducing downtime and ensuring that critical tools are always available when needed.
              </p>
              <Link
                href={"/medical-equipment"}
                className="text-right flex lg:justify-start justify-center gap-2 items-center  text-si-primary font-semibold pt-8"
              >
                <button className="border-2 border-green-600 bg-si-primary hover:bg-white duration-500 text-white hover:text-si-primary px-12 text-sm py-2 rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MedicalEquipmentService;
