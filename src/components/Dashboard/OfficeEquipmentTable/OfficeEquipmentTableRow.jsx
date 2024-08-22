import axios from "axios";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import Link from "next/link";
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
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const OfficeEquipmentTableRow = ({ data, index, setReload }) => {
  const {
    _id,
    productName,
    modelNumber,
    images,
    shortDescription,
    description,
  } = data;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/officeEquipment/${id}`);
      // Revalidate the data after deletion
      setReload(true);
      toast.success("Product Deleted Successfully!");
    } catch (error) {
      toast.error("Failed to delete the item. Try again later.");
      console.error("Failed to delete the item:", error);
    }
  };

  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{productName}</td>
      <td className="px-4 py-1 text-left font-semibold">{modelNumber}</td>

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
                <p className="">
                  <span className="font-semibold">Model No:</span>
                  {modelNumber}
                </p>
                <p className="">{shortDescription}</p>

                <div className="mt-5 space-y-1">
                  <h4 className="font-bold">Product Details</h4>
                  <Markdown className="prose" remarkPlugins={[remarkGfm]}>
                    {description}
                  </Markdown>
                </div>

                <section className="w-full">
                  {images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative mx-auto mb-5 min-h-[500px] w-full"
                    >
                      <Image
                        src={image || ""}
                        alt={`${productName || "Product Image"} ${idx + 1}`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </section>

                <Button asChild className="mt-5">
                  <Link href={`/dashboard/update-office-equipment?id=${_id}`}>
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
          <Link href={`/dashboard/update-office-equipment?id=${_id}`}>
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
                office equipment from the database.
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
      </td>
    </tr>
  );
};

export default OfficeEquipmentTableRow;
