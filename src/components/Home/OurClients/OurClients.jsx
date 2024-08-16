import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";


const OurClients = () => {

        const ClientInfo = [
          {
            img:
              "",
            name: "Dr. Ayesha Khan",

          },
        ];

    return (
        <MaxWidthWrapper className="my-10">
            <h1 className="text-3xl md:text-5xl font-semibold text-si-primary mb-5">
                Our Clients
            </h1>
            <div>
                <div>
                    <div className=" flex items-center border-[4px]  border-blue-950 p-3 gap-6  text-center rounded-lg shadow-xl hover:-translate-y-6 duration-700 cursor-pointer">
                        <Image className="h-24 mx-auto" src={img} alt="clients" />
                    </div>
                    <div>

                        <p
                            className="font-bold poppins-bold text-blue-900"
                            style={{ "text-align": "center" }}
                        >
                            {client?.clientName}
                        </p>

                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default OurClients;