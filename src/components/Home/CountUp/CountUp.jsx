import React from 'react';

const CountUP = () => {
    return (
        <section className="p-6 my-6 bg-white shadow-md text-gray-100">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                {/* revenue */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-white">

                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <p className="text-5xl font-semibold leading-none pb-2" id="parcelBooked"   ></p>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalParcelBooked} duration={4} />
                                +</span>
                        </div>

                        <p className="capitalize text-xl mt-4">Parcel Booked</p>
                    </div>
                </div>
                {/* menuItems */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-white">

                    <div className="">
                        <div className='flex justify-center items-center'>
                            <p className="text-5xl font-semibold leading-none pb-2" id="delivery"   ></p>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalParcelDelivery} duration={4} />
                                +</span>

                        </div>
                        <p className="capitalize text-xl mt-4"> Parcel Delivered</p>
                    </div>
                </div>
                {/* products */}
                <div className="flex flex-col justify-center items-center py-20 rounded-lg  bg-amber-500 text-white">

                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <p className="text-5xl font-semibold leading-none pb-2" id="customers"   ></p>
                            <span className='text-5xl font-semibold leading-none pb-2'>
                                <CountUp end={totalCustomer} duration={4} />
                                +</span>

                        </div>
                        <p className="capitalize mt-4 text-xl">Customers</p>

                    </div>
                </div>




            </div>
        </section>
    );
};

export default CountUP;