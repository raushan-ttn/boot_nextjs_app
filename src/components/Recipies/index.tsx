import Link from "next/link";
import React from "react";
type RecipiesListType = {
  dataInfo?: { [key: string]: string | number | undefined }[];
};
const RecipiesList = ({ dataInfo }: RecipiesListType) => {
  return (
    <>
      <h1 className="py-3 font-semibold text-3xl">Recipies listing</h1>
      <table className="border-collapse w-full">
        <thead className="border-b border-gray-100">
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2 text-left">Id</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Prep Time Minuts</th>
            <th className="px-4 py-2 text-left">Servings</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo &&
            dataInfo?.length > 0 &&
            dataInfo?.map((recipie, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-300" : ""}`}
              >
                <td className="border px-4 py-2">{recipie?.id}</td>
                <td className="border px-4 py-2">
                  <Link className="text-blue-600 hover:underline" href={`/recipie/${recipie?.id}`}>{recipie?.name}</Link>
                </td>
                <td className="border px-4 py-2">
                  {recipie?.prepTimeMinutes} minuts
                </td>
                <td className="border px-4 py-2">{recipie?.servings}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default RecipiesList;
