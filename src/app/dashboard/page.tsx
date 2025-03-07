"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold">Logged-in User Information</p>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && (
        <Image
          src={session.user.image}
          height={200}
          width={200}
          alt={session.user.name ?? "User Image"}
          className="rounded-full mt-4"
        />
      )}
      <button
        className="border rounded-full bg-blue-500 text-white py-2 px-4 my-10 hover:bg-blue-600 transition"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
