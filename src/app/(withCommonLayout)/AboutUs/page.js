import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";
import ContactUs from "../ContactUs/page";

const AboutUs = () => {
    return (
        <div >
            <div>
                <Image
                    src="https://i.postimg.cc/zBbKB4Gg/about-us-1.png"
                    alt="About Us Image"
                    width={500}
                    height={300}
                    className="w-full h-full"
                />

                <section className="mb-32 bg-secondary ">
                    <div className="max-w-6xl mx-auto py-10">
                        <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8">
                            About Us
                        </h1>
                        <p className="text-justify">
                            Twin Trade International had its humble beginning in 2000 with a start-up that was engaged in the trading business. The size, span, and activities were very limited. Over the years by dint of sheer hard work, commitment, and integrity towards contractual obligations, we have been able to create a niche market for our diverse business interests.
                        </p>
                        <p className="text-justify mt-3">
                            The Twin Trade International has become a conglomerate now. The span of business of the Group encompasses multifarious manufacturing, construction, trading, export, and import activities. It predominately focused on manufacturing medical devices and a wide array of specialized furniture for medical use including office and home decor. Twin Trade International Group has now 16 companies concentrated on healthcare, construction, pharmaceuticals, electronics, Agro-business, veterinary, fashion, and media. The Group is now a dominant player in the virgin field of medical device manufacturing in Bangladesh. Twin Trade International could boast of having a company – LD Veterinary Hospital which is the first of its kind in Bangladesh and exclusively caters to the medical care of animals that are now considered as companions. The Twin Trade International Group has state-of-the-art manufacturing facilities in all its concerns.
                        </p>
                        <p className="text-justify mt-3">
                            The Twin Trade International Group of companies through its quality products and unparalleled services has been able to establish itself as a brand that is recognized and well-known at home and abroad. The plant and factories of the aforesaid companies are of international standard and repute. Due to consistent striving for excellence in products and services, the companies of the group have been able to obtain and secure FDA, CE, ISO, FSC, BCSIR, DGDA, and GMP certifications.
                        </p>
                        <p className="text-justify mt-3">
                            As a leading conglomerate having over several BDT billion yearly turnover, it has been continually expanding its footprint in ever-increasing jurisdictions. It has now strategic partners and distribution networks in 60 countries for over 1000 products, and further spreading every year passes by. It has now an overseas office in the USA through which it oversees and looks after business in Pan America. This demonstrates the strength of the Group in business acumen and expertise.
                        </p>
                        <p className="text-justify mt-3">
                            Twin Trade International puts maximum emphasis on creativity and innovation. Accordingly, it has signed numerous memorandums of understanding with leading educational and research institutions at home and abroad. It has been actively engaged in research activities to provide quality goods and services to end users at affordable cost. As a leading group of companies in Bangladesh, Twin Trade International in harmony with the policy of the government to be a self-reliant nation devoted itself to manufacturing import substitution products and equipment thereby reducing the costs of products and services and saving precious foreign currency. The Group as a good corporate citizen always adheres to local and international standards in ensuring environmental sustainability and is mindful of rights and duties towards stakeholders.
                        </p>
                    </div>
                </section>
                {/* vision section */}
                <section className="my-32 bg-secondary">
                    <div className="max-w-6xl mx-auto">
                        <h1 className=" mx-auto text-3xl md:text-5xl font-semibold text-si-primary py-8 px-4">
                            About Vision
                        </h1>
                    </div>
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10  py-5">
                        <div className="flex-1  text-justify px-4">
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary">
                                Mission
                            </h1>
                            <p className="mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo aliquam error odio, voluptatibus distinctio fugiat. Dicta facilis perferendis repudiandae!
                            </p>
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary pt-4">
                                Vision
                            </h1>
                            <p className="mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo aliquam error odio, distinctio fugiat. Dicta facilis perferendis repudiandae!
                            </p>
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary pt-4">
                                Values
                            </h1>
                            <p className="mt-2 ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo odio. Dicta facilis perferendis repudiandae!
                            </p>
                        </div>

                        <div className="flex-1 flex justify-center text-justify order-first lg:order-last">
                            <Image
                                src="https://i.postimg.cc/s2XsprSv/sec-1.png"
                                alt="About Us Image"
                                width={500}
                                height={300}
                                className=" w-full h-auto object-cover rounded-none "
                            />
                        </div>
                    </div>
                </section>


                {/* about CEO section */}
                <section className="mb-10 bg-secondary">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8 px-4">
                            About CEO
                        </h1>
                    </div>
                    <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 px-4 py-5">

                        <div className="flex-1 flex justify-center text-justify ">
                            <Image
                                src="https://i.postimg.cc/Z56VVB8Q/ceo.jpg"
                                alt="About Us Image"
                                width={500}
                                height={300}
                                className=" w-full h-auto object-cover rounded-none "
                            />
                        </div>

                        <div className="flex-1 text-justify ">
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary pt-3">
                                Engr Sarwar Sumon
                            </h1>
                            <h2 className="font-medium ">CEO At Twin Trade Int..</h2>
                            <p className="mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo aliquam error odio,porro facilis, at eligendi in, sint aliquid nesciunt optio fuga aliquam a libero labore placeat! Quae excepturi expedita placeat at hic, aliquid maiores necessitatibus, a dolorem quo magnam error laudantium perferendis similique, doloribus sint rem? Ex esse temporibus corporis dolore, veniam totam sapiente, iste facere. Tenetur harum sint nesciunt deleniti saepe suscipit, ea asperiores facere laboriosam illo quaerat, iusto maxime cupiditate dolore reprehenderit quasi et nisi ab facilis maiores exercitationem? Minus provident, exercitationem eos culpa voluptatibus distinctio fugiat. Dicta facilis perferendis repudiandae!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ContactUs />
        </div>
    );
};

export default AboutUs;
