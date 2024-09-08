import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 2,
    title: "Office Solutions",
    description: "Office Equipment Supply",
    location: "Gulshan, Dhaka",
    imageUrl: "/benjamin-child-0sT9YhNgSEs-unsplash.jpg",
  },
  {
    id: 1,
    title: "Private Clinic",
    description: "Healthcare Facility",
    location: "Banani, Dhaka",
    imageUrl: "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
  },

  {
    id: 3,
    title: "Medical Center",
    description: "Hospital Development",
    location: "Dhanmondi, Dhaka",
    imageUrl: "/graham-ruttan-aMNLYoT2z_I-unsplash.jpg",
  },
  {
    id: 4,
    title: "Medical Office",
    description: "Medical Equipment Supply",
    location: "Uttara, Dhaka",
    imageUrl: "/national-cancer-institute-oCLuFi9GYNA-unsplash.jpg",
  },
];

const ProjectShowcase = () => {
  return (
    <div
      className="inset-0 left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 71, 89, 0.7), rgba(28, 71, 89, 0.7)), url(https://i.ibb.co.com/KN4C1HC/phots12-1.jpg)`,

        backgroundPosition: "top right",
        height: "100vh",
      }}
    >
      <div className="min-h-[600px] w-full">
        <div className="h-full">
          {/* <div className="absolute inset-0 bg-[#1c475995] opacity-70"></div> */}
          <MaxWidthWrapper className="h-full w-full">
            <SectionTitle
              title1={"Featured"}
              title2={"Projects"}
              cn={"text-white"}
            ></SectionTitle>

            <section className="grid h-full w-full grid-cols-2 gap-4 lg:grid-cols-4">
              {projects.map((project) => (
                <div key={project.id} className="h-[400px] w-full">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(229, 231, 235, 0.4), rgba(229, 231, 235, 0.4)),url(${project.imageUrl})`,
                    }}
                  >
                    {/* Black overlay */}r
                    {/* <div className="absolute left-0 top-0 h-full w-full bg-green-900 opacity-60"></div> */}
                    <section className="flex h-full flex-col justify-evenly p-6 pt-10 text-muted">
                      <div className="space-y-1">
                        <p className="text-sm text-black md:text-base">
                          {project.title}
                        </p>
                        <h4 className="text-base font-medium text-black md:text-lg xl:text-xl">
                          {project.description}
                        </h4>
                        <h6 className="text-xs text-black md:text-sm">
                          {project?.location}
                        </h6>
                      </div>

                      <Button className="w-full text-white md:w-1/2">
                        View More
                      </Button>
                    </section>
                  </div>
                </div>
              ))}
            </section>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
