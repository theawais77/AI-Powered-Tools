import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);
    console.log("Image uploaded successfully", task_id);

    const enhancedImageData = await pollForEnhancedImage(task_id);
    console.log("Enhanced Image data", enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.error("Error in enhancedImageAPI:", error.message);
    throw error;
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
     if (!data?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    return data.data;

};

const pollForEnhancedImage = async (task_id, retries = 0) => {
  const result = await fetchEnhancedImage(task_id);
  if (result.state === 4) {
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. Please try again later.");
    }

    // wait for 2 second
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL:", result);
  return result;
};
