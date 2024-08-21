import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";

const OfficeEquipmentTableRow = ({ data, index, setReload }) => {
  const { productName, modelNumber } = data;
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{productName}</td>
      <td className="px-4 py-1 text-left font-semibold">{modelNumber}</td>

      <td className="space-x-3 md:px-4">
        <Button variant="ghost" size="icon" className="hover:text-blue-500">
          <Eye className="size-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:text-si-primary">
          <Pencil className="size-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:text-destructive">
          <Trash className="size-5" />
        </Button>
        
      </td>
    </tr>
  );
};

export default OfficeEquipmentTableRow;
