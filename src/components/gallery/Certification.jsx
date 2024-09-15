import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Certification = () => {
  return (
    <MaxWidthWrapper className="lg:my-20">
      {/* <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Certificate  Honor
      </h1> */}
      <div className="text-center">
        <SectionTitle title={"Certificate Honor"}></SectionTitle>

        <p className="lg:mt-5 font-medium text-si-text">
          Twin Trade International is committed to maintaining the highest
          industry standards, as evidenced by the numerous certifications we
          have received. We are proud to be certified, demonstrating our
          dedication to quality management systems that ensure efficient and
          effective project delivery. Our safety practices are certified
          reflecting our strong commitment to creating a safe work environment
          for our employees and partners. Additionally, we comply with
          environmental standards, ensuring sustainable practices in all our
          projects. These certifications, alongside others from reputable
          industry bodies, reflect our unwavering commitment to excellence,
          safety, and sustainability in every supply project we undertake.
        </p>
      </div>

      <div className="my-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Certificate 1 */}
        <div >
          <Image
            src="https://i.postimg.cc/NMG8tB6m/Frame-173.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 2 */}
        <div>
          <Image
            src="https://i.postimg.cc/tRvJRWQY/Frame-170.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 3 */}
        <div>
          <Image
            src="https://i.postimg.cc/RhJWxZ0P/Frame-174.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 4 */}
        <div>
          <Image
            src="https://i.postimg.cc/4Nh9rB7J/Frame-163.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 5 */}
        <div>
          <Image
            src="https://i.postimg.cc/RhJWxZ0P/Frame-174.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 6 */}
        <div>
          <Image
            src="https://i.postimg.cc/4Nh9rB7J/Frame-163.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 7 */}
        <div>
          <Image
            src="https://i.postimg.cc/tRvJRWQY/Frame-170.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>

        {/* Certificate 8 */}
        <div>
          <Image
            src="https://i.postimg.cc/NMG8tB6m/Frame-173.png"
            alt="certificate 1"
            height={300}
            width={300}
            className="shadow-lg rounded-lg w-full"
          />
        </div>
      </div>

      {/* <div className="mt-8 grid grid-cols-1 grid-rows-12 gap-y-10 md:grid-cols-2 md:gap-x-5 lg:gap-x-10">
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
      </div> */}
    </MaxWidthWrapper>
  );
};

export default Certification;
