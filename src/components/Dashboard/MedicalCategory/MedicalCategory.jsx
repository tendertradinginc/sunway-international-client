"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import CreateCategory from "./CreateCategory";
import SingleCategory from "./SingleCategory";

const MedicalCategory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(false);

  //* Fetching Data

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await fetch(
        `http://localhost:5000/api/v1/medical-category?page=${currentPage}&limit=${pageLimit}`,
      );
      const result = await res.json();

      setData(result?.data?.result);
      console.log(result?.data?.result);
      setLoading(false);
    }

    fetchData();
  }, [currentPage, pageLimit, reload]);
  // loading skeleton
  const skeleton = new Array(pageLimit).fill(Math.random());

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />

          <div className="mx-auto w-full bg-white">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Medical Category List
                </h2>
                <div className="mt-4 flex items-center justify-between px-2">
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="cursor-pointer rounded-lg border bg-si-primary px-3 py-1 text-base font-semibold text-white duration-500 hover:bg-si-primary hover:text-gray-400"
                          variant="outline"
                        >
                          Create Medical Category{" "}
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>{" "}
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-4xl rounded-lg">
                        <CreateCategory setReload={setReload}></CreateCategory>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="hover:bg-red-700 hover:text-white">
                            Close
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
              <hr />

              <table className="w-full table-auto border">
                <thead className="bg-gradient-to-r from-si-primary to-si-secondary text-white">
                  <tr className="text-left">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading
                    ? skeleton?.map((item, idx) => (
                        <tr className="mb-10 gap-5" key={idx}>
                          <td
                            colSpan={3}
                            className={`h-10 w-full animate-pulse rounded-sm ${
                              idx % 2 == 0 ? "bg-gray-200" : "bg-white"
                            }`}
                          ></td>
                        </tr>
                      ))
                    : data?.map((category, index) => (
                        <SingleCategory
                          key={category?._id}
                          index={index}
                          data={category}
                          setReload={setReload}
                        ></SingleCategory>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-10">
        <Pagination
          data={{
            pageLimit,
            setCurrentPage,
            setPageLimit,
            // articlesCount: organizationNamesCount,
            currentPage,
            defaultPageLimit: 10,
          }}
        />
      </div>
    </div>
  );
};

export default MedicalCategory;
