"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PiQuotes } from "react-icons/pi";

export default function Testimonials() {
  const companyQuotes = [
    {
      quote:
        "Working with this company has been transformative for our hospital. Their attention to detail and commitment to quality are unmatched.",
      quoter: "Dr. Ayesha Khan",
      date: "March, 2022",
    },
    {
      quote:
        "The medical equipment provided by this company is top-notch. Our operations have become smoother, and patient care has improved significantly.",
      quoter: "A K M Sakil Sagor",
      date: "May, 2022",
    },
    {
      quote:
        "From initial consultation to final delivery, this company exceeded our expectations. Their team is knowledgeable and highly professional.",
      quoter: "Golam Sarwar",
      date: "July, 2022",
    },
    {
      quote:
        "Building our new healthcare facility was a daunting task, but this company made it look easy. Their expertise in hospital construction is evident in every detail.",
      quoter: "Nafiul Islam",
      date: "September, 2022",
    },
    {
      quote:
        "Our office's efficiency has drastically improved thanks to the state-of-the-art equipment provided by this company. They truly understand our needs.",
      quoter: "Hosneara Parvin",
      date: "November, 2022",
    },
    {
      quote:
        "This company is a trusted partner in our growth. Their medical supplies are of the highest quality, and their service is unparalleled.",
      quoter: "Halima Tus Sadia",
      date: "January, 2023",
    },
    {
      quote:
        "Their innovative solutions in medical and office equipment have revolutionized our operations. We couldn't have asked for a better partner.",
      quoter: "Niloy Das",
      date: "April, 2023",
    },
    {
      quote:
        "The new hospital wing built by this company is not only functional but also aesthetically pleasing. Our staff and patients love the new space.",
      quoter: "Dr. Ahmed Siddiqui",
      date: "June, 2023",
    },
  ];

  return (
    <div className=" pb-10">
      <MaxWidthWrapper className="py-20 ">
      <SectionTitle title={"What Clients Say"} description={"Discover what our clients think about our services and how we've helped them achieve success."}></SectionTitle>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
      >
        <CarouselContent>
          {companyQuotes.map((quote, idx) => (
            <CarouselItem key={quote.date + idx} className="mx-auto max-w-2xl my-10 ">
              <Card className={` h-full py-10 bg-gradient-to-r from-gray-100  to-transparent mx-1`}>
                <CardHeader>
                <div className="bg-si-primary rounded-full p-3 w-max mx-auto">
                <PiQuotes className=" text-white  font-bold mx-auto" size={25} />
                </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-center">{quote.quote}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 overflow-hidden text-nowrap justify-center">
                  <h5 className="font-medium">- {quote.quoter}</h5>
                  <span>|</span>
                  <p className="">{quote.date}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </MaxWidthWrapper>
    </div>
  );
}
