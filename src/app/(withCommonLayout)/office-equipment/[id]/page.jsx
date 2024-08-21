import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const OfficeEqipmentDetailsPage = ({ params }) => {
  // TODO: Fetch individual Data based on the id
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper className="py-10">
        <Card className="rounded-none">
          <CardContent className="flex flex-col gap-0 p-0 lg:flex-row lg:gap-5">
            <section className="w-full lg:w-1/2">
              <div className="relative mx-auto min-h-[500px] w-full">
                <Image
                  src="/adolfo-felix-PG8NyM_Mcts-unsplash.jpg"
                  alt="Ergonomic Office Chair"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            <section className="w-full px-2.5 py-5 lg:w-1/2">
              <h2 className="text-2xl font-semibold">Ergonomic Office Chair</h2>
              <p className="mt-4 text-gray-600">
                This ergonomic office chair is designed to provide maximum
                comfort during long work hours. The chair features adjustable
                height, lumbar support, and a breathable mesh back that keeps
                you cool throughout the day.
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <strong>Product Id:</strong> {params.id}
                </li>
                <li>
                  <strong>Material:</strong> Mesh and foam
                </li>
                <li>
                  <strong>Color:</strong> Black
                </li>
                <li>
                  <strong>Weight Capacity:</strong> 300 lbs
                </li>
                <li>
                  <strong>Dimensions:</strong> 24 W x 24 D x 44 H
                </li>
                <li>
                  <strong>Adjustability:</strong> Height, tilt, and armrests
                </li>
                <li>
                  <strong>Warranty:</strong> 2 years
                </li>
              </ul>

              <Button className="mt-5">
                Contact For Price
              </Button>
            </section>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default OfficeEqipmentDetailsPage;
