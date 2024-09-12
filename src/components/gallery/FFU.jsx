import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const FFU = () => {
  return (
    <div className="mt-10">
      {/* <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">FFU Workshop</h1> */}
      <div className="text-center text-3xl font-semibold text-si-primary md:text-5xl">
        <SectionTitle
          className="text-center mb-5"
          title1={"FFU Workshop"}

        ></SectionTitle>
      </div>
      <p className="mx-auto mt-5 text-center font-medium text-si-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
        eum magnam, commodi harum dolor qui dolorum perspiciatis placeat,
        explicabo minima aut est reiciendis. Cum, exercitationem necessitatibus?
        Saepe dignissimos non repellat facere, deserunt aliquam, alias ea nobis
        accusantium nihil mollitia dolores ipsa odit dicta inventore dolorem nam
        voluptatem culpa natus? Eveniet totam ex quisquam expedita reiciendis
        nam nulla neque, amet ut molestias corrupti earum quae maxime cumque et
        deserunt iusto! Voluptatum aut corporis vitae architecto dolorum nemo at
        quaerat id consectetur neque.
      </p>
      <Image
        loader={customLoader}
        className="mt-8"
        src="https://i.postimg.cc/bwbsFWtP/Frame-149.png"
        alt="FFU Workshop Image"
        height={800}
        width={1400}
      />
    </div>
  );
};

export default FFU;
