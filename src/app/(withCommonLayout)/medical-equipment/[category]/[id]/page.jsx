import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const MedicalEquipmentDetailsPage = ({ params }) => {
  // TODO: Fetch individual Data based on the id
  // TODO: Turn The image section into a carousel
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper className="py-10">
        <Card className="rounded-none">
          <CardContent className="flex flex-col p-0">
            <section className="w-full h-full">
              <div className="relative mx-auto min-h-[500px] w-full">
                <Image
                  src="/martha-dominguez-de-gouveia-KF-h9HMxRKg-unsplash.jpg"
                  alt="Hospital Bed"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            <section className="w-full px-2.5 py-5">
              <h2 className="text-2xl font-semibold">Advanced Hospital Bed</h2>
              <p className="mt-4 text-gray-600">
                This state-of-the-art hospital bed offers exceptional comfort
                and care for patients. Equipped with adjustable sections for the
                head, foot, and overall height, it allows for easy positioning
                and enhanced patient safety. The bed includes side rails and a
                user-friendly remote control, ensuring both comfort and
                convenience for patients and caregivers. Built with high-quality
                materials, this bed is durable and designed to meet the demands
                of any healthcare environment.
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <strong>Product Id:</strong> {params.id}
                </li>
                <li>
                  <strong>Material:</strong> Stainless steel and high-density
                  foam
                </li>
                <li>
                  <strong>Color:</strong> White and blue
                </li>
                <li>
                  <strong>Weight Capacity:</strong> 450 lbs
                </li>
                <li>
                  <strong>Dimensions:</strong> 80 L x 36 W x 22-30 H (adjustable
                  height)
                </li>
                <li>
                  <strong>Features:</strong> Electric height adjustment, side
                  rails, remote control
                </li>
                <li>
                  <strong>Warranty:</strong> 5 years
                </li>
              </ul>

              <Button className="mt-5">Contact For Price</Button>
            </section>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default MedicalEquipmentDetailsPage;
