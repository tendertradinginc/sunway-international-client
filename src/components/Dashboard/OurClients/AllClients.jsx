import SingleCategory from "@/components/Category/SingleCategory";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import CategoryPage from "./CategoryPage";

const AllClients = () => {
//   const [clients, setClients] = useState([]);
//   const [reload, setReload] = useState(0);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     const fetchClients = async () => {
//       console.log(reload);
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://server.tendertradinginc.com/api/v1/categories`
//         );
//         const data = await response.json();

//         setClients(data?.data);
//         // console.log(data.data);
//       } catch (error) {
//         console.error("Error fetching :", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchClients();
//   }, [reload]);



    const ClientsInfo = [
        {
            img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
            clientName: "FH Plastic Industry",
            details: "https://www.google.com/"
        },
        {
            img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
            clientName: "FH Plastic Industry",
            details: "https://www.google.com/"
        },
        {
            img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
            clientName: "FH Plastic Industry",
            details: "https://www.google.com/"
        },
        {
            img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
            clientName: "FH Plastic Industry",
            details: "https://www.google.com/"
        },
    ];

  // loading skeleton
  const skeleton = new Array(10).fill(Math.random());

  return (
    <div>
      <div className="min-h-[80vh] ">
        <div className="container px-10 mx-auto ">
          <br />

          <div className="w-full max-w-screen-lg mx-auto bg-white  ">
            <div className="overflow-x-auto sm:px-1 ">
              <div className="pb-6 flex justify-between items-center">
                <h2 className="text-blue-950 font-semibold text-2xl ">
                  <AiFillDatabase className="inline mb-1"></AiFillDatabase>
                  Clients List
                </h2>
                <div className="flex items-center justify-between mt-4 px-2">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="border bg-blue-950 hover:bg-[#8BA8E5] duration-500 hover:text-black text-white px-3 text-base py-1 font-semibold rounded-lg cursor-pointer"
                          variant="outline"
                        >
                          Create Client{" "}
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>{" "}
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-4xl">
                        <CategoryPage></CategoryPage>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="hover:bg-blue-950 hover:text-white">
                            Close
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
              <hr />
              {
                <table className="w-full table-auto">
                  <thead className="bg-gradient-to-r from-blue-950 to-[#91AADF]  text-white ">
                    <tr className="text-left">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Details</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading
                      ? skeleton?.map((item, idx) => (
                          <tr className="mb-10 gap-5" key={idx}>
                            <td
                              colSpan={3}
                              className={`w-full animate-pulse h-14 rounded-sm ${
                                idx % 2 == 0 ? "bg-gray-200 " : "bg-white "
                              }`}
                            ></td>
                          </tr>
                        ))
                      : ClientsInfo?.map((client, index) => (
                          <SingleCategory
                            key={clients?._id}
                            index={index}
                            data={client}
                            setReload={setReload}
                          ></SingleCategory>
                        ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
