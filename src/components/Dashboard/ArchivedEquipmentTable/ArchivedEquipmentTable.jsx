"use client";

import { AiFillDatabase } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PaginationBlog from "../../shared/pagination/PaginationShadcn";
import ArchivedEquipmentTableRow from "./ArchivedEquipmentTableRow";

const ArchivedEquipmentTable = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/officeEquipment/archive?page=${page}&limit=${limit}`,
        );
        const data = await response.json();
        setProducts(data?.data?.result);
        setTotalProducts(data?.data?.totalArchivedEquipment);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit, reload]);

  const totalPage = Math.ceil(totalProducts / limit);

  return (
    <div className="min-h-[80vh]">
      <div className="container mx-auto px-10">
        <br />
        <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
          <div className="overflow-x-auto sm:px-1">
            <div className="flex items-center justify-between pb-6">
              <h2 className="text-2xl font-semibold text-si-primary">
                <AiFillDatabase className="mb-1 inline" />
                Archived Equipment List
              </h2>
            </div>
            <hr />

            {loading ? (
              <div className="flex min-h-[50vh] items-center justify-center">
                <span className="animate-spin text-si-primary">
                  <CgSpinnerAlt className="h-10 w-10" />
                </span>
              </div>
            ) : (
              <>
                <table className="w-full table-auto">
                  <thead className="border-2 border-si-primary bg-si-primary text-white">
                    <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2 text-left">Product Name</th>
                      <th className="px-4 py-2 text-left">Model Number</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="border text-center">
                    {products?.length > 0 ? (
                      products.map((product, index) => (
                        <ArchivedEquipmentTableRow
                          key={product?._id}
                          index={index}
                          data={product}
                          setReload={setReload}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-10 text-center">
                          No items found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="mt-5">
                  <PaginationBlog data={{ setPage, page, limit, totalPage }} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedEquipmentTable;
