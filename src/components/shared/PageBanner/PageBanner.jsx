import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

const PageBanner = ({ title, description, banner }) => {
  console.log(banner);
  return (
    <div
      className={`min-h-[364px] w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <MaxWidthWrapper>
        <div className="py-20 md:py-32">
          <h1 className="my-2 text-center text-6xl font-bold text-[#16A249]">
            {title}
          </h1>
          <div className="mx-auto w-2/3 text-center font-semibold mt-2">{description}</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
