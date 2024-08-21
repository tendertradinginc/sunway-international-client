import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditClientModal from "./EditClientModal";
import DeleteClientModal from "./DeleteClientModal";


const SingleClient = ({ clientData, index, setReload  }) => {

    const { name, image, details } = clientData;
    // console.log(name, image,details, data);



    return (

        <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-1">{index + 1}</td>

            <td className="pl-16 py-1 text-gray-700 ">
                <Image
                src={image}
                alt="client"
                height="56"
                width="30"
                className="h-14"
            />
            </td>

            <td className="px-16 py-1 text-si-primary font-semibold ">
                {name}
            </td>

            <td className="pr-2 py-1 text-blue-900 font-semibold ">
                {details}
            </td>

            <td className="md:px-4 py-2 space-x-3 flex items-center">
                <AlertDialog>
                <EditClientModal data={clientData} setReload={setReload}></EditClientModal>
                <DeleteClientModal data={clientData} setReload={setReload}></DeleteClientModal>
                </AlertDialog>

            </td>
        </tr>

    );
};

export default SingleClient;