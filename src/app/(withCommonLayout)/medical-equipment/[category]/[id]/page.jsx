import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ProductImageCarousel from "@/components/shared/productImageCarousel/ProductImageCarousel";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MedicalEquipmentDetailsPage = async ({ params }) => {
  const data = await fetch(
    `http://localhost:5000/api/v1/medicalEquipment/${params?.id}`,
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
      </Breadcrumb>

      <div className="py-10">
        <Card className="rounded-none">
          <CardContent className="flex flex-col p-0">
            <div className="h-full w-full">
              <ProductImageCarousel images={product?.images || []} />
            </div>

            <section className="w-full px-2.5 py-5">
              <h2 className="text-2xl font-bold lg:text-3xl">
                {product?.productName}
              </h2>

              <div className="mt-4 space-y-2 text-foreground">
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
                    {new Date(product?.dateOfManufacture).toLocaleDateString()}
                  </p>
                )}
                {product?.warrantyPeriod && (
                  <p>
                    <span className="font-bold">Warranty Period:</span>{" "}
                    {product?.warrantyPeriod}
                  </p>
                )}
                {product?.shortDescription && (
                  <p>
                    <span className="font-bold">Short Description:</span>{" "}
                    {product?.shortDescription}
                  </p>
                )}
              </div>

              <Markdown className="prose w-full" remarkPlugins={[remarkGfm]}>
                {product?.description}
              </Markdown>

              <Button className="mt-5">Contact For Price</Button>
            </section>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default MedicalEquipmentDetailsPage;
