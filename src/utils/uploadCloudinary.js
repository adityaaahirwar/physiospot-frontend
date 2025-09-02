const uploadImageToCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "physiospot-app");
  uploadData.append("cloud_name", "dkjkocnb1");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkjkocnb1/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
