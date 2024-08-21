"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const CreateClient = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
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
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an API call or data submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      console.log(formData);
      toast.success('Client created successfully!');

      // Reset form fields
      setFormData({
        name: '',
        description: '',
        image: null,
      });
    } catch (error) {
      toast.error('An error occurred while creating the client.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
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
                name="description"
                value={formData.description}
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
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateClient;
