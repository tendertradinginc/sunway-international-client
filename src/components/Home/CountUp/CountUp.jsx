"use client";
import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import CountUp from 'react-countup';

const CountUP = () => {
    const totalParcelBooked = 1200; 
    const totalParcelDelivery = 800;
    const totalCustomer = 500; 

    return (
        <MaxWidthWrapper className="p-6 my-6  shadow-2xl text-gray-100  bg-opacity-10 bg-fixed bg-parallax bg-cover">
              
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                {/* Parcel Booked */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black">
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalParcelBooked} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Parcel Booked</p>
                    </div>
                </div>

                {/* Parcel Delivered */}
                <div className="flex flex-col justify-center items-center py-20 rounded-none text-black">
                    <div className="">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalParcelDelivery} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize text-xl mt-4">Parcel Delivered</p>
                    </div>
                </div>

                {/* Customers */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg text-black">
                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalCustomer} duration={4} />+
                            </span>
                        </div>
                        <p className="capitalize mt-4 text-xl">Customers</p>
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
                        <p className="capitalize mt-4 text-xl">Users</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default CountUP;
