import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import { customLoader } from '@/utils/customLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurAchievement = () => {
    return (
        <section className="my-10">
            <MaxWidthWrapper className="mx-auto flex max-w-6xl flex-col justify-between  py-5 lg:flex-row lg:gap-16">

                <div className="order-first px-3 flex flex-1 flex-col justify-center text-justify ">
                    <Image
                        src="https://i.postimg.cc/Xv2MWhq1/Downloader-La-288044.png"
                        alt="About Us Image"
                        width={500}
                        height={300}
                        loader={customLoader}
                        className="h-auto w-full px-3 md:px-4 lg:px-0 rounded-none object-cover"
                    />

                    <div className='flex lg:justify-end justify-center lg:items-end items-center flex-col -mt-20 lg:-mr-10 '>
                        <p className='text-white text-sm bg-si-primary p-6'> <span className='text-4xl font-bold text-start text-white'>4+</span> <br /> Years <br /> Experience</p>
                    </div>
                </div>

                <div className="flex-1 lg:pl-8 lg:px-0 md:px-4 px-3 flex flex-col justify-center items-start text-justify">
                    <h1 className="text-xl font-bold text-si-primary lg:text-3xl">
                        Our Achievement
                    </h1>
                    <p className="mt-6">
                        Our Company offers a variety of services to meet your project's needs, from collaboration meetings all the way to ribbon-cutting and beyond.

                    </p>
                    <p className="mt-6">
                        Our Company offers a variety of services to meet your project's needs, from collaboration meetings all the way to ribbon-cutting and beyond.
                    </p>

                    <Link
                        href={"/gallery"}
                        className="text-right flex justify-center gap-2 items-center text-si-primary font-semibold pt-8"
                    >
                        <button className="border bg-si-primary hover:bg-white duration-500 text-white hover:text-si-primary px-8 text-sm py-2 rounded-md">
                            View Details
                        </button>
                    </Link>
                </div>



            </MaxWidthWrapper>
        </section>
    );
};

export default OurAchievement;