import ContactDialog from "@/components/contactDialog/ContactDialog";
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
import { ArrowDownToLineIcon } from "lucide-react";
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

      <Card className="mt-5 min-h-[600px] rounded-none border-none shadow-none">
        <CardContent className="flex flex-col gap-5">
         <div>
         <section className="md:w-1/2 float-left  ">
            <ProductImageCarousel images={product?.images || []} />
          </section>

          <section className="w-full p-5">
            <h2 className="text-2xl font-bold lg:text-3xl ">
              {product?.productName}
            </h2>
            <p className="my-2 mb-5">
              <span className="font-semibold ">Model No: </span>
              {product?.modelNumber}
            </p>
            <p className="whitespace-break-spaces">{product?.shortDescription}</p>

           

            <div className="mt-5 flex flex-wrap items-center gap-5">
              {/* <Button className="">
                Download Catalogue{" "}
                <ArrowDownToLineIcon className="ml-2 size-5" />
              </Button> */}

              <ContactDialog />
            </div>
          </section>
         </div>

          <div className="mt-5 space-y-1 overflow-x-scroll">
              <h4 className="text-lg font-bold">Product Details</h4>
              <Markdown
                className="prose max-w-none whitespace-nowrap"
                remarkPlugins={[remarkGfm]}
              >
                {product?.description}
              </Markdown>
            </div>
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default HospitalFurnitureDetailsPage;
