
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import AuthorizeDistributionCard from "@/components/shared/AuthorizeDistributionCard/AuthorizeDistributionCard";


const AuthorizeDistribution = () => {


    const authorizers = [
        {
            image: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png"
        },
        {
            image: "https://i.postimg.cc/v8nY2Zv4/PBRI-1.png"
        },
        {
            image: "https://i.postimg.cc/52hp3p9Y/ROMIX-1.png"
        },
        {
            image: "https://i.postimg.cc/ryfJbqFL/Nippon-800-x-221-2-1024x283-1.png"
        },
    ];




    return (
        <div className="my-20">
            <MaxWidthWrapper className="text-3xl font-semibold text-si-primary md:text-5xl my-12">
                Authorize Distribution
            </MaxWidthWrapper>
            <div
                className="flex flex-col items-center justify-center rounded-lg bg-[url('https://i.postimg.cc/mgp5mzsg/pexels-eric-mufasa-578798-1350789-1.jpg')] bg-cover bg-center text-black">

                <div className="bg-[#fbbe24da] py-16 " >
                    <MaxWidthWrapper className="mb-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {authorizers?.map((authorizer, index) => (
                            <AuthorizeDistributionCard index={index} key={index} authorizer={authorizer} />
                        ))}
                    </MaxWidthWrapper>
                </div>
            </div>
        </div>
    );
};

export default AuthorizeDistribution;