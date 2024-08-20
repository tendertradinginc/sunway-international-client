import { AlertDialog } from "@radix-ui/react-alert-dialog";

const SingleCategory = ({ data, index, setReload }) => {
  const { name } = data;
  // console.log(name, data);

  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 font-semibold text-blue-900">{name}</td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <AlertDialog>
          {/* <EditOrganizationModal
            data={data}
            setReload={setReload}
          ></EditOrganizationModal> */}
          {/* <DeleteOrganizationModal
            data={data}
            setReload={setReload}
          ></DeleteOrganizationModal> */}
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleCategory;
