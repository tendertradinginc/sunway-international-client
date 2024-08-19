import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import blogs from "@/lib/blogs";

const Page = async () => {
  const array = new Array(9).fill(0);
  //   const res = await fetch("./lib/blogs.json");
  //   const blogs = await res.json()
  console.log(blogs?.blogs.length);
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
            src={blogs?.blogs[0]?.image}
            className="w-fit md:w-full"
          />
          <div className="px-3">
            <h1 className="my-4 text-4xl font-semibold text-si-primary">
              {blogs?.blogs[0]?.title}
            </h1>
            <p className="line-clamp-4 text-justify font-medium text-si-text">
              {blogs?.blogs[0]?.description}
            </p>
            <Link href="#">
              {" "}
              <button className="mt-4 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
            {blogs?.blogs?.slice(1,4).map((item, idx)=>   <div key={idx} className="grid grid-cols-1 gap-2 bg-[#8cd9a61e] md:grid-cols-2">
            <div>
              <Image
                alt="Blog Image 2"
                height={500}
                width={500}
                src= {item?.image}
                className="w-fit h-full"
              />
            </div>
            <div className="p-3">
              <h1 className="line-clamp-2 text-2xl font-semibold text-si-primary">
               {item?.title}
              </h1>
              <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
              {item?.description}
              </p>
              <Link href="#">
                {" "}
                <button className="mt-1 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>)}
        
          {/* <div className="grid grid-cols-1 gap-2 bg-[#8cd9a61e] md:grid-cols-2">
            <div>
              <Image
                alt="Blog Image 2"
                height={500}
                width={500}
                src="https://mida.peerduck.com/wp-content/uploads/2022/03/4tgdeg.png"
                className="w-fit"
              />
            </div>
            <div className="p-3">
              <h1 className="line-clamp-2 text-2xl font-semibold text-si-primary">
                Importance of Diagnostic Testing
              </h1>
              <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
                Donec vel pellentesque nisl, molestie tempus ligula. Cras massa
                turpis, pretium nec placerat ornare, sodales ac urna. Sed
                commodo semper fermentum. Phasellus bibendum lorem nisi turpis,
                pretium nec placerat ornare, sodales ac urna. Sed commodo semper
                fermentum. Phasellus bibendum lorem nisi condimentum
              </p>
              <Link href="#">
                {" "}
                <button className="mt-1 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 bg-[#8cd9a61e] md:grid-cols-2">
            <div>
              <Image
                alt="Blog Image 2"
                height={500}
                width={500}
                src="https://mida.peerduck.com/wp-content/uploads/2022/03/yh5ghwv.png"
                className="w-fit"
              />
            </div>
            <div className="p-3">
              <h1 className="line-clamp-2 p-0 text-2xl font-semibold text-si-primary">
                Importance of Diagnostic Testing
              </h1>
              <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
                Donec vel pellentesque nisl, molestie tempus ligula. Cras massa
                turpis, pretium nec placerat ornare, sodales ac urna. Sed
                commodo semper fermentum. Phasellus bibendum lorem nisi
                condimentum commodo semper fermentum. Phasellus bibendum lorem
                nisi condimentum commodo
              </p>
              <Link href="#">
                {" "}
                <button className="mt-1 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>

      {/* second Blog Section */}
      <div className="mt-20 grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {blogs?.blogs?.slice(4, blogs?.blogs.length).map((item, idx) => (
          <div key={idx} className="bg-secondary">
            <Image
              alt="Blog Image 1"
              height={500}
              width={500}
              src={item?.image}
              className="w-fit md:w-full h-80"
            />
            <div className="p-3">
              <h1 className="line-clamp-2  p-0 text-2xl font-semibold text-si-primary">
                {item?.title}
              </h1>
              <p className="my-2 line-clamp-3 text-justify font-medium text-si-text">
               {item?.description}
              </p>
              <Link href="#">
                {" "}
                <button className="mt-1 rounded-sm bg-[#fbbe24d3] p-1 px-3 font-semibold text-white">
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
