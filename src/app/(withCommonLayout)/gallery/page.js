import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Assembly from "@/components/gallery/Assembly";
import Certification from "@/components/gallery/Certification";
import FFU from "@/components/gallery/FFU";
import GalleryBanner from "@/components/gallery/GalleryBanner";

const page = () => {
  return (
    <div>
      <GalleryBanner />
      <MaxWidthWrapper className="space-y-20 py-16">
        <FFU />
        <Assembly />
        <Certification />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
