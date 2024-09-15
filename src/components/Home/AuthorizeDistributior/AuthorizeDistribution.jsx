import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import AuthorizeDistributionCard from "@/components/shared/AuthorizeDistributionCard/AuthorizeDistributionCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const AuthorizeDistribution = () => {
  const authorizers = [
    {
      image: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
    },
    {
      image: "https://i.postimg.cc/v8nY2Zv4/PBRI-1.png",
    },
    {
      image: "https://i.postimg.cc/52hp3p9Y/ROMIX-1.png",
    },
    {
      image: "https://i.postimg.cc/ryfJbqFL/Nippon-800-x-221-2-1024x283-1.png",
    },
  ];

  return (
    <div
      className="inset-0 left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 71, 89, 0.9), rgba(28, 71, 89, 0.7)), url(https://i.ibb.co/G5tsH67/20228616454220.jpg)`,

        backgroundPosition: "center",
      }}
    >
      <MaxWidthWrapper className="my-12 text-3xl font-semibold text-si-primary md:text-5xl">
        <SectionTitle
          title1={"Authorize"}
          title2={"Distributor"}
          cn={"text-white"} 
        ></SectionTitle>
      </MaxWidthWrapper>

      <div className="w-full py-24">
        <MaxWidthWrapper className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {authorizers?.map((authorizer, index) => (
            <AuthorizeDistributionCard
              index={index}
              key={index}
              authorizer={authorizer}
            />
          ))}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AuthorizeDistribution;
