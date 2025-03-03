"use client";

import { signIn } from "next-auth/react";

export default function LoginSection() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign in Using Google
      </button>
    </>
  );
}
