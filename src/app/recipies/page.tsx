import RecipiesList from "@/components/Recipies";
import React from "react";

const Recipies = async () => {
  const response = await fetch(
    `https://dummyjson.com/recipes?skip=0&limit=10`,
    {
      method: "GET",
    }
  );

  const data = await response.json();

  return <RecipiesList dataInfo={data?.recipes} />;
};

export default Recipies;
