import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { FaBuilding, FaStethoscope, FaWheelchair } from "react-icons/fa";

const Services = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <SectionTitle title1={"Our"} title2={"Services"}></SectionTitle>
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
        Hospital <br /> Renovation
      </>
    ),
    title2: "Hospital Renovation",
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl: "https://i.ibb.co/fXNnGtv/photo.jpg",
  },
  {
    icon: <FaStethoscope />,
    title: (
      <>
        MEDICAL <br /> EQUIPMENT
      </>
    ),
    title2: "MEDICAL EQUIPMENT",
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl: "https://i.ibb.co/HpmNXzG/Medical-Devices.jpg",
  },
  {
    icon: <FaWheelchair />,
    title: (
      <>
        HOSPITAL <br /> FURNITURE
      </>
    ),
    title2: "HOSPITAL FURNITURE",
    description:
      " Contruction in the process of constructing a building or  infrastructure. Contruction differs from manufacturing typically involves mass production of similar items a designated purchaser.",
    url: "",
    imageUrl: "https://i.ibb.co/xG2JvQf/Hospital-Furniture.jpg",
  },
];
