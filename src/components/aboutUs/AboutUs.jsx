"use client";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div>
        <Image
          loader={customLoader}
          src="https://i.postimg.cc/zBbKB4Gg/about-us-1.png"
          alt="About Us Image"
          width={500}
          height={300}
          className="h-full w-full"
        />

        <section className="mb-32 bg-secondary">
          <div className="mx-auto max-w-6xl py-10">
            <h1 className="py-8 text-3xl font-semibold text-si-primary md:text-5xl">
              About Us
            </h1>
            <p className="text-justify">
              Twin Trade International had its humble beginning in 2000 with a
              start-up that was engaged in the trading business. The size, span,
              and activities were very limited. Over the years by dint of sheer
              hard work, commitment, and integrity towards contractual
              obligations, we have been able to create a niche market for our
              diverse business interests.
            </p>
            <p className="mt-3 text-justify">
              The Twin Trade International has become a conglomerate now. The
              span of business of the Group encompasses multifarious
              manufacturing, construction, trading, export, and import
              activities. It predominately focused on manufacturing medical
              devices and a wide array of specialized furniture for medical use
              including office and home decor. Twin Trade International Group
              has now 16 companies concentrated on healthcare, construction,
              pharmaceuticals, electronics, Agro-business, veterinary, fashion,
              and media. The Group is now a dominant player in the virgin field
              of medical device manufacturing in Bangladesh. Twin Trade
              International could boast of having a company – LD Veterinary
              Hospital which is the first of its kind in Bangladesh and
              exclusively caters to the medical care of animals that are now
              considered as companions. The Twin Trade International Group has
              state-of-the-art manufacturing facilities in all its concerns.
            </p>
            <p className="mt-3 text-justify">
              The Twin Trade International Group of companies through its
              quality products and unparalleled services has been able to
              establish itself as a brand that is recognized and well-known at
              home and abroad. The plant and factories of the aforesaid
              companies are of international standard and repute. Due to
              consistent striving for excellence in products and services, the
              companies of the group have been able to obtain and secure FDA,
              CE, ISO, FSC, BCSIR, DGDA, and GMP certifications.
            </p>
            <p className="mt-3 text-justify">
              As a leading conglomerate having over several BDT billion yearly
              turnover, it has been continually expanding its footprint in
              ever-increasing jurisdictions. It has now strategic partners and
              distribution networks in 60 countries for over 1000 products, and
              further spreading every year passes by. It has now an overseas
              office in the USA through which it oversees and looks after
              business in Pan America. This demonstrates the strength of the
              Group in business acumen and expertise.
            </p>
            <p className="mt-3 text-justify">
              Twin Trade International puts maximum emphasis on creativity and
              innovation. Accordingly, it has signed numerous memorandums of
              understanding with leading educational and research institutions
              at home and abroad. It has been actively engaged in research
              activities to provide quality goods and services to end users at
              affordable cost. As a leading group of companies in Bangladesh,
              Twin Trade International in harmony with the policy of the
              government to be a self-reliant nation devoted itself to
              manufacturing import substitution products and equipment thereby
              reducing the costs of products and services and saving precious
              foreign currency. The Group as a good corporate citizen always
              adheres to local and international standards in ensuring
              environmental sustainability and is mindful of rights and duties
              towards stakeholders.
            </p>
          </div>
        </section>
        {/* vision section */}
        <section className="my-32 bg-secondary">
          <div className="mx-auto max-w-6xl">
            <h1 className="mx-auto px-4 py-8 text-3xl font-semibold text-si-primary md:text-5xl">
              About Vision
            </h1>
          </div>
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 py-5 lg:flex-row lg:gap-10">
            <div className="flex-1 px-4 text-justify">
              <h1 className="text-xl font-semibold text-si-primary md:text-2xl">
                Mission
              </h1>
              <p className="mt-2">
                Elevating standards with top-tier products and
                services—universally embraced and accessible. Setting the
                benchmark for excellence in affordability.
              </p>
              <h1 className="pt-4 text-xl font-semibold text-si-primary md:text-2xl">
                Vision
              </h1>
              <p className="mt-2">
                Striving to be the forefront authority in global healthcare
                solutions – setting new standards in products and services.
              </p>
              <h1 className="pt-4 text-xl font-semibold text-si-primary md:text-2xl">
                Strategy
              </h1>
              <p className="mt-2">
                Striving for continuous improvement in product quality and
                innovation through better services.
              </p>
              <h1 className="pt-4 text-xl font-semibold text-si-primary md:text-2xl">
                Goals
              </h1>
              <p className="mt-2">
                Designing, developing, and marketing proprietary products and
                services employing, exploiting, and harnessing advanced and
                state-of-the-art technological solutions.
              </p>
            </div>

            <div className="order-first flex flex-1 justify-center text-justify lg:order-last">
              <Image
                loader={customLoader}
                src="https://i.postimg.cc/s2XsprSv/sec-1.png"
                alt="About Us Image"
                width={500}
                height={300}
                className="h-auto w-full rounded-none object-cover"
              />
            </div>
          </div>
        </section>

        {/* about CEO section */}
        <section className="mb-10 bg-secondary">
          <div className="mx-auto max-w-6xl">
            <h1 className="px-4 py-8 text-3xl font-semibold text-si-primary md:text-5xl">
              About CEO
            </h1>
          </div>
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-4 py-5 lg:flex-row lg:gap-10">
            <div className="flex flex-1 justify-center text-justify">
              <Image
                loader={customLoader}
                src="https://i.postimg.cc/Z56VVB8Q/ceo.jpg"
                alt="About Us Image"
                width={500}
                height={300}
                className="h-auto w-full rounded-none object-cover"
              />
            </div>

            <div className="flex-1 text-justify">
              <h1 className="pt-3 text-xl font-semibold text-si-primary md:text-2xl">
                Engr Sarwar Sumon
              </h1>
              <h2 className="font-medium">CEO At Twin Trade Int..</h2>
              <p className="mt-4">
                With a modest beginning in the trade and business in 2000, Twin
                Trade International has transformed itself into a conglomerate
                boasting 14 companies within its fold over time. These companies
                are now engaged in diverse areas of business, commerce, and
                industries. Twin Trade International has been consistently
                striving hard to become the market leader in hospital furniture,
                medical devices, pharmaceutical, agro-business, veterinary,
                fashion, furniture, engineering, and media industries. Indeed,
                in some of the areas, it acted as the pioneer and prime mover
                and is recognized as the leading brand. It excelled in quality,
                services, and commitment towards the stakeholders, and obtained
                and secured ISO, CE, and FDA certifications for its concerns. It
                tirelessly strived to equip a new breed of entrepreneurs in the
                import substitution medical equipment and devices sector. It
                played catalytic roles and worked with the government in
                recognizing and including medical device manufacturing in the
                National Industrial Policy 2022.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
