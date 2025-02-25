"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  const [timer, setTimer] = useState<number>(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      router.push("/");
    }
  }, [timer, router]);

  return (
    <div className="flex flex-col items-center min-h-[87vh] justify-center">
      <h1 className="text-3xl py-10">page not found</h1>
      <p>Return to Homepage in {timer} seconds</p>
    </div>
  );
};

export default NotFound;
