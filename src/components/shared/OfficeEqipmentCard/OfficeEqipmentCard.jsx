import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const OfficeEqipmentCard = ({ id }) => {
  // TODO2: Make the call for button copy a number and show toast
  return (
    <div className="h-[400px]">
      <div className="relative mx-auto h-[250px] w-[90%]">
        <Image
          src="/adolfo-felix-PG8NyM_Mcts-unsplash.jpg"
          alt="product name"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="text-balance pt-3 text-center">
        <Link href={`/office-equipment/${id}`}>
          <h3 className="text-lg font-semibold hover:underline">
            Product Name
          </h3>
        </Link>
        <p className="mx-auto max-w-[75%] text-sm text-muted-foreground">
          Short Description: Lorem ipsum dolor sit amet.
        </p>
        <Button variant="link">Call For Price</Button>
      </div>
    </div>
  );
};

export default OfficeEqipmentCard;
