const uploadImageToImgBB = async (imageFile) => {
  if (!imageFile) {
    return;
  }
  const apiKey = "c74cc0f2c97da68210a8d24aedf0b939";
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=" + apiKey,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    if (data.status === 200) {
      const imageUrl = data.data.url;
      return imageUrl;
    } else {
      console.error("Image upload failed");
      return null;
    }
  } catch (error) {
    console.error("Error uploading image: ", error);
    return null;
  }
};

export { uploadImageToImgBB };

// use system

//1
// const [imageFile, setImageFile] = useState(null);

//2
// const handleImageUpload = (e) => {
//   const file = e.target.files[0];
//   setImageFile(file);
// };

//3
// const imageUrl = await uploadImageToImgBB(imageFile);
