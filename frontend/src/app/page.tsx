// import Image from "next/image";
"use client";

// import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[52px] sm:text-[64px] font-bold text-center">
          Welcome to Next.js
        </h1>
        {/* <Navbar /> */}
      </main>
    </div>
  );
}
