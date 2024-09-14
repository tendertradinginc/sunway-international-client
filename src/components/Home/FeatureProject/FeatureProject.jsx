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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
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
                  <p className="my-4 text-gray-900">{card?.description}</p>
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
    subTitle: "Office Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/gjG9LNF/Frame-42-2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    liveLInk: "#",
  },
  {
    id: 2,
    subTitle: "Office Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/MSdXDSP/Frame-42-1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    liveLInk: "#",
  },
  {
    id: 3,
    subTitle: "Office Solutions",
    title: "Office Equipment Supply",
    location: "Green corner, flat #g-1, green road, 1205, Gulshan, Dhaka",
    image: "https://i.ibb.co.com/fxjCVk2/Frame-42.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    liveLInk: "#",
  },
];
