import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { FaBuilding, FaStethoscope, FaWheelchair } from "react-icons/fa";

const Services = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <h1 className="mb-12 text-3xl font-semibold text-si-primary md:text-5xl">
        Our <span className="text-[#fbbf24]"> Services</span>
      </h1>
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 overflow-hidden py-16 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item, idx) => (
          <ServiceCard index={idx} key={idx} data={item} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;

const data = [
  {
    icon: <FaBuilding />,
    title: (
      <>
        CONSTRUCTION <br /> CONSULTANT
      </>
    ),
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl:
      "https://www.bls.gov/spotlight/2022/the-construction-industry-labor-force-2003-to-2020/images/cover-image.jpg",
  },
  {
    icon: <FaStethoscope />,
    title: (
      <>
        MEDICAL <br /> EQUIPMENT
      </>
    ),
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl:
      "https://i.postimg.cc/6pXVVBS1/marcel-scholte-LPur-Jnihm-QI-unsplash.jpg",
  },
  {
    icon: <FaWheelchair />,
    title: (
      <>
        REGULAR <br /> EQUIPMENT
      </>
    ),
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl:
      "https://i.postimg.cc/jddtDfq8/pexels-fotios-photos-1957478-2-1.jpg",
  },
];
