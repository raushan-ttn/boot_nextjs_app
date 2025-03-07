import Image from "next/image";
import React from "react";
type PixelProp = {
  src: { [key: string]: string };
};
const Images = async () => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=nature`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.NEXT_PIXELS_KEY as string,
      },
    }
  );
  const data = await response.json();

  return (
    <div className="flex flex-wrap gap-4">
    {data?.photos?.map((value: PixelProp, index: number) => (
      <Image
        key={index}
        src={value.src.original}
        alt={`Nature ${index}`}
        width={300} 
        height={200}
        className="rounded-lg shadow-md"
      />
    ))}
  </div>
  );
};

export default Images;
