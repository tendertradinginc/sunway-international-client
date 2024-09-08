import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";

const OurClients = () => {
  const ClientInfo = [
    {
      img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/v8nY2Zv4/PBRI-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/52hp3p9Y/ROMIX-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/ryfJbqFL/Nippon-800-x-221-2-1024x283-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/fb77vNgp/PROMIXCO-Agro-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/0Q8YWBTQ/PROMIXCO-Pharmaceuticals-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/v8nY2Zv4/PBRI-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/52hp3p9Y/ROMIX-1.png",
      clientName: "FH Plastic Industry",
    },
    {
      img: "https://i.postimg.cc/ryfJbqFL/Nippon-800-x-221-2-1024x283-1.png",
      clientName: "FH Plastic Industry",
    },
  ];

  return (
    <MaxWidthWrapper className="my-24">
      <SectionTitle title1={"Our"} title2={"Businesses"}></SectionTitle>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ClientInfo.map((client, idx) => (
          <div
            key={idx}
            className="relative mx-auto h-56 w-full cursor-pointer rounded-2xl bg-green-50 text-center duration-700 hover:-translate-y-3 md:h-32"
          >
            <Image
              loader={customLoader}
              src={client.img}
              alt={client.clientName}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default OurClients;
