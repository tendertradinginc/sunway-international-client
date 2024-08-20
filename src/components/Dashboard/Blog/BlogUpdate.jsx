"use client"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

const BlogUpdate = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { title, image, description, _id } = data;
  const [file, setFile] = useState("");
  const [updatedTitle, setUpdtedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Loading...");

    try {
      let imageUrl = image;
      if (file) {
        imageUrl = await uploadImageToImgBB(file);
      }
      const updatedBlog = {
        title: updatedTitle,
        description: updatedDescription,
        image: imageUrl,
      
      };

      const response = await fetch(
        `http://localhost:5000/api/v1/blogs/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBlog),
        }
      );

      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Success");
        setIsdisabled(true);
        setLoading(false);
        setReload((prevReload) => prevReload + 1);
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred");
      }
    } catch (error) {
      toast.dismiss(toastId);
      setLoading(false);
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return  <AlertDialog open={isOpen} onClose={() => setIsOpen(false)}>
  <AlertDialogTrigger className="">
    <div onClick={() => setIsOpen(true)} className="text-blue-950 py-1 ">
      <CiEdit className="inline m-1 text-3xl font-bold"></CiEdit>
    </div>
  </AlertDialogTrigger>
  <AlertDialogContent className="max-w-3xl">
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <hr />
      <AlertDialogDescription className=" min-h-[70vh] overflow-y-auto p-4 customScrollbar">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto py-4 space-y-10"
        >
          <div className="mb-5">
            <Image
            height={400}
            width={400}
              className="h-40 shadow-md border "
              src={data?.image}
              alt="updated blog Image"
            />
            <Label className="block mb-2 mt-5">Update Thumbnail</Label>
            <Input
              type="file"
              accept="image/*"
              name="image"
              className="max-w-96 "
              onChange={(e) => {
                setIsdisabled(false);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <div className="mb-4">
            <Label className="block mb-2">Title</Label>
            <Input
              value={updatedTitle}
              onChange={(e) => {
                setUpdtedTitle(e.target.value);
                setIsdisabled(false);
              }}
              type="text"
              name="title"
              required
            />
          </div>

         

          <div className="mb-4">
            <Label className="block mb-2">Description</Label>
            <Textarea
              value={updatedDescription}
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
                setIsdisabled(false);
              }}
              className="min-h-[160px] customScrollbar"
              required
            />
          </div>

          <div className="  ">
            <div
              className={`flex items-center justify-center h-10 text-white font-semibold  hover:text-black rounded ${
                isDisbaled ? "bg-[#91AADF]" : "bg-si-primary"
              }`}
            >
            
              <button
                disabled={isDisbaled}
                type="submit"
                className={`w-full h-full   py-18 ${loading && "hidden"}`}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setIsOpen(false)}>
        Close
      </AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>;
};

export default BlogUpdate;
