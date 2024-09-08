"use client";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { OfficeCategoryCombobox } from "@/components/custom/OfficeCategoryCombobox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { customLoader } from "@/utils/customLoader";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

const AddHospitalFurniturePage = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleImageUpload = async (e) => {
    setLoading(true); // Start loading before image upload
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
      setLoading(false); // Stop loading after image upload is complete
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

      const res = await axios.post(
        "https://sunway-international-server.vercel.app/api/v1/officeEquipment/create",
        updatedFormData,
      );

      if (res.status === 201) {
        toast.success("Product Added Successfully!");
        // Reset form data
        setFormData({
          modelNumber: "",
          productName: "",
          images: [],
          shortDescription: "",
          description: "",
        });

        setCategory("");
      }
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
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
              Add Hospital Furniture
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

                <Markdown
                  className="prose whitespace-nowrap"
                  remarkPlugins={[remarkGfm]}
                >
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
                    Processing
                    <span className="animate-spin">
                      <FaSpinner size={18} />
                    </span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default AddHospitalFurniturePage;
