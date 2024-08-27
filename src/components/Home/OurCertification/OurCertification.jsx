import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";

const OurCertification = () => {
    return (
        <MaxWidthWrapper>
            <div className="relative flex justify-end items-center">

                {/* Right Section with Content */}
                <div className="w-3/5 min-h-[70vh] bg-si-primary text-center p-10">
                    <div className="text-end p-20">
                        <h2 className="text-si-accent text-3xl font-semibold">Our Achievements</h2>
                        <p className="text-white text-lg px-6">
                            Our Company offers a variety of services to meet your project's needs, from collaboration meetings all the way to ribbon-cutting and beyond.
                        </p>
                    </div>
                </div>

                {/* Right Positioned Image Slightly Overlapping the Content */}
                <div className="absolute left-[80px] transform translate-x-[10%]">
                    <Image
                        src="https://i.postimg.cc/SRvVNgcV/ct.png"
                        alt="Certificate Image"
                        width={500}
                        height={200}
                        className="object-cover rounded-none "
                    />
                </div>

            </div>
        </MaxWidthWrapper>
    );
};

export default OurCertification;
