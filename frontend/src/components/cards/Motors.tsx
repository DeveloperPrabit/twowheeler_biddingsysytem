"use client";
import Image from "next/image";

export default function MotorsSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src="/homeimages/Motorbikeonroad.webp"
        alt="Motorbike on road"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-end h-full px-6 md:px-16">
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-lg max-w-lg text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            WELCOME TO THE MOTORS WORLD
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Praesent consequat pharetra commodo. Vestibulum nec lectus nisl.
            Curabitur tellus leo, euismod sit amet gravida at, egestas sed
            lectus.
          </p>
          <button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
