import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import SingleOrganization from "@/components/OrganizationsName/SingleOrganization";
import Pagination from "@/components/Shared/Paginatin/Pagination";
import useAllOrganizations from "@/hooks/useAllOrganization";
import { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import CreateOrganizationName from "./CreateOrganizationName";

const MedicalCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  //* Fetching Data
  const { setReload, organizations, loading, organizationNamesCount } =
    useAllOrganizations({ page: currentPage, limit: pageLimit });

  // loading skeleton
  const skeleton = new Array(pageLimit).fill(Math.random());

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />

          <div className="mx-auto w-full max-w-screen-lg bg-white">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-blue-950">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Organizations List
                </h2>
                <div className="mt-4 flex items-center justify-between px-2">
                  {/* <p className="border hover:bg-blue-950 duration-500 hover:text-white px-3 text-base py-1 font-semibold rounded-lg cursor-pointer">
                        Create Category <FaPlusCircle className="inline" />
                      </p> */}
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="cursor-pointer rounded-lg border bg-blue-950 px-3 py-1 text-base font-semibold text-white duration-500 hover:bg-[#8BA8E5] hover:text-black"
                          variant="outline"
                        >
                          Create Organization{" "}
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>{" "}
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-4xl">
                        <CreateOrganizationName
                          setReload={setReload}
                        ></CreateOrganizationName>
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

              <table className="w-full table-auto">
                <thead className="bg-gradient-to-r from-blue-950 to-[#91AADF] text-white">
                  <tr className="text-left">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading
                    ? skeleton?.map((item, idx) => (
                        <tr className="mb-10 gap-5" key={idx}>
                          <td
                            colSpan={3}
                            className={`h-14 w-full animate-pulse rounded-sm ${
                              idx % 2 == 0 ? "bg-gray-200" : "bg-white"
                            }`}
                          ></td>
                        </tr>
                      ))
                    : organizations?.map((organization, index) => (
                        <SingleOrganization
                          key={organizations?._id}
                          index={index}
                          data={organization}
                          setReload={setReload}
                        ></SingleOrganization>
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
            articlesCount: organizationNamesCount,
            currentPage,
            defaultPageLimit: 10,
          }}
        />
      </div>
    </div>
  );
};

export default MedicalCategory;
