import Image from "next/image";
import SectionTitle from "../shared/SectionTitle/SectionTitle";


const GalleryBanner = () => {
    return (
        <div className="relative flex flex-col justify-center items-center  min-h-96 mt-10">
            <Image className="absolute left-0 top-0 z-0 opacity-70 h-full" src="https://i.postimg.cc/zBv2qC5J/Downloader-La-463487-1.png" alt="Gallery Banner" height={500} width={1400}  />
            <div className="z-10 text-center py-48">
              <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">Gallery</h1>
               <p className="max-w-3xl font-semibold mt-5">Twin Trade International aims to create spaces that heal, supply tools that cure as we deliver excellence to your doorstep</p>
            </div>
            
        </div>
    );
};

export default GalleryBanner;