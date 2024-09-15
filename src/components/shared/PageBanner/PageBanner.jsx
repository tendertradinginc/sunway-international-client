import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

const PageBanner = ({ title, description }) => {
  return (
    <div className="min-h-[364px] w-full bg-[url('/Frame55.png')] bg-cover bg-center">
      <MaxWidthWrapper>
        <div className="py-20 md:py-32">
          <h1 className="text-[#16A249] my-2 text-center text-6xl font-bold">
            {title}
          </h1>
          <div className="mx-auto w-2/3 text-center font-semibold mt-2">{description}</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
