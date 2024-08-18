import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const MedicalEquipmentCard = () => {
    return (
        <div>
            <Image
                src="https://i.postimg.cc/QdsLcsDD/mri.png"
                alt="medical equipment"
                height="100"
                width="200"
                className="w-96"
            />
            <h3 className="text-lg mt-4 hover:underline">
                <b>Product Name:</b> ECG 
            </h3>
            <p className="text-sm line-clamp-2">
                <b>Short Description:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maiores eligendi inventore qui commodi! Quam?
            </p>
            {/* <Link href={"/"} className="text-si-accent pa font-bold">Explore More</Link> */}
            <button className="bg-[#fbbe24d3] rounded-sm px-3 p-1 mt-2 font-semibold text-black">
            Explore More
            </button>
        </div>
    );
};

export default MedicalEquipmentCard;