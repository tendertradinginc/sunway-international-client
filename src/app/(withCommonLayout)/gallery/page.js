import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Assembly from "@/components/gallery/Assembly";
import FFU from "@/components/gallery/FFU";

const page = () => {
  return (
    <MaxWidthWrapper className="space-y-20 py-16">
      <FFU />
      <Assembly />
    </MaxWidthWrapper>
  );
};

export default page;
