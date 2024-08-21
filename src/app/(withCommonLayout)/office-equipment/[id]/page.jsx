import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const OfficeEqipmentDetailsPage = async ({ params }) => {
  const data = await fetch(
    `http://localhost:5000/api/v1/officeEquipment/${params?.id}`,
  ).then((res) => res.json());

  const product = data?.data || {};

  return (
    <MaxWidthWrapper className="min-h-screen py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/office-equipment">Office Equipment</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.productName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mt-5 rounded-none">
        <CardContent className="flex flex-col gap-0 p-0 lg:flex-row lg:gap-5">
          <section className="w-full lg:w-1/2">
            <div className="relative mx-auto min-h-[500px] w-full">
              <Image
                src={product?.images[0] || ""}
                alt={product?.productName || "Product Image"}
                fill
                className="object-cover object-center"
              />
            </div>
          </section>

          <section className="w-full p-5 lg:w-1/2">
            <h2 className="text-2xl font-semibold">{product?.productName}</h2>
            <p className="">
              <span className="font-semibold">Model No:</span>{" "}
              {product?.modelNumber}
            </p>
            <p className="">{product?.shortDescription}</p>

            <div className="mt-5 space-y-1">
              <h4 className="font-bold">Product Details</h4>
              <Markdown className="prose" remarkPlugins={[remarkGfm]}>
                {product?.description}
              </Markdown>
            </div>

            <Button className="mt-5">Contact For Price</Button>
          </section>
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default OfficeEqipmentDetailsPage;
