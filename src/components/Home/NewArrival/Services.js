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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 mt-10">
        {data?.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
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
  },
];
