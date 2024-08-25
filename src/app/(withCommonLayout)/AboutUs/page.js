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

                <MaxWidthWrapper className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8">
                        About Us
                    </h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam iure odit rerum minus maxime laboriosam asperiores ipsam reprehenderit, debitis deserunt quae. Adipisci, suscipit praesentium! Velit, placeat hic? Numquam consequuntur praesentium nihil tempore, dolore possimus assumenda aut ullam, corrupti voluptatem molestiae, ut accusantium! Maiores consectetur accusamus dolor molestiae magnam, nesciunt voluptatem eos, unde ea error dolore, fugit impedit cum! Reprehenderit nam, architecto ipsa nostrum aspernatur porro facilis, at eligendi in, sint aliquid nesciunt optio fuga aliquam a libero labore placeat! Quae excepturi expedita placeat at hic, aliquid maiores necessitatibus, a dolorem quo magnam error laudantium perferendis similique, doloribus sint rem? Ex esse temporibus corporis dolore, veniam totam sapiente, iste facere. Tenetur harum sint nesciunt deleniti saepe suscipit, ea asperiores facere laboriosam illo quaerat, iusto maxime cupiditate dolore reprehenderit quasi et nisi ab facilis maiores exercitationem? Minus provident, exercitationem eos culpa non aperiam expedita vero, qui, minima tempore aspernatur quas accusantium dignissimos voluptate neque eum explicabo reiciendis facilis aliquam ipsum modi quis. Laudantium inventore odio amet corrupti, asperiores molestias!
                    </p>
                </MaxWidthWrapper>
                {/* vision section */}
                <section className="my-10 bg-secondary">
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
                <section className="mb-10">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8 px-4">
                            About CEO
                        </h1>
                    </div>
                    <div className="bg-secondary">
                        <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 px-4 bg-secondary py-5">

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
                    </div>
                </section>


                {/* about CEO section */}
                {/* <section className="mb-10">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8 px-4">
                            About CEO
                        </h1>
                    </div>
                    <div className="bg-secondary">
                        <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 px-4 bg-secondary py-5">

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
                    </div>
                </section> */}
            </div>

            <ContactUs />
        </div>
    );
};

export default AboutUs;
