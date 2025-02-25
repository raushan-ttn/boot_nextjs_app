import Link from "next/link";
import React from "react";

const Header = () => {
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
          <Link href="/recipies" className="hover:text-blue-400 hover:underline">
          Recipies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
