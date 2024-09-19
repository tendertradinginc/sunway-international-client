import ContactDialog from "@/components/contactDialog/ContactDialog";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
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
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { ArrowDownToLineIcon } from "lucide-react";
// import { ArrowDownToLineIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MedicalEquipmentDetailsPage = async ({ params }) => {
  const data = await fetch(
    `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/${params?.id}`,
  ).then((res) => res.json());
  const product = data?.data || {};

  return (
    <div className="mt-16 min-h-screen">
      <PageBanner title="Medical Supplies" banner="https://i.postimg.cc/c4fGqpTc/Downloader-La-463487-1.png" description={<> <Breadcrumb className="flex justify-center mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/medical-equipment">Medical Equipment</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {product?.productName || "Product Details"}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb></>} />

      <MaxWidthWrapper className="py-10">
        <Card className="rounded-none border-none shadow-none">
          <CardContent>
            <div className="my-10 grid grid-cols-1 p-0 lg:grid-cols-2">
              {" "}
              <div className="flex-1 ">
                <ProductImageCarousel images={product?.images || []} />
              </div>{" "}
              <section className="m-0 h-full flex-1  lg:px-5 flex flex-col">
                <h2 className="text-2xl font-bold lg:text-3xl ">
                  {product?.productName}
                </h2>

                <div className=" mt-8 grid  break-all text-foreground flex-grow">
                 <div className="space-y-2">
                 <p>
                    <span className="font-bold">Unique ID:</span>{" "}
                    {product?.uniqueId}
                  </p>
                  <p>
                    <span className="font-bold">Model:</span> {product?.model}
                  </p>
                  <p>
                    <span className="font-bold">Category:</span>{" "}
                    {product?.category}
                  </p>
                  {product?.serialNumber && (
                    <p>
                      <span className="font-bold">Serial Number:</span>{" "}
                      {product?.serialNumber}
                    </p>
                  )}
                  {product?.manufacturer && (
                    <p>
                      <span className="font-bold">Manufacturer:</span>{" "}
                      {product?.manufacturer}
                    </p>
                  )}
                  {product?.regulatoryApproval && (
                    <p>
                      <span className="font-bold">Regulatory Approval:</span>{" "}
                      {product?.regulatoryApproval}
                    </p>
                  )}
                  {product?.maintenanceSchedule && (
                    <p>
                      <span className="font-bold">Maintenance Schedule:</span>{" "}
                      {product?.maintenanceSchedule}
                    </p>
                  )}
                  {product?.dateOfManufacture && (
                    <p>
                      <span className="font-bold">Date of Manufacture:</span>{" "}
                      {format(product?.dateOfManufacture, "dd MMM, yyyy")}
                    </p>
                  )}
                  {product?.warrantyPeriod && (
                    <p>
                      <span className="font-bold">Warranty Period:</span>{" "}
                      {product?.warrantyPeriod}
                    </p>
                  )}
                 </div>
                  
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Button className="">
                    Download Catalogue{" "}
                    <ArrowDownToLineIcon className="ml-2 size-5" />
                  </Button>

                  <ContactDialog />
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        {product?.shortDescription && (
                  <p>
                    <span className="font-bold">Introduction</span>{" "}
                    {product?.shortDescription}
                  </p>
                )}

        <Markdown
          className="prose max-w-none whitespace-normal break-words mt-5"
          remarkPlugins={[remarkGfm]}
        >
          {product?.description}
        </Markdown>

        <ScrollArea className="mx-auto mt-12 max-w-[1300px] whitespace-nowrap rounded-md border ">
          {product?.productTable && (
            <Markdown
              className="prose whitespace-nowrap p-2"
              remarkPlugins={[remarkGfm]}
            >
              {product?.productTable}
            </Markdown>
          )}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </MaxWidthWrapper>
    </div>
  );
};

export default MedicalEquipmentDetailsPage;
