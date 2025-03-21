import React from "react";

function InventorySection() {
  return (
    <div className="min-h-screen">
      {/* all card*/}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Cards */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={`https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80`}
                  alt={`Featured motorcycle ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Sport Bike {item}
                  </h3>
                  <p className="text-gray-600">
                    Experience unmatched performance and style with our latest
                    model.
                  </p>
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InventorySection;
