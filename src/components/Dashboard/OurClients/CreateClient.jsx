"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CreateClient = () => {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      // Upload the image and get the URL
      const imageUrl = await uploadImageToImgBB(imageFile);
      if (!imageUrl) {
        throw new Error("Failed to upload image");
      }

      // Prepare the final data object to send to the backend
      const clientsData = {
        ...formData,
        image: imageUrl,
      };

      console.log("Submitting data:", clientsData); // Check the data being sent

      const response = await fetch("http://localhost:5000/api/v1/client/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json;",
        },
        body: JSON.stringify(clientsData),
      });

      // Check if the response was successful
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit data: ${errorText}`);
      }

      const data = await response.json();

      // Handle success or failure based on the response data
      if (data.status === "success") {
        toast.success("Client created successfully!");
        setFormData({
          name: "",
          details: "",
          image: null,
        });
        setImageFile(null);
      } else {
        throw new Error(data.error || "Failed to submit client data");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error); // Log errors for debugging
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <Card className="shadow-none border-none outline-none">
        <CardContent>
          <form className="max-w-2xl mx-auto p-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center font-bold mb-6">Client Details</h2>

            {/* File Upload */}
            <div className="mb-4">
              <Label className="block mb-2">Image</Label>
              <Input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="block mb-2">Title</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Details</Label>
              <Textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
                className="min-h-60"
              />
            </div>

            <Button
              type="submit"
              className="mt-2 w-full rounded-sm bg-si-primary p-1 px-3 font-semibold text-white hover:bg-si-secondary"
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

export default CreateClient;
