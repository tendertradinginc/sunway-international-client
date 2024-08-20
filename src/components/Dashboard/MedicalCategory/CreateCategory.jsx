"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Ensure this import path is correct
import { Label } from "@/components/ui/label";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { useState } from "react";
import { toast } from "sonner";

const CreateCategory = ({ setReload }) => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Please upload an image.");
      return;
    }
    setLoading(true);
    try {
      const imageUrl = await uploadImageToImgBB(imageFile);
      if (!imageUrl) {
        throw new Error("Failed to upload image");
      }

      const categoryData = {
        ...formData,
        image: imageUrl,
      };
      const response = await fetch(
        "http://localhost:5000/api/v1/medical-category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        },
      );
      console.log(response);

      if (response?.ok) {
        toast("Category Created successfully");
        setFormData({
          name: "",
        });
        setReload((prev) => prev + 1);
      } else {
        toast.error("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-lg lg:mt-20">
      <Card className="si-primary py-12 shadow-xl">
        <CardContent>
          <form className="mx-auto max-w-2xl p-4" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-2xl font-bold">Category Details</h2>

            <div className="mb-4">
              <Label className="mb-2 block">Category Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <Label className="mb-2 block">Image</Label>
              <Input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
                required
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
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCategory;
