import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);
    console.log("Image uploaded succesfully", task_id);

    const enhancedImageData = await fetchEnhancedImage(task_id);
    console.log("Enhanced Image data", enhancedImageData);
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": apiKey,
      },
    }
  );
  console.log(data);

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image");
  }
  return data.data.task_id;
};

const fetchEnhancedImage = async (task_id) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": apiKey,
      },
    }
  );
  console.log(data.data.image);
};
