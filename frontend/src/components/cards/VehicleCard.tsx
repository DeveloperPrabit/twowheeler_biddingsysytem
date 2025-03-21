import React from "react";

interface VehicleCardProps {
  image: string;
  price: number;
  title: string;
  category: string;
  condition: string;
  mileage: string;
  isSpecial?: boolean;
}

const VehicleCard = ({
  image,
  price,
  title,
  category,
  condition,
  mileage,
  isSpecial = false
}: VehicleCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group relative">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* Price Tag */}
        <div className="absolute bottom-0 right-0 bg-red-600 text-white px-4 py-2 text-lg font-bold">
          ${price.toLocaleString()}
        </div>
        {/* Special Tag */}
        {isSpecial && (
          <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 transform rotate-45 translate-x-8 translate-y-2">
            SPECIAL
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400 uppercase">{condition}</span>
          <span className="text-xs text-gray-400 uppercase">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>Category: {category}</span>
          <span>Mileage: {mileage}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
