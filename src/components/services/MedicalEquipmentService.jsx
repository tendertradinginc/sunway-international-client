import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
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
              <h2 className="pb-4 text-3xl font-semibold text-[#16A249] md:text-4xl">
                Medical Equpment Solutions
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
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MedicalEquipmentService;
