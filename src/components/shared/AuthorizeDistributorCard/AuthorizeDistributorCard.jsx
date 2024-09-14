import Image from "next/image";


const AuthorizeDistributorCard = () => {


    const Distributors = [
        {
            img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
        },
        {
            img: "https://i.postimg.cc/v8nY2Zv4/PBRI-1.png",
        },
        {
            img: "https://i.postimg.cc/52hp3p9Y/ROMIX-1.png",
        },
        {
            img: "https://i.postimg.cc/ryfJbqFL/Nippon-800-x-221-2-1024x283-1.png",
        },

    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

            {Distributors?.map((distributor, index) => (

                <div
                    key={index} distributor={distributor}

                    className="flex h-36 items-center justify-center rounded-lg   text-white  cursor-pointer">
                    <Image
                        src={distributor.img}
                        alt="clients"
                        height="100"
                        width="200"
                        className=""
                    />
                </div>
            ))}
        </div>
    );
};

export default AuthorizeDistributorCard;