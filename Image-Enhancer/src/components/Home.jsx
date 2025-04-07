import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = (file) => {
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    // console.log(URL.createObjectURL(file));

    // call the API to enhance the image
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
