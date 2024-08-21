"use client";
import { AiFillDatabase } from "react-icons/ai";
import PaginationBlog from "../../shared/pagination/PaginationShadcn";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import MedicalEquipmentTableRow from "./MedicalEquipmentTableRow"; // Rename this as needed
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

const MedicalEquipmentTable = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(searchParams.get("limit") || 10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/v1/medicalEquipment/all?page=${page}&limit=${limit}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data?.totalMedicalEquipment);
        setProducts(data?.data?.result);
        setTotalProducts(data?.data?.totalMedicalEquipment);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
    console.log(reload);
  }, [page, limit, loading, reload]);

  const totalPage = Math.ceil(totalProducts / limit);

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />
          <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline" />
                  Medical Equipment List
                </h2>
                <Button asChild>
                  <Link href="/dashboard/add-medical-equipment">
                    Add Medical Equipment
                    <PlusCircleIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
              <hr />

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
                  {products?.length > 0
                    ? products?.map((product, index) => (
                        <MedicalEquipmentTableRow
                          key={index}
                          index={index}
                          data={product}
                          setReload={setReload}
                        />
                      ))
                    : Array.from({ length: 10 }).map((_, idx) => (
                        <tr
                          key={idx}
                          className={`h-10 w-full ${
                            idx % 2 == 0 ? "bg-secondary" : ""
                          } `}
                        >
                          <td className="col" colSpan={4}></td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
            {!loading && (
              <div className="mt-5">
                <PaginationBlog data={{ setPage, page, limit, totalPage }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalEquipmentTable;
