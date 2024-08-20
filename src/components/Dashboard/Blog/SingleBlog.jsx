import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


const SingleBlog = ({ data, index}) => {
    const { name } = data;
    return (
      <tr className={`${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
        <td className="px-4 py-1">{index + 1}</td>
        <td className="px-4 py-1 text-si-primary font-semibold ">{name}</td>

            <td className="md:px-4  space-x-3   ">
                <AlertDialog className="flex gap-3">
                        <CiEdit className="inline m-1 text-3xl font-bold"></CiEdit>
                        <MdDeleteOutline className="inline m-1 text-3xl text-red-800"></MdDeleteOutline>
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleBlog;
