import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div>
            <div>
                <Image
                    src="https://i.postimg.cc/zBbKB4Gg/about-us-1.png"
                    alt="About Us Image"
                    width={500}
                    height={300}
                    className="w-full h-full"
                />

                <MaxWidthWrapper>
                    <h1 className="text-3xl md:text-5xl font-semibold text-si-primary py-8">
                        About Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam iure odit rerum minus maxime laboriosam asperiores ipsam reprehenderit, debitis deserunt quae. Adipisci, suscipit praesentium! Velit, placeat hic? Numquam consequuntur praesentium nihil tempore, dolore possimus assumenda aut ullam, corrupti voluptatem molestiae, ut accusantium! Maiores consectetur accusamus dolor molestiae magnam, nesciunt voluptatem eos, unde ea error dolore, fugit impedit cum! Reprehenderit nam, architecto ipsa nostrum aspernatur porro facilis, at eligendi in, sint aliquid nesciunt optio fuga aliquam a libero labore placeat! Quae excepturi expedita placeat at hic, aliquid maiores necessitatibus, a dolorem quo magnam error laudantium perferendis similique, doloribus sint rem? Ex esse dolorem consectetur molestias laboriosam corporis excepturi totam voluptate ipsum optio consequuntur expedita ad, dignissimos accusamus, maxime in recusandae suscipit inventore placeat asperiores cum. Dolore sed vitae provident et aspernatur error ipsam sit, rem autem obcaecati beatae nisi. Quis eius repudiandae libero enim odio dignissimos voluptatum atque debitis et minima ipsum ratione molestias ut totam, at voluptates. Minima, quasi quaerat cum sint dolorem aut reprehenderit necessitatibus maiores temporibus aliquid iusto recusandae tempore dolores repudiandae fuga quos a itaque cumque, quo ducimus, ullam blanditiis soluta? Maxime accusantium unde nobis eveniet iste voluptates illo fugit aut sed quibusdam quae, ut iusto id atque in ducimus. Repellendus, rem fugiat labore qui autem cumque amet animi numquam quisquam optio! Expedita inventore optio fuga, minima culpa sit! Earum, quod facilis. Voluptatem voluptas repellendus ducimus suscipit accusamus odit commodi temporibus corporis dolore, veniam totam sapiente, iste facere. Tenetur harum sint nesciunt deleniti saepe suscipit, ea asperiores facere laboriosam illo quaerat, iusto maxime cupiditate dolore reprehenderit quasi et nisi ab facilis maiores exercitationem? Minus provident, exercitationem eos culpa non aperiam expedita vero, qui, minima tempore aspernatur quas accusantium dignissimos voluptate neque eum explicabo reiciendis facilis aliquam ipsum modi quis. Laudantium inventore odio amet corrupti, asperiores molestias!
                    </p>
                    <section className="my-14 flex justify-between">
                        <div className="flex-1 p-8">
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary">
                                MISSION
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo aliquam error odio, voluptatibus distinctio fugiat. Dicta facilis perferendis repudiandae!
                            </p>
                            <h1 className="text-xl md:text-2xl font-semibold text-si-primary pt-4 ">
                                VISION
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo aliquam error odio, distinctio fugiat. Dicta facilis perferendis repudiandae!
                            </p>
                            <h1 className="text-xxl md:text-2xl font-semibold text-si-primary pt-4">
                                VALUS
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum nihil est quidem cumque! Mollitia illo odio. Dicta facilis perferendis repudiandae!
                            </p>
                        </div>

                        <div className="flex-1">
                            <Image
                                src="https://i.postimg.cc/s2XsprSv/sec-1.png"
                                alt="About Us Image"
                                width={500}
                                height={300}
                                className="w-full h-full"
                            />
                        </div>
                    </section>
                </MaxWidthWrapper>
            </div>
        </div>
    );
};

export default AboutUs;
