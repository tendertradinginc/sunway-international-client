import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProductImageCarousel from "@/components/shared/productImageCarousel/ProductImageCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownToLineIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const HospitalFurnitureDetailsPage = async ({ params }) => {
  const data = await fetch(
    `https://sunway-international-server.vercel.app/api/v1/officeEquipment/${params?.id}`,
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
              <Link href="/hospital-furniture">Hospital Furniture</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.productName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mt-5 min-h-[600px] rounded-none">
        <CardContent className="flex flex-col gap-5">
          <section className="w-full">
            <ProductImageCarousel images={product?.images || []} />
          </section>

          <section className="w-full p-5">
            <h2 className="text-2xl font-bold lg:text-3xl">
              {product?.productName}
            </h2>
            <p className="my-2">
              <span className="font-semibold">Model No: </span>
              {product?.modelNumber}
            </p>
            <p className="">{product?.shortDescription}</p>

            <div className="mt-5 space-y-1">
              <h4 className="font-bold text-lg">Product Details</h4>
              <Markdown
                className="prose max-w-none whitespace-normal break-words"
                remarkPlugins={[remarkGfm]}
              >
                {product?.description}
              </Markdown>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <Button className="mt-5">
                Contact For Price <PhoneIcon className="ml-2 size-5" />
              </Button>
              <Button className="mt-5">
                Download Catalogue{" "}
                <ArrowDownToLineIcon className="ml-2 size-5" />
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default HospitalFurnitureDetailsPage;
