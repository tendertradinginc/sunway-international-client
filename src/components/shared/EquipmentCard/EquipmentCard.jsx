import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const EquipmentCard = ({ navigateTo = "", data }) => {


  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-grow text-center">
        <Image
          src={data.images[0]}
          alt={data.name}
          width={200}
          height={200}
          className="mb-4 h-auto w-full object-contain"
        />
        <CardTitle className="break-words text-lg font-semibold">
          {data.productName}
        </CardTitle>
        <p className="break-words font-medium">
          Model: {data && (data?.model || data?.modelNumber)}
        </p>
      </CardHeader>

      <CardFooter className="mt-auto">
        <Button
          className="mx-auto hover:bg-si-primary hover:text-white"
          variant="seeThrough"
          asChild
        >
          <Link href={navigateTo}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EquipmentCard;
