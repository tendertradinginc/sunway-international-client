import MaxWidthWrapper from "../custom/MaxWidthWrapper";

const ServiceBanner = () => {
  return (
    <div className="min-h-[364px] w-full bg-[url('/Frame55.png')] bg-cover bg-center">
      <MaxWidthWrapper>
        <div className="py-20 md:py-32">
          <h1 className="text-center text-6xl font-bold text-[#16A249]">
            Services
          </h1>
          <p className="mx-auto w-2/3 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceBanner;
