"use client"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import CreateClient from "./CreateClient";
import SingleClient from "./SingleClient";
import PaginationBlog from "@/components/shared/pagination/PaginationShadcn";
import { useSearchParams } from "next/navigation";

const AllClients = () => {
  const searchParams = useSearchParams()
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [limit, setLimit] = useState(searchParams.get('limit') || 5)
  const [totalClient, setTotalClient] = useState(0)
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchClients = async () => {
      console.log(reload);
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/client?page=${page}&limit=${limit}`
        );
        const data = await response.json();

        setClients(data?.data.result);
        setTotalClient(data?.data?.total)
        // console.log(data.data);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, [reload ,page, limit,loading]);


  
  const totalPage = Math.ceil(totalClient / limit)
  






  // const ClientsInfo = [
  //     {
  //         img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
  //         clientName: "FH Plastic Industry",
  //         details: "https://www.google.com/"
  //     },
  //     {
  //         img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
  //         clientName: "FH Plastic Industry",
  //         details: "https://www.google.com/"
  //     },
  //     {
  //         img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
  //         clientName: "FH Plastic Industry",
  //         details: "https://www.google.com/"
  //     },
  //     {
  //         img: "https://i.postimg.cc/4NmNs3Jb/FH-Plastic-1.png",
  //         clientName: "FH Plastic Industry",
  //         details: "https://www.google.com/"
  //     },
  // ];

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
                <h2 className="text-si-primary font-semibold text-2xl ">
                  <AiFillDatabase className="inline mb-1"></AiFillDatabase>
                  Clients List
                </h2>
                <div className="flex items-center justify-between mt-4 px-2">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="border bg-si-primary hover:bg-si-secondary duration-500 hover:text-black text-white px-3 text-base py-1 font-semibold rounded-lg cursor-pointer"
                          variant="outline"
                        >
                          Create Client{" "}
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>{" "}
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-4xl">
                        <CreateClient />

                        <AlertDialogFooter>
                          <AlertDialogCancel className="hover:bg-si-primary hover:text-white">
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
                  <thead className="bg-gradient-to-r from-si-primary to-si-secondary  text-white ">
                    <tr className="text-left">
                      <th className="px-4 py-2">No</th>
                      <th className="pl-16 py-2">Image</th>
                      <th className="pl-16 py-2">Title</th>
                      <th className="pl-12 py-2">Details</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading
                      ? skeleton?.map((item, idx) => (
                        <tr className="mb-10 gap-5" key={idx}>
                          <td
                            colSpan={3}
                            className={`w-full animate-pulse h-14 rounded-sm ${idx % 2 == 0 ? "bg-gray-200 " : "bg-white "
                              }`}
                          ></td>
                        </tr>
                      ))
                      :
                      clients?.map((client, index) => (
                        <SingleClient
                          key={clients?._id}
                          index={index}
                          clientData={client}

                        ></SingleClient>
                      ))}
                  </tbody>
                </table>
              }
            </div>
            {!loading && <div className="mt-5">
            <PaginationBlog data={{ page, limit, totalPage}} />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
