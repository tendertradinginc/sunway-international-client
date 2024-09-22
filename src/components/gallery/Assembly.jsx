import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const Assembly = () => {
  return (
    <div className="lg:mt-20  bg-secondary lg:py-5 pb-20">
      {/* <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Assembly Workshop
      </h1> */}
      <MaxWidthWrapper>
        <div className="lg:pt-10 text-center">
          <SectionTitle
            className=""
            title={"Assembly Workshop "}
            title2={""}
          ></SectionTitle>
          <p className="font-medium text-si-text">
            Assembly Workshop focuses on teaching participants with the skills and knowledge to efficiently and effectively assemble products, from basic consumer goods to complex machinery. The workshop is designed to enhance understanding of assembly techniques, tools, safety procedures, and quality control measures essential for producing high-quality products for our customers that we supply to.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="">
            <Image
              loader={customLoader}
              className="h-[250px] lg:h-[400px]"
              src="https://i.postimg.cc/mZzzHPgh/Frame-150.png"
              alt="Assembly Workshop Image 1"
              height={400}
              width={1400}
            />
          </div>
          <div>
            <Image
              loader={customLoader}
              className="h-[250px] lg:h-[400px]"
              src="https://i.postimg.cc/YjBw4nqN/Frame-151.png"
              alt="Assembly Workshop Image 2"
              height={800}
              width={1400}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Assembly;
