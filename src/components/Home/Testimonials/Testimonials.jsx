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
      quoter: "John Smith",
      date: "May, 2022",
    },
    {
      quote:
        "From initial consultation to final delivery, this company exceeded our expectations. Their team is knowledgeable and highly professional.",
      quoter: "Sarah Johnson",
      date: "July, 2022",
    },
    {
      quote:
        "Building our new healthcare facility was a daunting task, but this company made it look easy. Their expertise in hospital construction is evident in every detail.",
      quoter: "Michael Lee",
      date: "September, 2022",
    },
    {
      quote:
        "Our office's efficiency has drastically improved thanks to the state-of-the-art equipment provided by this company. They truly understand our needs.",
      quoter: "Emily Davis",
      date: "November, 2022",
    },
    {
      quote:
        "This company is a trusted partner in our growth. Their medical supplies are of the highest quality, and their service is unparalleled.",
      quoter: "Dr. Robert Patel",
      date: "January, 2023",
    },
    {
      quote:
        "Their innovative solutions in medical and office equipment have revolutionized our operations. We couldn't have asked for a better partner.",
      quoter: "Karen Wong",
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
    <MaxWidthWrapper className="py-16">
      <SectionTitle title1={"Customer"} title2={"Reviews"}></SectionTitle>
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
            <CarouselItem key={quote.date + idx} className="mx-auto max-w-2xl">
              <Card>
                <CardHeader>
                  <PiQuotes size={50} />
                </CardHeader>
                <CardContent>
                  <p>{quote.quote}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 overflow-hidden text-nowrap">
                  <h5 className="font-medium">- {quote.quoter}</h5>
                  <span>|</span>
                  <p>{quote.date}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </MaxWidthWrapper>
  );
}
