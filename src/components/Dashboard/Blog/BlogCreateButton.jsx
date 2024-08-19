"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { FaPlusCircle } from "react-icons/fa";


const BlogCreateButton = () => {
  const [formData, setFormData] = useState({
    headline: "",
    description: "",
    // thumbnail: null,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   const handleImageUpload = (e) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       thumbnail: e.target.files[0],
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Log the form data
    console.log("Form Data Submitted:", formData);

    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully! Check your terminal for logged data.");
    }, 2000);
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          asChild>
          <Button
            variant="outline"
            className="bg-si-primary text-white duration-500 hover:bg-si-secondary font-semibold text-end flex gap-3 py-4" >
            Create Blog
            <FaPlusCircle className="inline text-xl" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent >
          <div className="my-4 w-full mx-auto mt-6 border-2">z
            <Card className="max-w-3xl mx-auto shadow-2xl">
              <CardHeader>
                <CardTitle className="text-4xl text-center">Publish Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="max-w-2xl mx-auto p-4" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label className="block mb-2">Blog Name</Label>
                    <Input
                      type="text"
                      name="headline"
                      value={formData.headline}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Label className="block mb-2">Blog Description</Label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="min-h-64"
                    />
                  </div>
                  <div className="mb-4">
                    <Label className="block mb-2">Blog Thumbnail</Label>
                    <Input
                      id="blogImage"
                      type="file"
                      accept="image/*"
                      name="thumbnail"
                    // onChange={handleImageUpload}
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
                      className="w-full bg-si-primary hover:bg-si-secondary rounded-sm px-3 p-1 mt-2 font-semibold text-white"
                    >
                      Submit
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>

  );
};

export default BlogCreateButton;
