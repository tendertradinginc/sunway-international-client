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
      "Hospital construction services is a specialized division focused on enhancing the physical environment of healthcare facilities. This service oversees building construction, ensuring that new hospital infrastructures are developed with state-of-the-art technology and adhere to rigorous safety standards. It collaborates closely with architectural design experts to create spaces that are both functional and aesthetically pleasing, supporting the complex needs of healthcare providers and patients. This includes everything from the layout of patient rooms and operating theaters to the design of communal areas that promote healing and well-being.",
    url: "/services",
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
      "Our hospital equipment service plays a crucial role in the healthcare industry by ensuring that medical facilities have the necessary tools and devices to provide quality patient care. This service specializes in sourcing, distributing, and maintaining a wide range of medical equipment, from basic diagnostic tools to advanced surgical instruments. By working closely with manufacturers and healthcare providers, the service ensures that hospitals have access to the latest technology and equipment, tailored to meet their specific needs. Reliability, efficiency, and compliance with regulatory standards are the hallmarks of a top-tier hospital equipment supplying service.",
    url: "/services",
    imageUrl:"https://i.postimg.cc/6pXVVBS1/marcel-scholte-LPur-Jnihm-QI-unsplash.jpg",
  },
  {
    icon: <FaWheelchair />,
    title: (
      <>
        HOSPITAL <br /> FURNITURE
      </>
    ),
    description:
      "Our regular equipment services are crucial for maintaining the functional and aesthetic quality of healthcare environments. These services provide a continuous supply of essential furniture items like hospital beds, chairs, tables, storage units, and more, ensuring that all areas, from patient rooms to waiting areas and administrative offices, are equipped to meet the demands of daily operations. The furniture provided is often designed to meet strict healthcare standards, prioritizing durability, hygiene, and ease of maintenance. By partnering with a reliable supplier,",
    url: "/services",
    imageUrl:"https://i.postimg.cc/jddtDfq8/pexels-fotios-photos-1957478-2-1.jpg",
  },
];
