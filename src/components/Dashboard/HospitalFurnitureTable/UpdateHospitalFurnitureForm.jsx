"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { OfficeCategoryCombobox } from "@/components/custom/OfficeCategoryCombobox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { customLoader } from "@/utils/customLoader";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

const UpdateHospitalFurnitureForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
    images: [],
    shortDescription: "",
    description: "",
    productTable: "",
  });

  // Fetch data and populate form
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://sunway-international-server.vercel.app/api/v1/officeEquipment/${id}`,
        );
        const data = response?.data?.data;

        setFormData({
          modelNumber: data?.modelNumber || "",
          productName: data?.productName || "",
          images: data?.images || [],
          shortDescription: data?.shortDescription || "",
          description: data?.description || "",
          productTable: data?.productTable || "",
        });

        setCategory(data?.category || "");
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
      const updatedFormData = {
        ...formData,
        category: category,
      };

      const res = await axios.put(
        `https://sunway-international-server.vercel.app/api/v1/officeEquipment/${id}`,
        updatedFormData,
      );

      if (res.status === 200) {
        router.push("/dashboard/office-equipment-table");
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
              Update Hospital Furniture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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

                {/* Model Number */}
                <div>
                  <Label className="mb-2 block">Model Number</Label>
                  <Input
                    type="text"
                    name="modelNumber"
                    value={formData.modelNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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

                {/* category */}
                <div>
                  <Label className="mb-2 block">Category</Label>
                  <OfficeCategoryCombobox
                    value={category}
                    setValue={setCategory}
                  />
                </div>
              </div>

              <div className="mb-4">
                {/* Description */}
                <Label className="mb-2 block">Description</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="min-h-64"
                />

                {/* Description Table */}
                <Label className="mb-2 mt-4 block">Description Table</Label>
                <Textarea
                  name="productTable"
                  value={formData.productTable}
                  onChange={handleInputChange}
                  required
                  className="min-h-64"
                />
              </div>
              <div className="mb-5">
                <Markdown
                  className="prose max-w-none whitespace-normal break-words"
                  remarkPlugins={[remarkGfm]}
                >
                  {formData.description}
                </Markdown>
                <ScrollArea className="mx-auto mt-5 max-w-[1300px] whitespace-nowrap rounded-md border">
                  {formData?.productTable && (
                    <Markdown
                      className="prose whitespace-nowrap p-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {formData?.productTable}
                    </Markdown>
                  )}
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
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
                    <div className="grid grid-cols-3 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index}>
                          <Image
                            loader={customLoader}
                            src={image}
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
                className="w-full items-center gap-2.5"
              >
                {loading ? (
                  <>
                    Updating
                    <span className="animate-spin">
                      <FaSpinner size={18} />
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

export default UpdateHospitalFurnitureForm;
