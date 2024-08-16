"use client";
import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import CountUp from 'react-countup';

const CountUP = () => {
    const totalProduct = 1200; 
    const totalSell = 750;
    const totalOrder = 550; 
    const totalCustomer = 400;

    return (
        <MaxWidthWrapper className="p-6 my-6  shadow-2xl text-gray-100  bg-opacity-10 bg-fixed bg-parallax bg-cover">
              
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                {/* Parcel Booked */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black">
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalProduct} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Total Product</p>
                    </div>
                </div>

                {/* Parcel Delivered */}
                <div className="flex flex-col justify-center items-center py-20 rounded-none text-black">
                    <div className="">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalSell} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Total sell</p>
                    </div>
                </div>

                {/* Customers */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black">
                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalOrder} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize mt-4 text-xl">Total Order</p>
                    </div>
                </div>

                 {/* users */}
                 <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black">
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
