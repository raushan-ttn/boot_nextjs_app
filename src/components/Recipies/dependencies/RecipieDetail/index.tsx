import React from "react";
type ReciipeDetailInfoType = {
  dataInfo?: {
    id?: number;
    name?: string;
    ingredients?: string[];
    instructions?: string[];
    prepTimeMinutes?: number;
  };
};
const RecipieDetail = ({ dataInfo }: ReciipeDetailInfoType) => {
  return (
    <div className="">
      <h1 className="text-3xl py-3">{dataInfo?.name}</h1>
      <div className="flex">
        <p className="font-bold pr-3">Ingredients: </p>
        <p className=""> {dataInfo?.ingredients?.join(" | ")}</p>
      </div>
      <div className="flex py-5">
        <p className="font-bold pr-3">Instructions: </p>
        <p className=""> {dataInfo?.instructions?.join(" | ")}</p>
      </div>
      <div className="flex py-5">
        <p className="font-bold pr-3">PrepTimeMinutes: </p>
        <p className=""> {dataInfo?.prepTimeMinutes} minuts</p>
      </div>
    </div>
  );
};

export default RecipieDetail;
