"use client";

import { signIn } from "next-auth/react";

export default function LoginSection() {
  return (
    <>
      Not signed in <br />
      <button
        className="border rounded-full bg-blue-500 text-white py-2 px-4 my-10 hover:bg-blue-600 transition"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in Using Google
      </button>
    </>
  );
}
