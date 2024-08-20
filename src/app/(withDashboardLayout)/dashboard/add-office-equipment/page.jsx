"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaSpinner } from "react-icons/fa6";
import Image from "next/image";
import { toast } from "sonner";

const AddOfficeEquipmentPage = () => {
  // TODO: Setup imge upload & directly insert the data into formdata
  // TODO: use the custom api to send data to the backend and create a loading state while it's submitting

  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
    images: [],
    shortDescription: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      images: imageUrls.map((url) => ({ url })),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    toast.success("Product Added Successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-secondary">
      <MaxWidthWrapper className="py-5 lg:py-10">
        <Card className="mx-auto max-w-3xl rounded-none border-2">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Add Office Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="mx-auto max-w-2xl p-4" onSubmit={handleSubmit}>
              {/* name */}
              <div className="mb-4">
                <Label className="mb-2 block">Product Name</Label>
                <Input
                  type="text"
                  name="uniqueId"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Model Number */}
              <div className="mb-4">
                <Label className="mb-2 block">Model Number</Label>
                <Input
                  type="text"
                  name="modelNumber"
                  value={formData.modelNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Short Description */}
              <div className="mb-4">
                <Label className="mb-2 block">Short Description</Label>
                <Input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  required
                  maxLength={150}
                />
              </div>

              {/* Full Description */}
              <div className="mb-4">
                <Label className="mb-2 block">Description</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="min-h-64"
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <Label className="mb-2 block">Images</Label>
                <Input
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  onChange={handleImageUpload}
                />
                <div className="mt-2">
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-3">
                      {formData.images.map((image, index) => (
                        <div key={index}>
                          <Image
                            src={image.url}
                            height={200}
                            width={200}
                            alt={`Uploaded ${index}`}
                            className="mt-2 h-auto w-[200px]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button disabled className="w-full items-center gap-2.5">
                Processing
                <span className="animate-spin">
                  <FaSpinner size={18} />
                </span>
              </Button>
              <Button type="submit" className="mt-2 w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default AddOfficeEquipmentPage;
