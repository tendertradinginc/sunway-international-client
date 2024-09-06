import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { FaBuilding, FaStethoscope, FaWheelchair } from "react-icons/fa";

const Services = () => {
  return (
    <div
      className="inset-0 left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 71, 89, 0.7), rgba(28, 71, 89, 0.7)), url(/adhy-savala-zbpgmGe27p8-unsplash.jpg)`,

        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <MaxWidthWrapper className="">
        <SectionTitle
          title1={"Our"}
          title2={"Services"}
          cn={"text-white"}
        ></SectionTitle>
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 overflow-hidden py-16 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item, idx) => (
            <ServiceCard index={idx} key={idx} data={item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
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
      "Hospital construction services is a specialized division focused on enhancing the physical environment of healthcare facilities. This service oversees building construction, ensuring that new hospital infrastructures are developed with state-of-the-art technology and adhere to rigorous safety standards. It collaborates closely with architectural design experts to create spaces that are both functional and aesthetically pleasing, supporting the complex needs of healthcare providers and patients. This includes everything from the layout of patient rooms and operating theaters to the design of communal areas that promote healing and well-being.",
    url: "/services",
    imageUrl:
      "https://i.ibb.co/JRX40s7/pexels-oles-kanebckuu-34911-127873-1-1.jpg",
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
      "Our hospital equipment service plays a crucial role in the healthcare industry by ensuring that medical facilities have the necessary tools and devices to provide quality patient care. This service specializes in sourcing, distributing, and maintaining a wide range of medical equipment, from basic diagnostic tools to advanced surgical instruments. By working closely with manufacturers and healthcare providers, the service ensures that hospitals have access to the latest technology and equipment, tailored to meet their specific needs. Reliability, efficiency, and compliance with regulatory standards are the hallmarks of a top-tier hospital equipment supplying service.",
    url: "/services",
    imageUrl:
      "https://i.postimg.cc/6pXVVBS1/marcel-scholte-LPur-Jnihm-QI-unsplash.jpg",
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
      "Our regular equipment services are crucial for maintaining the functional and aesthetic quality of healthcare environments. These services provide a continuous supply of essential furniture items like hospital beds, chairs, tables, storage units, and more, ensuring that all areas, from patient rooms to waiting areas and administrative offices, are equipped to meet the demands of daily operations. The furniture provided is often designed to meet strict healthcare standards, prioritizing durability, hygiene, and ease of maintenance. By partnering with a reliable supplier,",
    url: "/services",
    imageUrl: "https://i.ibb.co/xG2JvQf/Hospital-Furniture.jpg",
  },
];
