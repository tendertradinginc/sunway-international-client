"use client";
import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import CountUp from 'react-countup';

const CountUP = () => {
    const totalProduct = 1200; 
    const totalSell = 750;
    const totalOrder = 550; 
    const totalCustomer = 400;

    return (
        <MaxWidthWrapper className="p-6 my-6 text-gray-100 ">
              
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                {/* totalProduct */}
                <div className="flex flex-col justify-center items-center  rounded-lg text-black bg-si-accent">
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalProduct} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Total Product</p>
                    </div>
                </div>

                {/* totalSell */}
                <div className="flex flex-col justify-center items-center py-20 rounded-none text-black bg-si-accent">
                    <div className="">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalSell} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Total sell</p>
                    </div>
                </div>

                {/* totalOrder */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black bg-si-accent">
                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalOrder} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize mt-4 text-xl">Total Order</p>
                    </div>
                </div>

                 {/* totalCustomer */}
                 <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black bg-si-accent">
                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalCustomer} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize mt-4 text-xl">Total Customer</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default CountUP;
