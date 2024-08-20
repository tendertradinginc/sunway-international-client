import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import BlogUpdate from "./BlogUpdate";
import DeleteBlog from "./DeleteBlog";


const SingleBlog = ({ data, index}) => {
    const { title } = data;
    return (
      <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
        <td className="px-4 py-1">{index + 1}</td>
        <td className="px-4 py-1  font-semibold text-left ">{title}</td>

            <td className="md:px-4  space-x-3   ">
                <AlertDialog className="flex gap-3">
                        <BlogUpdate data={data} />
                        <DeleteBlog id={data?._id}/>
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleBlog;
