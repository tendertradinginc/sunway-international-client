"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { uploadImageToImgBB } from "@/utils/imageUpload";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { toast } from "sonner";

const EditCategoryModal = ({ data, setReload, pathName }) => {
  const { name, _id, image } = data;
  const [loading, setLoading] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [img, setImg] = useState(image);
  const [file, setFile] = useState("");

  // to hanle dialogue open
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = (await uploadImageToImgBB(file)) || image;

      const updatedCategory = {
        name: updatedName,
        image: imageUrl,
      };

      const response = await fetch(
        `https://sunway-international-server.vercel.app/api/v1/${pathName}/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCategory),
        },
      );

      if (response.ok) {
        toast.success("Success");
        setIsOpen(false);
        setLoading(false);
        setReload((prevReload) => prevReload + 1);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    }
  };

  return (
    <AlertDialog open={isOpen} onClose={() => setIsOpen(false)} className="">
      <AlertDialogTrigger className="">
        <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
          <CiEdit className="m-1 inline text-3xl font-bold"></CiEdit>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogDescription className="customScrollbar overflow-y-auto rounded-xl border p-8 shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl space-y-10 py-4"
            >
              <div className="mb-5">
                <Label className="mb-2 block">Category Name</Label>
                <Input
                  value={updatedName}
                  onChange={(e) => {
                    setUpdatedName(e.target.value);
                    setIsdisabled(false);
                  }}
                  type="text"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <Label className="mb-2 block">Category Image</Label>
                <Image width={48} height={48} src={img} alt="" />
                <Input
                  type="file"
                  accept="image/*"
                  name="image"
                  className="mt-5 max-w-96"
                  onChange={(e) => {
                    setIsdisabled(false);
                    setFile(e.target.files[0] || img);
                  }}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-si-primary text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="hover:bg-si-primary hover:text-white"
          >
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCategoryModal;
