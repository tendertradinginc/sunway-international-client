import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { customLoader } from "@/utils/customLoader";
import { numberSerial } from "@/utils/indexNumber";
import axios from "axios";
import { format } from "date-fns";
import { Archive, Eye, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

const MedicalEquipmentTableRow = ({ data, index, setReload, page, limit }) => {
  const {
    _id,
    uniqueId,
    productName,
    model,
    category,
    images,
    shortDescription,
    description,
    productTable,
    serialNumber,
    manufacturer,
    regulatoryApproval,
    maintenanceSchedule,
    dateOfManufacture,
    warrantyPeriod,
  } = data;

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/${id}`,
      );
      setReload(true);
      toast.success("Product Deleted Successfully!");
    } catch (error) {
      toast.error("Failed to delete the item. Try again later.");
      console.error("Failed to delete the item:", error);
    }
  };

  const handleArchive = async (id) => {
    try {
      await axios.put(
        `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/${id}`,
        {
          archived: true,
        },
      );
      setReload(true);
      toast.success("Product Archived Successfully!");
    } catch (error) {
      toast.error("Failed to archive the item. Try again later.");
      console.error("Failed to archive the item:", error);
    }
  };

  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">
        {" "}
        {numberSerial(parseInt(index), limit, page)}
      </td>
      <td className="px-4 py-1 text-left font-semibold">{uniqueId}</td>
      <td className="px-4 py-1 text-left font-semibold">{productName}</td>
      <td className="px-4 py-1 text-left font-semibold">{model}</td>
      <td className="px-4 py-1 text-left font-semibold">{category}</td>

      <td className="space-x-3 md:px-4">
        {/* Preview Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:text-blue-500">
              <Eye className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ScrollArea className="h-[500px]">
              <div className="mt-5">
                <h2 className="text-2xl font-semibold">{productName}</h2>
                <p>
                  <span className="font-semibold">Model No:</span> {model}
                </p>
                <p>
                  <span className="font-semibold">Serial Number:</span>{" "}
                  {serialNumber}
                </p>
                <p>
                  <span className="font-semibold">Manufacturer:</span>{" "}
                  {manufacturer}
                </p>
                <p>
                  <span className="font-semibold">Regulatory Approval:</span>{" "}
                  {regulatoryApproval}
                </p>
                <p>
                  <span className="font-semibold">Maintenance Schedule:</span>{" "}
                  {maintenanceSchedule}
                </p>
                <p>
                  <span className="font-semibold">Date of Manufacture:</span>{" "}
                  {format(dateOfManufacture, "dd MMM, yyyy")}
                </p>
                <p>
                  <span className="font-semibold">Warranty Period:</span>{" "}
                  {warrantyPeriod}
                </p>
                <p className="mt-5">{shortDescription}</p>

                <h4 className="my-5 font-bold">Product Details</h4>

                <Markdown
                  className="prose max-w-[450px] whitespace-normal break-words"
                  remarkPlugins={[remarkGfm]}
                >
                  {description}
                </Markdown>

                <ScrollArea className="mx-auto mt-5 max-w-[1300px] whitespace-nowrap rounded-md border">
                  {productTable && (
                    <Markdown
                      className="prose whitespace-nowrap p-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {productTable}
                    </Markdown>
                  )}
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <section className="w-full">
                  {images?.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative mx-auto mb-5 min-h-[500px] w-full max-w-[500px]"
                    >
                      <Image
                        loader={customLoader}
                        src={image || ""}
                        alt={`${productName || "Product Image"} ${idx + 1}`}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  ))}
                </section>

                <Button asChild className="mt-5">
                  <Link href={`/dashboard/update-medical-equipment?id=${_id}`}>
                    Update Product
                  </Link>
                </Button>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>

        {/* Update Button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-si-primary"
          asChild
        >
          <Link href={`/dashboard/update-medical-equipment?id=${_id}`}>
            <Pencil className="size-5" />
          </Link>
        </Button>

        {/* Delete Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-destructive"
            >
              <Trash className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete the
                medical equipment from the database.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>

              <DialogClose asChild>
                <Button variant="destructive" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Archive Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-yellow-500"
            >
              <Archive className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Archive this product?</DialogTitle>
              <DialogDescription>
                This will move the product to the archived section.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>

              <DialogClose asChild>
                <Button variant="custom" onClick={() => handleArchive(_id)}>
                  Archive
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </td>
    </tr>
  );
};

export default MedicalEquipmentTableRow;
