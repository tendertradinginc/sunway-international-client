import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Private Clinic",
    description: "Healthcare Facility",
    location: "Banani, Dhaka",
    imageUrl: "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
  },
  {
    id: 2,
    title: "Office Solutions",
    description: "Office Equipment Supply",
    location: "Gulshan, Dhaka",
    imageUrl: "/benjamin-child-0sT9YhNgSEs-unsplash.jpg",
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
    <div className="py-16">
      <MaxWidthWrapper>
        <h1 className="text-3xl md:text-5xl font-semibold text-si-primary mb-10">
          Featured Projects
        </h1>
      </MaxWidthWrapper>

      <div className="relative min-h-[600px] w-full">
        <div
          className="absolute inset-0 top-0 left-0 bg-cover bg-center bg-fixed w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url(/solen-feyissa-jGmBZypoFPc-unsplash.jpg)`,
          }}
        >
          <MaxWidthWrapper className="w-full h-full">
            <section className="grid grid-cols-2 lg:gap-0 lg:grid-cols-4 h-full w-full p-[5%]">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-green-500 relative h-full w-full"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                    }}
                  >
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <section className="relative flex flex-col justify-evenly p-6 pt-10 text-muted h-full lg:h-1/2">
                      <div className="space-y-1">
                        <p className="text-sm md:text-base">{project.title}</p>
                        <h4 className="text-base md:text-lg xl:text-xl font-medium">
                          {project.description}
                        </h4>
                      </div>
                      <h6 className="text-xs md:text-sm">{project.location}</h6>
                      <Button className="w-full md:w-1/2">View More</Button>
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