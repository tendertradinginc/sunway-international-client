import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Assembly from "@/components/gallery/Assembly";
import Certification from "@/components/gallery/Certification";
import FFU from "@/components/gallery/FFU";
import GalleryBanner from "@/components/gallery/GalleryBanner";

const page = () => {
  return (
    <div>
      <GalleryBanner />
      <FFU />
      <Assembly />
      <Certification />
    </div>
  );
};

export default page;
