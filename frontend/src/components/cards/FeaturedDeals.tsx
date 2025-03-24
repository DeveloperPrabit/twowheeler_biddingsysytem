import React from "react";
import VehicleCard from "./VehicleCard";
// import Image from "next/image";

const FeaturedDeals = () => {
  const vehicles = [
    {
      image: "homeimages/bike1.webp",
      price: 43600,
      title: "2016 Suzuki Jet",
      category: "Sportbike",
      condition: "SPORTBIKE NEW",
      mileage: "1000 mi",
      isSpecial: false
    },
    {
      image: "homeimages/bike2.webp",
      price: 8500,
      title: "2016 Star 650",
      category: "Limited",
      condition: "LIMITED USED",
      mileage: "12500 mi",
      isSpecial: false
    },
    {
      image: "/homeimages/bike4.webp",
      price: 11000,
      title: "2009 Kawasaki JTX",
      category: "Offroad",
      condition: "OFFROAD USED",
      mileage: "12500 mi",
      isSpecial: false
    },
    {
      image: "/homeimages/bike5.webp",
      price: 39999,
      title: "2010 Honda CBR",
      category: "Sportbike",
      condition: "SPORTBIKE USED",
      mileage: "14400 mi",
      isSpecial: true
    },
    {
      image: "/homeimages/bike6.webp",
      price: 70000,
      title: "2016 Sea doo Jet",
      category: "Luxury",
      condition: "LUXURY NEW",
      mileage: "0 mi",
      isSpecial: true
    },
    {
      image: "homeimages/bike7.webp",
      price: 8500,
      title: "2016 Suzuki PX",
      category: "Limited",
      condition: "LIMITED NEW",
      mileage: "12500 mi",
      isSpecial: true
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">FEATURED HOT DEALS</h2>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-white transition">
              POPULAR ITEMS
            </button>
            <button className="text-red-600 hover:text-red-500 transition">
              RECENT ITEMS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;
