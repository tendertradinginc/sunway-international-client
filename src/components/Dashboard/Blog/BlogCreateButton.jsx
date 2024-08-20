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
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaPlusCircle } from "react-icons/fa";

const BlogCreateButton = () => {
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    headline: "",
    description: "",
    // thumbnail: null,
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
      image:image
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Log the form data
    console.log("Form Data Submitted:", formData);

    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      alert(
        "Form submitted successfully! Check your terminal for logged data.",
      );
    }, 2000);
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
        <form className="mx-auto w-full p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="mb-2 block">Blog Name</Label>
            <Input
              type="text"
              name="headline"
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
              name="thumbnail"
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
