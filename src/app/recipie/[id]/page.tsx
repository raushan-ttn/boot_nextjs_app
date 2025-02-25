import RecipieDetail from "@/components/Recipies/dependencies/RecipieDetail";
import { notFound } from "next/navigation";
import React from "react";

type RecipePageType = {
  params?: { [key: string]: string };
};
export type RecipieDetailType = {
  id?: number;
  name?: string;
  ingredients?: string[];
  instructions?: string[];
  prepTimeMinutes?: number;
};
const RecipePage = async ({ params }: RecipePageType) => {
  if (!params?.id) return notFound();
  const response = await fetch(`https://dummyjson.com/recipes/${params?.id}`, {
    method: "GET",
  });
  if (!response.ok) return notFound();
  const data: RecipieDetailType = await response?.json();
  return (
    <div>
      <RecipieDetail dataInfo={data} />
    </div>
  );
};

export default RecipePage;
