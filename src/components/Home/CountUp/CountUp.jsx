"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CountUp from "react-countup";

const CountUP = () => {
  const totalProduct = 1200;
  const totalSell = 750;
  const totalOrder = 550;
  const totalCustomer = 400;

  return (
    <MaxWidthWrapper className="my-6 p-6 text-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {/* totalProduct */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-si-accent text-black">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalProduct} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Product</p>
          </div>
        </div>

        {/* totalSell */}
        <div className="flex flex-col items-center justify-center rounded-none bg-si-accent py-20 text-black">
          <div className="">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalSell} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total sell</p>
          </div>
        </div>

        {/* totalOrder */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-si-accent py-20 text-black">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalOrder} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Order</p>
          </div>
        </div>

        {/* totalCustomer */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-si-accent py-20 text-black">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="pb-2 text-5xl font-semibold leading-none">
                <CountUp end={totalCustomer} duration={4} />+
              </span>
            </div>
            <p className="mt-4 text-xl capitalize">Total Customer</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CountUP;
