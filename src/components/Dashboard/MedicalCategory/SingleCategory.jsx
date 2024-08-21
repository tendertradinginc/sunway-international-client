import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import DeleteCategoryModal from "./DeleteCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

const SingleCategory = ({ data, index, setReload }) => {
  const { name, image } = data;


  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 font-semibold text-blue-900">{name}</td>
      <td className="px-4 py-1 font-semibold text-blue-900">
        <Image
          className="h-12 w-12"
          width={48}
          height={48}
          src={image}
          alt="imgae"
        />
      </td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <AlertDialog>
          <EditCategoryModal
            data={data}
            setReload={setReload}
          ></EditCategoryModal>
          <DeleteCategoryModal
            data={data}
            setReload={setReload}
          ></DeleteCategoryModal>
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleCategory;
