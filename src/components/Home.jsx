import { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import {enhancedImageAPI} from '../utils/enhancedImageAPI';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedUrl = await enhancedImageAPI(file);
      setEnhancedImage(enhancedUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing image.Please try again later");
    }
  };
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
