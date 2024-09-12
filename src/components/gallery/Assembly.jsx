import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const Assembly = () => {
  return (
    <div className="mt-20 bg-secondary py-5 pb-20">
      {/* <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Assembly Workshop
      </h1> */}
      <MaxWidthWrapper>
        <div className="pt-10 text-center">
          <SectionTitle
            className=""
            title1={"Assembly Workshop "}
            title2={""}
          ></SectionTitle>
          <p className="font-medium text-si-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tenetur eum magnam, commodi harum dolor qui dolorum perspiciatis
            placeat, explicabo minima aut est reiciendis. Cum, exercitationem
            necessitatibus? Saepe dignissimos non repellat facere, deserunt
            aliquam, alias ea nobis accusantium nihil mollitia dolores ipsa odit
            dicta inventore dolorem nam voluptatem culpa natus? Eveniet totam ex
            quisquam expedita reiciendis nam nulla neque, amet ut molestias
            corrupti earum quae maxime cumque et deserunt iusto! Voluptatum aut
            corporis vitae architecto dolorum nemo at quaerat id consectetur
            neque.
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
