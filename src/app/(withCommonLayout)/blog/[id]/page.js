import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";

const page = async ({ params }) => {
  // const blog = blogs?.blogs?.find((item) => item.id === Number(params.id));
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${params?._id}`);
  const data = await res.json();

  const blog = data.data;

  return (
    <MaxWidthWrapper className="py-16">
      <div className="mx-auto min-h-[80vh]">
        <div className="">
          <Image
            src={blog?.image}
            alt="Blog Details Thumbnail"
            height={500}
            width={500}
            className="float-left mb-5 mr-10 w-full shadow-2xl lg:w-1/2"
          />
          <div className="flex-1">
            <h2
              style={{ lineHeight: "1.2" }}
              className="text-3xl font-semibold leading-normal text-si-primary md:text-5xl"
            >
              {blog?.title}
            </h2>

            <div className="mt-5 space-y-10">
              <p className="whitespace-break-spaces text-justify text-lg font-medium">
                {blog?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
