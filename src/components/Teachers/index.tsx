import React from "react";
import RevalidateButton from "./dependencies/RevalidateButton";
type TeachersProp = {
  info?: { [key: string]: string }[];
};
const TeachersPage = ({ info }: TeachersProp) => {
  return (
    <>
      <h1 className="py-3 font-semibold text-3xl">Teacher listing</h1>
      <table className="border-collapse w-full">
        <thead className="border-b border-gray-100">
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2 text-left">Id</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Subject</th>
          </tr>
        </thead>
        <tbody>
          {info &&
            info?.length > 0 &&
            info?.map((teacher, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-300" : ""}`}
              >
                <td className="border px-4 py-2">{teacher?.id}</td>
                <td className="border px-4 py-2">{teacher?.name}</td>
                <td className="border px-4 py-2">{teacher?.subject}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <RevalidateButton />
    </>
  );
};

export default TeachersPage;
