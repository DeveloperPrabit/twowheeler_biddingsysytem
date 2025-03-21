// components/VideoSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

const ExcellenceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-black text-white px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Excellence in Motorsport <br /> Services Since 1987
          </h2>
          <div className="w-20 h-[2px] bg-red-500 mb-4"></div>
          <p className="text-gray-300 mb-4">
            No doubt you’ve heard Los Angeles described as having a distinct
            ‘car culture.’ Part of the joy of living in Southern California is
            owning a car so you can easily enjoy all.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              • Sed consectetur massa bibendum dui ultrices, bibendum lorem
              placerat.
            </li>
            <li>
              • Etiam fermentum eu diam eu malesuada. Curabitur porttitor
              elementum fringilla.
            </li>
            <li>
              • Vestibulum sit amet justo sed arcu dictum varius lacinia nec
              lectus.
            </li>
            <li>
              • Integer rutrum, et lobortis posuere, commodo aliquam magna arcu
              id tortor.
            </li>
          </ul>
        </div>

        {/* Right Side - Video Section */}
        <div className="flex-1 relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src="/images/exce.jpg"
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white/80 hover:bg-white text-red-600 rounded-full p-3 transition duration-300"
                >
                  <PlayCircle className="w-14 h-14" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
