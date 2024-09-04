"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import PaginationBlog from "@/components/shared/pagination/PaginationShadcn";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import CreateClient from "./CreateClient";
import SingleClient from "./SingleClient";

const AllClients = () => {
  const searchParams = useSearchParams();
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(searchParams.get("limit") || 5);
  const [totalClient, setTotalClient] = useState(0);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://sunway-international-server.vercel.app/api/v1/client?page=${page}&limit=${limit}`,
        );
        const data = await response.json();

        setClients(data?.data.result);
        setTotalClient(data?.data?.total);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, [reload, page, limit]);

  const totalPage = Math.ceil(totalClient / limit);

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
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />

          <div className="mx-auto w-full max-w-screen-lg bg-white">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Clients List
                </h2>
                <div className="mt-4 flex items-center justify-between px-2">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="cursor-pointer rounded-lg border bg-si-primary px-3 py-1 text-base font-semibold text-white duration-500 hover:bg-si-secondary hover:text-black"
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

              {loading ? (
                <div className="flex min-h-[50vh] items-center justify-center">
                  <span className="animate-spin text-si-primary">
                    <CgSpinnerAlt className="h-10 w-10" />
                  </span>
                </div>
              ) : (
                <table className="w-full table-auto">
                  <thead className="bg-gradient-to-r from-si-primary to-si-secondary text-white">
                    <tr className="text-left">
                      <th className="px-4 py-2">No</th>
                      <th className="py-2 pl-16">Image</th>
                      <th className="py-2 pl-16">Title</th>
                      <th className="py-2 pl-12">Details</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {clients.length > 0 ? (
                      clients?.map((client, index) => (
                        <SingleClient
                          key={clients?._id}
                          index={index}
                          clientData={client}
                          setReload={setReload}
                        />
                      ))
                    ) : (
                      <p>No Clients Available.</p>
                    )}
                  </tbody>
                </table>
              )}
            </div>
            {!loading && (
              <div className="mt-8">
                <PaginationBlog data={{ page, limit, totalPage }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
