"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaPlusCircle } from "react-icons/fa";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import toast from "react-hot-toast";

const BlogCreateButton = () => {
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("loading...");
    try {
      const imageUrl = await uploadImageToImgBB(imageFile);
      const blogData = { ...formData, image: imageUrl };
      console.log(blogData);
      const response = await fetch(
        "http://localhost:5000/api/v1/blogs/create-blog",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData),
        },
      );
console.log(response)
      const data = await response.json();

      if (data?.status === "success") {
        toast.success("Article submitted successfully");
        e.target.reset();
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-3 bg-si-primary py-4 text-end font-semibold text-white duration-500 hover:bg-si-secondary"
        >
          Create Blog
          <FaPlusCircle className="inline text-xl" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
        <form className="mx-auto w-full p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="mb-2 block">Blog Name</Label>
            <Input
              type="text"
              name="title"
              value={formData.headline}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Blog Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="min-h-64"
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Blog Thumbnail</Label>
            <Input
              id="blogImage"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageUpload}
            />
          </div>

          {loading ? (
            <Button
              disabled
              variant="tti"
              className="w-full items-center gap-2.5"
            >
              Processing
              <span className="animate-spin">
                <CgSpinnerTwoAlt size={18} />
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              className="mt-2 w-full rounded-sm bg-si-primary p-1 px-3 font-semibold text-white hover:bg-si-secondary"
            >
              Submit
            </Button>
          )}
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlogCreateButton;
