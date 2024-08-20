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

const AddMedicalEquipmentPage = () => {
  // TODO: Setup image upload & directly insert the data into formData
  // TODO: use the custom API to send data to the backend and create a loading state while it's submitting

  const [formData, setFormData] = useState({
    productName: "",
    model: "",
    category: "",
    serialNumber: "",
    manufacturer: "",
    regulatoryApproval: "",
    maintenanceSchedule: "",
    images: [],
    shortDescription: "",
    description: "",
    dateOfManufacture: "",
    warrantyPeriod: "",
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
      images: imageUrls,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    toast.success("Medical Equipment Added Successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-secondary">
      <MaxWidthWrapper className="py-5 lg:py-10">
        <Card className="mx-auto max-w-3xl rounded-none border-2">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Add Medical Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="mx-auto max-w-2xl p-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Product Name */}
                <div>
                  <Label className="mb-2 block">Product Name</Label>
                  <Input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Model */}
                <div>
                  <Label className="mb-2 block">Model</Label>
                  <Input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <Label className="mb-2 block">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Serial Number */}
                <div>
                  <Label className="mb-2 block">Serial Number</Label>
                  <Input
                    type="text"
                    name="serialNumber"
                    value={formData.serialNumber}
                  />
                </div>

                {/* Manufacturer */}
                <div>
                  <Label className="mb-2 block">Manufacturer</Label>
                  <Input
                    type="text"
                    name="manufacturer"
                    value={formData.manufacturer}
                  />
                </div>

                {/* Regulatory Approval */}
                <div>
                  <Label className="mb-2 block">Regulatory Approval</Label>
                  <Input
                    type="text"
                    name="regulatoryApproval"
                    value={formData.regulatoryApproval}
                  />
                </div>

                {/* Maintenance Schedule */}
                <div>
                  <Label className="mb-2 block">Maintenance Schedule</Label>
                  <Input
                    type="text"
                    name="maintenanceSchedule"
                    value={formData.maintenanceSchedule}
                  />
                </div>

                {/* Date of Manufacture */}
                <div>
                  <Label className="mb-2 block">Date of Manufacture</Label>
                  <Input
                    type="date"
                    name="dateOfManufacture"
                    value={formData.dateOfManufacture}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Warranty Period */}
                <div>
                  <Label className="mb-2 block">Warranty Period</Label>
                  <Input
                    type="text"
                    name="warrantyPeriod"
                    value={formData.warrantyPeriod}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className="mt-4">
                <Label className="mb-2 block">Short Description</Label>
                <Input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  maxLength={150}
                  required
                />
              </div>

              {/* Full Description */}
              <div className="mt-4">
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
              <div className="mt-4">
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
                    <div className="grid grid-cols-3 gap-4">
                      {formData.images.map((url, index) => (
                        <div key={index}>
                          <Image
                            src={url}
                            height={200}
                            width={200}
                            alt={`Uploaded ${index}`}
                            className="mt-2 h-auto w-full"
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

export default AddMedicalEquipmentPage;
