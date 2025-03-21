"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface Vehicle {
  id: number;
  condition: string;
  category: string;
  brand: string;
}

const SearchFilters = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const conditions = ["New", "Used", "Certified Pre-Owned"];
  const categories = ["ATV", "UTV", "Dirt Bike", "Snowmobile"];
  const brands = ["Yamaha", "Honda", "Kawasaki", "Polaris", "Can-Am"];

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching with filters:", {
      condition: selectedCondition,
      category: selectedCategory,
      brand: selectedBrand
    });
  };

  return (
    <div className="w-full bg-gray-900/95 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Condition Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              CONDITIONS
            </label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select Condition</option>
              {conditions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              CATEGORIES
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              BRANDS
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div>
            <button
              onClick={handleSearch}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              SEARCH
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-right">
          <p className="text-gray-400">
            Found: <span className="text-white font-medium">20 Vehicles</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
