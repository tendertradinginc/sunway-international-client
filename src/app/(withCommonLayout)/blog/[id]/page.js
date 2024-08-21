import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";

const page = async ({ params }) => {

  const res = await fetch(`http://localhost:5000/api/v1/blogs/${params?.id}`, {
    cache:"no-store"
  });
  const data = await res.json();
  const blog = data?.data;

  return (
    <MaxWidthWrapper className="p-5 py-16 md:p-20">
      <div className="mx-auto min-h-[80vh]">
        <div className="pb-10">
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
              className="text-3xl font-bold leading-normal text-si-primary md:text-4xl"
            >
              {blog?.title}
            </h2>

            <div className="mt-5">
              <p className="whitespace-break-spaces text-justify font-semibold">
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
