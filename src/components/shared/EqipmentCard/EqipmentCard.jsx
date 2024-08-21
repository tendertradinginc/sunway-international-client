import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const EqipmentCard = ({ navigateTo = "", data }) => {
  console.log("Equipment card: ", data);
  // TODO2: Make the call for button copy a number and show toast
  return (
    <div className="h-[400px]">
      <div className="relative mx-auto h-[250px] w-[90%]">
        <Image
          src={data ? data?.images[0] : ""}
          alt="product name"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="text-balance pt-3 text-center">
        <Link href={navigateTo}>
          <h3 className="text-lg font-semibold hover:underline">
            {data?.productName}
          </h3>
        </Link>
        <p className="mx-auto max-w-[75%] text-sm text-muted-foreground">
          {data?.shortDescription}
        </p>
        <Button variant="link">Call For Price</Button>
      </div>
    </div>
  );
};

export default EqipmentCard;
