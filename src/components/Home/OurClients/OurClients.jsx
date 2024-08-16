import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
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
            <h1 className="text-3xl md:text-5xl font-semibold text-si-primary mb-5">
                Our Clients
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">

                {ClientInfo.map((client, idx) => (
                    <div
                        key={idx}
                        className="relative h-32 w-60 mx-auto border-[2px] border-primary p-3 gap-2  h text-center rounded-lg shadow-xl hover:-translate-y-3 duration-700 cursor-pointer">
                        <Image
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
