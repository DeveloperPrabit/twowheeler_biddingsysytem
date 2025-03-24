// import React from "react";
"use client";
import {
  Bike,
  ShoppingCart,
  PenTool as Tool,
  // Users,
  // Phone,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import SearchFilters from "./Search";
import FeaturedDeals from "./cards/FeaturedDeals";
import InventorySection from "./cards/InventoryTypes";
import MotorsSection from "./cards/Motors";
import LogoSection from "./cards/BikeLogos";
import ExcellenceSection from "./cards/Excelence";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50 pt-0">
      {/* Hero Section */}

      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/homeimages/bike1.webp"
          width={300}
          height={200}
          alt="ATV Racing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience the Thrill
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover our collection of high-performance ATVs and accessories
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Search section  */}
      <SearchFilters />

      {/* Inventory section  */}
      <InventorySection />

      {/* card section  */}
      <FeaturedDeals />
      {/* Motors section  */}
      <MotorsSection />

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <Bike className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Latest Models</h3>
            <p className="text-gray-600 mb-4">
              Explore our newest ATV models with cutting-edge features and
              technology.
            </p>
            <a
              href="#"
              className="text-red-600 flex items-center hover:text-red-700"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <ShoppingCart className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Shop Parts</h3>
            <p className="text-gray-600 mb-4">
              Find genuine parts and accessories for your ATV from top
              manufacturers.
            </p>
            <a
              href="#"
              className="text-red-600 flex items-center hover:text-red-700"
            >
              Browse Parts <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <Tool className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Service Center</h3>
            <p className="text-gray-600 mb-4">
              Professional maintenance and repair services by certified
              technicians.
            </p>
            <a
              href="#"
              className="text-red-600 flex items-center hover:text-red-700"
            >
              Book Service <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
      <ExcellenceSection />
      <LogoSection />
    </div>
  );
}

export default HeroSection;
