"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession();
  console.log(session);

  // if (session === undefined || session === null) {
  //   redirect("/login");
  // }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold">Logined user Information</p>
      <p>Name: {session?.user?.name}</p>
      <p>Email {session?.user?.email}</p>
      <p>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            height={200}
            width={200}
            alt={session?.user?.name ?? ""}
          />
        )}
      </p>
      <button
        className="border rounded-full bg-blue-500 py-2 px-3 my-10"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
