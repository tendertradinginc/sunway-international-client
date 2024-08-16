import Link from "next/link";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";
import Image from "next/image";

const ConstructionService = () => {
  return (
    <MaxWidthWrapper className="py-16">
      <h1 className="text-3xl md:text-5xl font-semibold text-si-primary">
        Contruction Services
      </h1>
      <div className="grid grid-cols-12 grid-rows-12 gap-y-10 md:gap-10 mt-10">
       
        <div className="row-span-12 col-span-12 md:row-span-12 md:col-span-6 bg-[url('https://i.postimg.cc/63y7RCfc/pexels-oleksandr-plakhota-1270583835-26183653.jpg')] bg-cover ">
          <div className="bg-[#0c0d0d52] flex flex-col  h-full w-full text-white gap-y-2 pl-8">
            <p className="mt-10">BUILDING</p>
            <h1 className="text-3xl font-semibold">Modern House</h1>
            <p>Mellbourn, Australia</p>
            <Link href="#">
              {" "}
              <button className="p-2 px-5 border-2 border-si-accent rounded-md mt-8">
                View More
              </button>
            </Link>
          </div>
        </div>

        <div className="row-span-12 col-span-12 md:row-span-5 md:col-span-6 bg-[url('https://i.postimg.cc/jjR3sS4t/pexels-yury-kim-181374-585419.jpg')] bg-cover  ">
          <div className="bg-gradient-to-r from-[#0c0d0de7] via-[#0c0d0db2] to-transparent p-5 flex flex-col justify-center h-full w-full text-white gap-y-2 pl-8">
            <p className="mt-5">GENERAL DIRECTOR</p>
            <h1 className="text-3xl font-semibold">We are hiring specialist</h1>

            <Link href="#">
              {" "}
              <button className="p-2 px-5  bg-si-accent rounded-lg mt-5">
                View More
              </button>
            </Link>
          </div>
        </div>
        <div className="row-span-12 col-span-12 md:row-span-7 md:col-span-6 bg-[url('https://i.postimg.cc/nVwLBsXS/pexels-expect-best-79873-323780.jpg')] bg-cover ">
          <div className="bg-[#fbbe24c5] p-5 flex flex-col justify-center items-center h-full w-full text-white gap-y-2 pl-8">
            <Image
              alt="map cotruction service"
              height={100}
              width={300}
              src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
            />
            <p className="mt-2 text-muted">Contruction</p>
            <h1 className="text-3xl font-semibold text-gray-700">
              Sunway International - Contact Us
            </h1>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ConstructionService;
