// Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";

type SubscriptionFormData = {
  name: string;
  email: string;
};

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SubscriptionFormData>();

  const onSubmit = (data: SubscriptionFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-red-500 font-bold mb-4">MOTORS</h3>
            <p className="text-sm mb-4">
              Fusce interdum ipsum egestas urna amet fringilla, at placerat ex
              venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus ar
              at amet bibendum nibh.
            </p>
            <p className="text-sm">
              Proin nec egestas nibh, eget egestas urna. Phasellus sit amet
              vehicula nunc. In hac habitasse platea dictumst.
            </p>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="font-semibold mb-4">PHOTO GALLERY</h3>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/homeimages/bike1.webp"
                alt="Gallery"
                width={200}
                height={200}
                className="rounded w-full h-auto"
              />
              <Image
                src="/homeimages/bike2.webp"
                alt="Gallery"
                width={200}
                height={200}
                className="rounded w-full h-auto"
              />
              <Image
                src="/homeimages/bike3.webp"
                alt="Gallery"
                width={200}
                height={200}
                className="rounded w-full h-auto"
              />
              <Image
                src="/homeimages/hero.webp"
                alt="Gallery"
                width={200}
                height={200}
                className="rounded w-full h-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sell"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Sell a car
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Coming soon
                </Link>
              </li>
              <li>
                <Link
                  href="/newsroom"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> About us
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Shop item
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-calculator"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Loan Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/typography"
                  className="hover:text-white flex items-center"
                >
                  <span className="mr-2">›</span> Typography
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-semibold mb-4">SUBSCRIBE</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">Name is required</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    Valid email is required
                  </span>
                )}
              </div>
              <p className="text-xs mb-2">Get latest updates and offers.</p>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded uppercase text-sm font-bold hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs flex justify-between items-center">
          <p>
            Copyright © {new Date().getFullYear()}. Motors – WordPress Theme by
            StylemixThemes
          </p>
          <button className="p-2 bg-gray-800 rounded" aria-label="Back to top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
