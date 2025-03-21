"use client";
import Image from "next/image";

const logos = [
  { src: "/homeimages/ducati.webp", alt: "Ducati" },
  { src: "/homeimages/honda.webp", alt: "Honda" },
  { src: "/homeimages/kawasaki.webp", alt: "Kawasaki" },
  { src: "/homeimages/sendoo.webp", alt: "Sea-Doo" },
  { src: "/homeimages/star.webp", alt: "Star" },
  { src: "/homeimages/suzuki.webp", alt: "Suzuki" },
  { src: "/homeimages/yamaha.webp", alt: "Yamaha" }
];

export default function LogoSection() {
  return (
    <section className="bg-gray-900 py-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-16 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={50}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
