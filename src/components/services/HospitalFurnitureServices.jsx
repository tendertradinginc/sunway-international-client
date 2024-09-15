import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
const HospitalFurnitureServices = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper>
        <div className="">
          <div className="grid grid-cols-12 items-center justify-center gap-0 md:gap-12">
            <div className="col-span-12 md:col-span-6" id="renovation">
              <h2 className="pb-4 text-3xl font-semibold text-[#16A249] md:text-4xl">
                Hospital Furniture Solutions
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
