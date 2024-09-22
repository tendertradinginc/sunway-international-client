import { customLoader } from "@/utils/customLoader";
import Image from "next/image";

const OurClientCard = ({ client }) => {
  const { img } = client;
  return (
    <div>
      {/* <div className=" flex items-center  p-4 py-8 gap-6  text-center rounded-lg shadow-xl hover:-translate-y-6 duration-700 cursor-pointer">
                <Image
                    width={500}
                    height={200}
                    className="h-20 mx-auto"
                    src={img} alt="clients"
                />
            </div> */}
      <div className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-lg bg-white text-white shadow-xl duration-700 hover:-translate-y-6">
        <Image
          loader={customLoader}
          src={img}
          alt="clients"
          height="100"
          width="200"
          className=""
        />
      </div>
    </div>
  );
};

export default OurClientCard;
