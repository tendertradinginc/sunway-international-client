import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Certification = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Certificate  Honor
      </h1> */}
      <div className="text-3xl font-semibold text-si-primary md:text-5xl">
        <SectionTitle title1={"Certificate"} title2={"Honor"}></SectionTitle>
      </div>
      <p className="mt-5 text-si-text font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur eum magnam, commodi harum dolor qui dolorum perspiciatis placeat, explicabo minima aut est reiciendis. Cum, exercitationem necessitatibus? Saepe dignissimos non repellat facere, deserunt aliquam, alias ea nobis accusantium nihil mollitia dolores ipsa odit dicta inventore dolorem nam voluptatem culpa natus? Eveniet totam ex quisquam expedita reiciendis nam nulla neque, amet ut molestias corrupti earum quae maxime cumque et deserunt iusto! Voluptatum aut corporis vitae architecto dolorum nemo at quaerat id consectetur neque.</p>


      <div className="mt-8 grid grid-cols-1 grid-rows-12 gap-y-10 md:grid-cols-2 md:gap-x-5 lg:gap-x-10">
        <div className="row-span-12 grid gap-5">
          <div className="col-span-4 grid">
            <Image
              loader={customLoader}
              className=""
              src="https://i.postimg.cc/SKxpDb0q/1600w-Fcz7-Kk-Z5-Ya-U.webp"
              alt="Assembly Workshop Image 2"
              height={800}
              width={1400}
            />
          </div>
          <div className="col-span-4">
            <Image
              loader={customLoader}
              className=""
              src="https://i.postimg.cc/HxJ110sh/certificate-text-samples.webp"
              alt="Assembly Workshop Image 2"
              height={800}
              width={1400}
            />
          </div>
          <div className="col-span-4">
            <Image
              loader={customLoader}
              className=""
              src="https://i.postimg.cc/tR1cztTs/stock-vector-modern-certificate-template-vector-design-1930040081.jpg"
              alt="Assembly Workshop Image 2"
              height={800}
              width={1400}
            />
          </div>
        </div>

        <div className="row-span-4 grid grid-cols-2 gap-5">
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/Bn1Fbk7S/da9078f810acc8624b60713d4d2c6a6e.jpg"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/3w7952YF/new-certificate-design-532675-92.avif"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
        </div>

        <div className="row-span-4 grid grid-cols-2 gap-5">
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/pTJ9FnFk/imagescertificate.jpg"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/JnFhJchN/vertical-certificate-in-premium-gold-design-word-template-38d94c9720-max.avif"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
        </div>

        <div className="row-span-4 grid grid-cols-2 gap-5">
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/pybXcWzy/preview-trendy-corporate-professional-vertical-abstract-certificate-vector-template-1642224267.jpg"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
          <Image
            loader={customLoader}
            className="h-full w-full"
            src="https://i.postimg.cc/pybXcWzy/preview-trendy-corporate-professional-vertical-abstract-certificate-vector-template-1642224267.jpg"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
