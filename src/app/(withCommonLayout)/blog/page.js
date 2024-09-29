import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { customLoader } from "@/utils/customLoader";

import PageBanner from "@/components/shared/PageBanner/PageBanner";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  try {
    const res = await fetch(
      "https://sunway-international-server.vercel.app/api/v1/blogs",
      {
        cache: "no-cache",
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const blogs = data?.data?.allBlogs;

    return (
      <div className="">
        <PageBanner
          title={"Blog"}
          description={
            "Welcome to our blog, where we explore the latest in medical advancements, health tips, and wellness trends. Our expert contributors provide reliable, in-depth articles to help you stay informed and empowered on your health journey."
          }
          banner={"https://i.postimg.cc/zBv2qC5J/Downloader-La-463487-1.png"}
        ></PageBanner>
        <MaxWidthWrapper className="py-10">
          {/* First Blog Section */}
          <div className="mt-12 grid grid-cols-1 gap-5 gap-y-20 lg:grid-cols-2">
            <div className="bg-secondary">
              <Image
                loader={customLoader}
                alt="Blog Image 1"
                height={500}
                width={500}
                src={blogs[0]?.image}
                className="w-fit md:w-full"
              />
              <div className="p-3">
                <h1 className="my-4 text-4xl font-semibold text-si-primary">
                  {blogs[0]?.title}
                </h1>
                <p className="line-clamp-4 text-justify font-medium text-si-text lg:mb-7">
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
                      loader={customLoader}
                      alt="Blog Image 2"
                      height={500}
                      width={500}
                      src={item?.image}
                      className="h-full w-fit object-cover"
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

          {/* Second Blog Section */}
          <div className="mt-20 grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {blogs?.slice(4, blogs.length).map((item, idx) => (
              <div key={idx} className="bg-secondary">
                <Image
                  loader={customLoader}
                  alt="Blog Image 1"
                  height={500}
                  width={500}
                  src={item?.image}
                  className="h-80 w-fit object-cover md:w-full"
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
      </div>
    );
  } catch (error) {
    console.error("Error loading blog page:", error);
    return <p>Error loading content. Please try again later.</p>;
  }
};

export default Page;
