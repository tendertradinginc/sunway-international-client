"use client"
import { useState } from "react";
import OurClientCard from "./OurClientCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const OurClient = () => {

  const [loading, setLoading] = useState();

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

  const skeleton = new Array(8).fill(0);

  return (
    <div className="pt-16 px-5 xl:px-0 mb-6 poppins-semibold">
      {/* <h1 className="text-si-primary lg:text-5xl text-3xl text-center font-semibold py-10 ">
        Our Partners
      </h1> */}
      <SectionTitle title={"Our Partners"} ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
        {loading
          ? skeleton?.map((item, idx) => (
            <div className="flex" key={idx}>
              <svg
                className="h-32 w-full text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          ))
          : ClientInfo
            ?.slice(0, 20)
            ?.map((client, index) => (
              <OurClientCard key={index} client={client}></OurClientCard>
            ))}
      </div>
    </div>
  );
};

export default OurClient;
