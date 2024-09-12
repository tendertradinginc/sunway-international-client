import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const FFU = () => {
  return (
    <MaxWidthWrapper className="mt-20">
      {/* <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">FFU Workshop</h1> */}
      <div className="text-center text-3xl font-semibold text-si-primary md:text-5xl">
        <SectionTitle
          className="text-center mb-5"
          title1={"FFU Workshop"}

        ></SectionTitle>
      </div>
      <p className="mx-auto mt-5 text-center font-medium text-si-text">
      This workshop focuses on understanding, assembling, maintaining, and troubleshooting Fan Filter Units, which are an important part of cleanroom environments. FFUs are ceiling-mounted or standalone units that integrate a fan and a HEPA or ULPA filter to create a laminar flow of clean, filtered air, minimizing contamination in controlled environments such as laboratories, manufacturing facilities, and hospitals.
      </p>
      <Image
        loader={customLoader}
        className="mt-8"
        src="https://i.postimg.cc/bwbsFWtP/Frame-149.png"
        alt="FFU Workshop Image"
        height={800}
        width={1400}
      />
    </MaxWidthWrapper>
  );
};

export default FFU;
