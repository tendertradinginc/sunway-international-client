import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { FaBuilding } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";

const Services = () => {

  return (
    <MaxWidthWrapper className="py-16">
      <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">
        Our Services
      </h1>
      <div className="grid overflow-hidden grid-cols-1 py-16 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 ">
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
    imageUrl:"https://www.bls.gov/spotlight/2022/the-construction-industry-labor-force-2003-to-2020/images/cover-image.jpg",
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
    imageUrl:"https://i.postimg.cc/6pXVVBS1/marcel-scholte-LPur-Jnihm-QI-unsplash.jpg",
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
    imageUrl:"https://i.postimg.cc/jddtDfq8/pexels-fotios-photos-1957478-2-1.jpg",
  },
];
