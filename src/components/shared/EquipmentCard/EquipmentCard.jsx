import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const EquipmentCard = ({ navigateTo = "", data }) => {

  return (
    <div className="min-h-[400px] bg-background">
      <div className="relative mx-auto h-[250px] w-full">
        <Image
          src={data ? data?.images[0] : ""}
          alt={data?.productName || "Product"}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="text-balance px-2.5 py-3 text-left">
        <h3 className="line-clamp-1 text-lg font-bold">{data?.productName}</h3>

        <p className="mx-auto my-2 line-clamp-2 text-wrap text-sm text-muted-foreground">
          {data?.shortDescription}
        </p>
        <Button asChild variant="custom">
          <Link href={navigateTo}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default EquipmentCard;
