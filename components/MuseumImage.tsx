import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  id: number;
}

const MuseumImage = ({ id }: Props) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    try {
      const response = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );
      setImage(response.data.primaryImageSmall);
      setUrl(response.data.objectURL);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-96">
        <img
          src="images/spinner.svg"
          alt="spinner"
          className="w-8 h-8 animate-spin"
        />
      </div>
    );
  }

  return (
    <>
      {image && (
        <a href={url} target="_blank" rel="noreferrer">
          <div
            className="w-full h-96 bg-cover bg-no-repeat bg-center lg:hover:scale-110 lg:hover:bg-contain duration-500"
            style={{
              backgroundImage: "url(" + image + ")",
            }}
          ></div>
        </a>
      )}
    </>
  );
};

export default MuseumImage;
