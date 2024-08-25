import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    cache: "no-cache",
  });
  const data = await res.json();
  const blogs = data?.data?.allBlogs;
  console.log(blogs);

  return (
    <MaxWidthWrapper className="py-10">
      {/* Title Section */}
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-3xl font-semibold text-si-primary md:text-5xl">
          Wellness Journal
        </h1>
        <p className="mt-3 text-center font-semibold text-si-text">
          Stay informed with the latest health tips, medical news, and expert
          insights. Your go-to resource for staying healthy and well.
        </p>
      </div>

      {/* First Blog Section */}
      <div className="mt-12 grid grid-cols-1 gap-5 gap-y-20 lg:grid-cols-2">
        <div className="bg-secondary">
          <Image
            alt="Blog Image 1"
            height={500}
            width={500}
            src={blogs[0]?.image}
            className="w-fit md:w-full"
          />
          <div className="px-3">
            <h1 className="my-4 text-4xl font-semibold text-si-primary">
              {blogs[0]?.title}
            </h1>
            <p className="line-clamp-4 text-justify font-medium text-si-text">
              {blogs[0]?.description}
            </p>
            <Link href={`/blog/${blogs[0]._id}`}>
              {" "}
              <button className="mt-4 rounded-sm border-2 border-primary bg-primary p-1 px-3 font-semibold text-white duration-200 hover:bg-transparent hover:text-si-primary">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          {blogs?.slice(1, 4).map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 gap-2 bg-[#8cd9a61e] md:grid-cols-2"
            >
              <div>
                <Image
                  alt="Blog Image 2"
                  height={500}
                  width={500}
                  src={item?.image}
                  className="h-full w-fit"
                />
              </div>
              <div className="p-3">
                <h1 className="line-clamp-2 text-2xl font-semibold text-si-primary">
                  {item?.title}
                </h1>
                <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
                  {item?.description}
                </p>
                <Link href={`/blog/${item?._id}`}>
                  {" "}
                  <button className="mt-4 rounded-sm border-2 border-primary bg-primary p-1 px-3 font-semibold text-white duration-200 hover:bg-transparent hover:text-si-primary">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second Blog Section */}
      <div className="mt-20 grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {blogs?.slice(4, blogs.length).map((item, idx) => (
          <div key={idx} className="bg-secondary">
            <Image
              alt="Blog Image 1"
              height={500}
              width={500}
              src={item?.image}
              className="h-80 w-fit md:w-full"
            />
            <div className="p-3">
              <h1 className="line-clamp-2 p-0 text-2xl font-semibold text-si-primary">
                {item?.title}
              </h1>
              <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
                {item?.description}
              </p>
              <Link href={`/blog/${item?._id}`}>
                {" "}
                <button className="mt-4 rounded-sm border-2 border-primary bg-primary p-1 px-3 font-semibold text-white duration-200 hover:bg-transparent hover:text-si-primary">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
