import AuthorizeDistributorCard from "@/components/shared/AuthorizeDistributorCard/AuthorizeDistributorCard";

const AuthorizeDistributors = () => {
  return (
    <section className="my-6 bg-[#f6f6f6] lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 py-5 lg:flex-row lg:gap-10">
        <div className="flex flex-col items-center justify-center lg:w-2/5">
          <p className="p-4 text-center text-black">
            <span className="mb-3 text-3xl font-bold text-si-primary">
              Authorized Distributor{" "}
            </span>
            <br />
            <span className="mt-7 inline-block text-5xl font-bold  text-si-primary">4+</span>
            <br />
            around all over the world
          </p>
        </div>
        <div className="flex flex-col justify-center text-justify lg:w-3/4">
          <p className="p-4">
            We work with trusted distributors to provide genuine medical
            equipment, expertly designed hospital interiors, and reliable
            hospital furniture. Our authorized distributors ensure you receive
            authentic products backed by full support and warranties,
            guaranteeing quality and peace of mind.
          </p>

          <div className="mt-7">
            <AuthorizeDistributorCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorizeDistributors;
