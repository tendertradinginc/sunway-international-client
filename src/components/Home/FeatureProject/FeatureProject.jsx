import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeatureProject = () => {
  return (
    <div className="rounded-md bg-[#F6F6F6] py-20">
      <MaxWidthWrapper>
        <SectionTitle
          title={"Featured Projects"}
          description={
            "Twin Trade International Is here to supply all the equipment for you. From hospital development to patient care, We all have it all for you. "
          }
        ></SectionTitle>
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card) => (
              <div key={card?.id} className="bg-white p-4">
                <div>
                  <Image
                    loader={customLoader}
                    src={card.image}
                    alt={card.image}
                    width={200}
                    height={200}
                    className="mb-4 h-auto w-full"
                  />
                </div>
                <div>
                  <h4 className="">{card?.subTitle}</h4>
                  <h2 className="lead text-[32px] font-semibold">
                    {card?.title}
                  </h2>
                  <p className="text-sm font-semibold text-gray-700">
                    {card?.location}
                  </p>
                  <p className="my-4 line-clamp-4 text-gray-900">
                    {card?.description}
                  </p>
                  <button className="flex items-center gap-x-2 rounded-md border border-si-primary bg-white pr-3 text-lg font-semibold text-si-primary duration-300 hover:border-si-primary hover:bg-si-primary hover:text-white">
                    <Link className="px-3 py-2" href={`/${card?.liveLInk}`}>
                      View more{" "}
                    </Link>
                    <span>
                      {" "}
                      <FaArrowRight className="" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FeatureProject;

const cardData = [
  {
    id: 1,
    subTitle: "Renovation Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/gjG9LNF/Frame-42-2.png",
    description:
      "Office Equipment Supply: Twin Trade International brings to you Hospital office equipment supply which are the essential items needed for administrative tasks in healthcare settings. These supplies include office furniture, computers, printers, phones, and organizational tools like filing cabinets and paper shredders. Efficient management of office equipment is crucial for maintaining smooth operations, ensuring accurate patient records, and facilitating communication between medical staff. A well-stocked supply chain of hospital office equipment supports administrative efficiency and contributes to the overall functionality of healthcare services. ",
    liveLInk: "#",
  },
  {
    id: 2,
    subTitle: "Room Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/MSdXDSP/Frame-42-1.png",
    description:
      "Healthcare facility supply: Twin Trade International brings to you all the hospital healthcare facility supply refers to the management and provision of essential medical equipment, supplies, and resources needed to support patient care. This includes items such as surgical instruments, personal protective equipment (PPE), pharmaceuticals, and consumables like gloves, syringes, and bandages. Properly managed healthcare supplies also help control costs and ensure that healthcare providers can deliver high-quality care efficiently.",
    liveLInk: "#",
  },
  {
    id: 3,
    subTitle: "Furniture Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/fxjCVk2/Frame-42.png",
    description:
      "Hospital Development supply: Hospital development supply refers to the range of materials, equipment, and infrastructure necessary for constructing, expanding, or upgrading healthcare facilities. It includes medical equipment, construction materials, technology systems, and furnishings, all of which must meet specific healthcare standards for safety, durability, and hygiene. Efficient hospital development supply ensures that healthcare environments are equipped to provide high-quality care, manage patient volumes, and adapt to advancements in medical technology. The supply chain for these materials must be well-coordinated to meet timelines and regulatory requirements essential for healthcare infrastructure projects.",
    liveLInk: "#",
  },
];
