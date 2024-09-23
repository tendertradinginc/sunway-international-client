"use client";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import PageBanner from "../shared/PageBanner/PageBanner";

const AboutUs = () => {
  return (
    <div>
      <div>
        <PageBanner
          title={"About Us"}
          description={
            "Twin Trade International aims to create spaces that heal, supply tools that cure as we deliver excellence to your doorstep"
          }
          banner={"https://i.postimg.cc/c4fGqpTc/Downloader-La-463487-1.png"}
        ></PageBanner>
      </div>

      <div>
        {/* about our team section */}
        <section className="lg:my-10">
          <div className="mx-auto max-w-6xl lg:py-8"></div>
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 py-5 lg:flex-row lg:gap-16">
            <div className="order-first flex flex-1 justify-center text-justify">
              <Image
                src="https://i.postimg.cc/Xv2MWhq1/Downloader-La-288044.png"
                alt="About Us Image"
                width={500}
                height={300}
                loader={customLoader}
                className="h-auto w-full rounded-none object-cover"
              />
            </div>

            <div className="flex-1 px-4 text-justify">
              <h1 className="text-xl font-bold text-si-primary lg:text-3xl">
                About Our Team
              </h1>
              <p className="mt-6">
                Twin Trade International had its humble beginning in 2000 with a
                start-up that was engaged in the trading business. The size,
                span, and activities were very limited.
              </p>
              <p className="mt-6">
                Over the years by dint of sheer hard work, commitment, and
                integrity towards contractual obligations, we have been able to
                create a niche market for our diverse business interests.
              </p>
              <p className="mt-6">
                Twin Trade International puts maximum emphasis on creativity and
                innovation. Accordingly, it has signed numerous memorandums of
                understanding with leading educational and research institutions
                at home and abroad.
              </p>
            </div>
          </div>
        </section>

        {/* vision section */}
        <section className="bg-[#F6F6F6] pb-6">
          <div className="mx-auto max-w-5xl py-5">
            <div className="flex-1 px-4 text-justify">
              <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row">
                <div>
                  <Image
                    src="https://i.postimg.cc/GmN1ZVfL/Group.png"
                    alt="mission"
                    width={500}
                    height={300}
                    loader={customLoader}
                    className="h-auto w-28 rounded-none"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-si-primary md:text-2xl">
                    Our Mission
                  </h1>
                  <p className="mt-2">
                    Elevating standards with top-tier products and
                    services—universally embraced and accessible. Setting the
                    benchmark for excellence in affordability.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row">
                <div>
                  <Image
                    src="https://i.postimg.cc/zvJmCryj/Group-2.png"
                    alt="vision"
                    width={500}
                    height={300}
                    loader={customLoader}
                    className="h-auto w-24 rounded-none"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-si-primary md:text-2xl">
                    Our Vision
                  </h1>
                  <p className="mt-2">
                    Striving to be the forefront authority in global healthcare
                    solutions – setting new standards in products and services.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row">
                <div>
                  <Image
                    src="https://i.postimg.cc/FsR8NG37/Group-1.png"
                    alt="goals"
                    width={500}
                    height={300}
                    loader={customLoader}
                    className="h-auto w-20 rounded-none"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-si-primary md:text-2xl">
                    Our Strategy
                  </h1>
                  <p className="mt-2">
                    Striving for continuous improvement in product quality and
                    innovation through better services.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row">
                <div>
                  <Image
                    src="https://i.postimg.cc/yNFrvG4r/Group-3.png"
                    alt="goals"
                    width={500}
                    height={300}
                    loader={customLoader}
                    className="h-auto w-28 rounded-none"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-si-primary md:text-2xl">
                    Our Goals
                  </h1>
                  <p className="mt-2">
                    Designing, developing, and marketing proprietary products
                    and services employing, exploiting, and harnessing advanced
                    and state-of-the-art technological solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about CEO section */}
        <section className="my-16">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-4 py-5 lg:flex-row lg:gap-10">
            <div className="flex-1 text-justify">
              <Image
                loader={customLoader}
                src="https://i.postimg.cc/26cJFk8r/Whats-App-Image-2024-09-07-at-4-33-35-PM.jpg"
                alt="About Us Image"
                width={500}
                height={300}
                className="h-auto w-full rounded-none object-cover shadow-md"
              />
              <div className="relative z-10 mx-auto -mt-8 w-max bg-white p-2">
                <h1 className="text-center text-xl font-semibold text-si-primary md:text-xl">
                  Mohammad A K Mozumder
                </h1>
                <h2 className="text-sm font-medium">
                  Managing Partner At Twin Trade International
                </h2>
              </div>
            </div>

            <div className="flex-1 text-justify">
              <h1 className="text-xl font-bold text-si-primary md:text-3xl">
                Managing Partner
              </h1>

              <p className="mt-4">
                With a modest beginning in the trade and business in 2000, Twin
                Trade International has transformed itself into a conglomerate
                boasting 14 companies within its fold over time. <br /> <br />{" "}
                These companies are now engaged in diverse areas of business,
                commerce, and industries. Twin Trade International has been
                consistently striving hard to become the market leader in
                hospital furniture, medical devices, pharmaceutical,
                agro-business, veterinary, fashion, furniture, engineering, and
                media industries.
                <br /> <br /> Indeed, in some of the areas, it acted as the
                pioneer and prime mover and is recognized as the leading brand.
                It excelled in quality, services, and commitment towards the
                stakeholders, and obtained and secured ISO, CE, and FDA
                certifications for its concerns. <br />
                <br /> It tirelessly strived to equip a new breed of
                entrepreneurs in the import substitution medical equipment and
                devices sector.
                <br />
                <br /> It played catalytic roles and worked with the government
                in recognizing and including medical device manufacturing in the
                National Industrial Policy 2022.
              </p>
            </div>
          </div>
        </section>

        {/* about partner section */}
        <section className="my-16">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-4 py-5 lg:flex-row lg:gap-10">
            <div className="flex flex-1 flex-col items-start justify-center text-justify">
              <h1 className="text-xl font-bold text-si-primary md:text-3xl">
                Managing Partner
              </h1>

              <p className="mt-4">
                With a modest beginning in the trade and business in 2000, Twin
                Trade International has transformed itself into a conglomerate
                boasting 14 companies within its fold over time. These companies
                are now engaged in diverse areas of business, commerce, and
                industries. Twin Trade International has been consistently
                striving hard to become the market leader in hospital furniture,
                medical devices, pharmaceutical, agro-business, veterinary,
                fashion, furniture, engineering, and media industries.
              </p>
            </div>

            <div className="order-first flex flex-1 flex-col justify-center text-justify lg:order-last">
              <Image
                loader={customLoader}
                src="https://i.postimg.cc/W15V5SJT/Whats-App-Image-2024-09-09-at-12-50-39-PM.jpg"
                alt="About Us Image"
                width={500}
                height={300}
                className="h-auto w-full rounded-none object-cover shadow-md"
              />
              <div className="relative z-10 mx-auto -mt-8 w-max bg-white p-2">
                <h1 className="text-center text-xl font-semibold text-si-primary md:text-xl">
                  Delwar Hossain
                </h1>
                <h2 className="text-sm font-medium">
                  Partner At Twin Trade International
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
