// "use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-startbg-purple-700">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
