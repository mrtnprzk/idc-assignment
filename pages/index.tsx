import Head from "next/head";
import axios from "axios";
import Header from "../components/Header";
import MuseumImage from "../components/MuseumImage";
import { useEffect, useState } from "react";

export default function Home() {
  const [objectIDs, setObjectIDs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers"
      );
      setObjectIDs(response.data.objectIDs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (objectIDs)
    return (
      <>
        <Head>
          <title>IDC</title>
          <meta name="description" content="Created by mrtnprzk" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {isLoading ? (
          <div className="flex justify-center items-center w-[100%] h-[100vh] font-bold text-4xl">
            <img
              src="images/spinner.svg"
              alt="spinner"
              className="w-20 h-20 animate-spin"
            />
          </div>
        ) : (
          <main className="bg-stone-200 max-w-7xl mx-auto p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {objectIDs.map((objectId, index) => (
                <MuseumImage key={index} id={objectId} />
              ))}
            </div>
          </main>
        )}
      </>
    );
}
