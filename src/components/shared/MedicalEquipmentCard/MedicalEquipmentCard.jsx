import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";

const MedicalEquipmentCard = ({ data }) => {
  const { productName, images, shortDescription } = data;
  console.log(data);
  return (
    <div className="rounded-lg border p-3 shadow-xl">
      <Image
        loader={customLoader}
        src={images[0]}
        alt="medical equipment"
        height="100"
        width="200"
        className="w-96"
      />
      <h3 className="my-4 text-lg hover:underline">
        <b>{productName}</b>
      </h3>
      <p className="line-clamp-2 text-sm">
        {shortDescription} Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Assumenda maxime suscipit molestias voluptate doloremque maiores
        quaerat est modi placeat. Eveniet, nostrum obcaecati minima distinctio,
        amet quasi itaque saepe perspiciatis vel enim ipsum est. Et ratione
        magnam tempora, ullam officia fuga optio illum! Voluptatem consectetur
        tempora itaque, voluptate nisi commodi assumenda. vel enim ipsum est. Et
        ratione magnam tempora, ullam officia fuga optio illum! Voluptatem
        consectetur tempora itaque, voluptate nisi commodi assumenda.
      </p>
      {/* <Link href={"/"} className="text-si-accent pa font-bold">Explore More</Link> */}
      <Link href={`/medicalEquipment/${data?._id}`}>
        <button className="mt-4 rounded-sm border-2 border-primary bg-primary p-1 px-3 font-semibold text-white duration-200 hover:bg-transparent hover:text-si-primary">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default MedicalEquipmentCard;
