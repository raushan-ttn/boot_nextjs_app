import RecipieDetail from "@/components/Recipies/dependencies/RecipieDetail";
import { notFound } from "next/navigation";
import React from "react";

type RecipePageType = {
  params: Promise<{ id: string }>;
};
export type RecipieDetailType = {
  id?: number;
  name?: string;
  ingredients?: string[];
  instructions?: string[];
  prepTimeMinutes?: number;
};
const RecipePage = async ({ params }: RecipePageType) => {
  const id = (await params).id;
  if (!id) return notFound();
  const response = await fetch(`https://dummyjson.com/recipes/${id}`, {
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
