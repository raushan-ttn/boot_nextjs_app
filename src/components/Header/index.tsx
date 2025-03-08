"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-500">
      <div className="container flex py-5 text-white">
        <div className="">
          <Link href="/">Demo Page router</Link>
        </div>
        <nav className="ml-auto flex gap-9">
          <Link href="/" className="hover:text-blue-400 hover:underline">
            Home
          </Link>
          <Link
            href="/recipies"
            className="hover:text-blue-400 hover:underline"
          >
            Recipies
          </Link>
          <Link
            href="/teachers"
            className="hover:text-blue-400 hover:underline"
          >
            Teachers
          </Link>
          <Link href="/images" className="hover:text-blue-400 hover:underline">
            Images
          </Link>
          {session ? (
            <button className="" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
