"use client";

import { DatePicker } from "@/components/custom/DatePicker";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { MedicalCategoryCombobox } from "@/components/custom/MedicalCategoryCombobox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

const UpdateMedicalEquipmentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    productName: "",
    model: "",
    serialNumber: "",
    manufacturer: "",
    regulatoryApproval: "",
    maintenanceSchedule: "",
    images: [],
    shortDescription: "",
    description: "",
    warrantyPeriod: "",
  });

  const [category, setCategory] = useState("");
  const [dateOfManufacture, setDateOfManufacture] = useState("");

  // Fetch data and populate form
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/${id}`,
        );
        const data = response?.data?.data;

        setFormData({
          productName: data.productName || "",
          model: data.model || "",
          serialNumber: data.serialNumber || "",
          manufacturer: data.manufacturer || "",
          regulatoryApproval: data.regulatoryApproval || "",
          maintenanceSchedule: data.maintenanceSchedule || "",
          images: data.images || [],
          shortDescription: data.shortDescription || "",
          description: data.description || "",
          warrantyPeriod: data.warrantyPeriod || "",
        });
        setCategory(data.category || "");
        setDateOfManufacture(data.dateOfManufacture || "");
      } catch (error) {
        toast.error("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    setLoading(true);
    try {
      const files = Array.from(e.target.files);
      const imageUploadPromises = files.map((file) => uploadImageToImgBB(file));
      const imageUrls = await Promise.all(imageUploadPromises);

      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imageUrls],
      }));
    } catch (error) {
      toast.error("Failed to upload images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const completeFormData = {
        ...formData,
        category,
        dateOfManufacture,
      };

      const res = await axios.put(
        `https://sunway-international-server.vercel.app/api/v1/medicalEquipment/${id}`,
        completeFormData,
      );

      if (res.status === 200) {
        router.push("/dashboard/medical-equipment-table");
        toast.success("Product Updated Successfully!");
      }
    } catch (error) {
      toast.error("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-secondary">
      <MaxWidthWrapper className="py-5 lg:py-10">
        <Card className="rounded-none border-2">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Update Medical Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="p-4" onSubmit={handleSubmit}>
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
                  <MedicalCategoryCombobox
                    value={category}
                    setValue={setCategory}
                  />
                </div>

                {/* Serial Number */}
                <div>
                  <Label className="mb-2 block">Serial Number</Label>
                  <Input
                    type="text"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Manufacturer */}
                <div>
                  <Label className="mb-2 block">Manufacturer</Label>
                  <Input
                    type="text"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Regulatory Approval */}
                <div>
                  <Label className="mb-2 block">Regulatory Approval</Label>
                  <Input
                    type="text"
                    name="regulatoryApproval"
                    value={formData.regulatoryApproval}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Maintenance Schedule */}
                <div>
                  <Label className="mb-2 block">Maintenance Schedule</Label>
                  <Input
                    type="text"
                    name="maintenanceSchedule"
                    value={formData.maintenanceSchedule}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Date of Manufacture */}
                <div>
                  <Label className="mb-2 block">Date of Manufacture</Label>
                  <DatePicker
                    date={dateOfManufacture}
                    setDate={setDateOfManufacture}
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

                <Markdown
                  className="prose whitespace-nowrap"
                  remarkPlugins={[remarkGfm]}
                >
                  {formData.description}
                </Markdown>
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
              <Button
                disabled={loading}
                className="mt-4 w-full items-center gap-2.5"
              >
                {loading ? (
                  <>
                    Updating
                    <span className="animate-spin">
                      <FaSpinner />
                    </span>
                  </>
                ) : (
                  "Update"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default UpdateMedicalEquipmentPage;
