"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {} from "@radix-ui/react-alert-dialog";
import axios from "axios";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";

const DeleteCategoryModal = ({ data, setReload, pathName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://sunway-international-server.vercel.app/api/v1/${pathName}/${id}`,
      );

      if (response.status === 200) {
        setIsOpen(false);

        toast.success("success");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    } finally {
      setReload((prevReload) => prevReload + 1);
    }
  };
  return (
    <AlertDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <AlertDialogTrigger>
        <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
          <MdDeleteOutline className="m-1 inline text-3xl text-red-800"></MdDeleteOutline>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xl">
        <AlertDialogHeader>
          <AlertDialogDescription className="customScrollbar max-h-[70vh] space-y-5 overflow-y-auto p-4 text-center text-gray-900">
            <h3 className="text-2xl font-bold">Are Your sure ?</h3>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <button
            onClick={() => handleCategoryDelete(data?._id)}
            className="btn bg-red-800 px-2 text-white hover:bg-red-800"
          >
            Delete
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCategoryModal;
