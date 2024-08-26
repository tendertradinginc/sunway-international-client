import { Card, CardContent } from "@/components/ui/card";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";

const MedicalEquipmentCard = ({ data }) => {
  const { productName, images, shortDescription } = data;
  return (
    <div className="h-full  flex flex-col">
      <Image
        loader={customLoader}
        src={images[0]}
        alt="medical equipment"
        height="100"
        width="200"
        className="w-96"
      />
      <div className="flex flex-col shadow-md flex-1 p-3">
        <h3 className="mt-7 text-lg hover:underline">
          <b>Product Name:</b> {productName}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm flex-grow">
          <b>Short Description:</b> {shortDescription}
        </p>
        {/* <Link href={"/"} className="text-si-accent pa font-bold">Explore More</Link> */}
        <Link href={"/"}>
          <button className="mt-2 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-black">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MedicalEquipmentCard;
