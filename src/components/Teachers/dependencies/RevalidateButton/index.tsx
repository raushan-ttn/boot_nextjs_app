"use client";
import { useTransition } from "react";
import { revalidateTeachers } from "@/actions/actions";

export default function RevalidateButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(revalidateTeachers)}
      disabled={isPending}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isPending ? "Refreshing..." : "Refresh Teachers"}
    </button>
  );
}
