import Image from "next/image";


const OurClientCard = ({ client }) => {
    const { img } = client;
    return (
        <div>
            <div className=" flex items-center  p-6 gap-6  text-center rounded-lg shadow-xl hover:-translate-y-6 duration-700 cursor-pointer">
                <Image
                    width={500}
                    height={200}
                    className="h-24 mx-auto"
                    src={img} alt="clients"
                />
            </div>
        </div>
    );
};

export default OurClientCard;
