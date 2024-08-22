"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaSpinner } from "react-icons/fa6";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter, useSearchParams } from "next/navigation";

const UpdateOfficeEquipmentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
    images: [],
    shortDescription: "",
    description: "",
  });

  // Fetch data and populate form
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/officeEquipment/${id}`,
        );
        const data = response?.data?.data;

        console.log("Data?: ", data);
        setFormData({
          modelNumber: data.modelNumber || "",
          productName: data.productName || "",
          images: data.images || [],
          shortDescription: data.shortDescription || "",
          description: data.description || "",
        });
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
      const res = await axios.put(
        `http://localhost:5000/api/v1/officeEquipment/${id}`,
        formData,
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
        <Card className="mx-auto max-w-3xl rounded-none border-2">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Update Office Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="mx-auto max-w-2xl p-4" onSubmit={handleSubmit}>
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

                <Markdown className="prose" remarkPlugins={[remarkGfm]}>
                  {formData.description}
                </Markdown>
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

export default UpdateOfficeEquipmentPage;
