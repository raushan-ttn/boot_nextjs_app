import TeachersPage from "@/components/Teachers";
import React from "react";

const Teachers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/teachers`,
    {
      method: "GET",
      next: { tags: ["teachers"] },
      //   cache: "force-cache",
    }
  );
  const data = await response.json();

  return <TeachersPage info={data} />;
};

export default Teachers;
