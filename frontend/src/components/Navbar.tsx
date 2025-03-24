// // "use client";
// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { FaFacebookF, FaTwitter, FaInstagram, FaBell } from "react-icons/fa";
// // // import Image from "next/image";

// // const Navbar = () => {
// //   const [notificationCount, setNotificationCount] = useState<number>(2);

// //   return (
// //     <header className="w-full bg-black text-white">
// //       {/* Top bar with social icons and phone */}
// //       <div className="container mx-auto flex justify-between items-center py-2 px-4">
// //         <div className="flex space-x-4">
// //           <a
// //             href="https://facebook.com"
// //             aria-label="Facebook"
// //             className="hover:text-gray-300"
// //           >
// //             <FaFacebookF />
// //           </a>
// //           <a
// //             href="https://twitter.com"
// //             aria-label="Twitter"
// //             className="hover:text-gray-300"
// //           >
// //             <FaTwitter />
// //           </a>
// //           <a
// //             href="https://instagram.com"
// //             aria-label="Instagram"
// //             className="hover:text-gray-300"
// //           >
// //             <FaInstagram />
// //           </a>
// //         </div>
// //         <div className="flex items-center">
// //           <div className="relative mr-4">
// //             <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
// //             {notificationCount > 0 && (
// //               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 {notificationCount}
// //               </span>
// //             )}
// //           </div>
// //           <a href="tel:878-9674-4455" className="hover:text-gray-300">
// //             878-9674-4455
// //           </a>
// //         </div>
// //       </div>

// //       {/* Main navigation */}
// //       <div className="bg-gradient-to-r from-red-600 to-red-700">
// //         <div className="container mx-auto flex justify-between items-center py-4 px-4">
// //           <div className="flex-shrink-0">
// //             <Link href="/">
// //               <div className="flex items-center cursor-pointer">
// //                 <span className="text-3xl font-bold">motors</span>
// //               </div>
// //             </Link>
// //           </div>

// //           <nav className="hidden md:flex space-x-8">
// //             <NavLink href="/" label="HOME" />
// //             <NavLink href="/inventory" label="INVENTORY" />
// //             <NavLink href="/mega-menu" label="MEGA MENU" />
// //             <NavLink href="/pages" label="PAGES" />
// //             <NavLink href="/blog" label="BLOG" />
// //             <NavLink href="/shop" label="SHOP" />
// //             <NavLink href="/contact" label="CONTACT" />
// //           </nav>

// //           <div className="md:hidden">
// //             <button
// //               className="text-white focus:outline-none"
// //               onClick={() => console.log("Mobile menu toggled")}
// //             >
// //               <svg
// //                 className="h-6 w-6"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M4 6h16M4 12h16M4 18h16"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // // Helper component for navigation links
// // interface NavLinkProps {
// //   href: string;
// //   label: string;
// // }

// // const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
// //   return (
// //     <Link href={href}>
// //       <span className="font-medium cursor-pointer hover:text-gray-200">
// //         {label}
// //       </span>
// //     </Link>
// //   );
// // };

// // export default Navbar;

// "use client";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io5";

// const Navbar = () => {
//   return (
//     <>
//       <header className="w-full">
//         {/* Top Bar */}
//         <div className="bg-black text-white flex justify-between items-center px-8 py-6 text-sm">
//           {/* Left: Social Icons */}
//           <div className="flex gap-4">
//             <FaFacebookF className="cursor-pointer hover:text-gray-400" />
//             <FaTwitter className="cursor-pointer hover:text-gray-400" />
//             <FaInstagram className="cursor-pointer hover:text-gray-400" />
//           </div>

//           {/* Logo */}
//           <h1 className="text-2xl font-bold italic">
//             <span className="text-red-600">m</span>otors
//           </h1>

//           {/* Right: Contact */}
//           <div className="flex items-center gap-2">
//             <IoCallOutline className="text-lg relative">
//               <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-xs px-1.5 py-0.5 rounded-full">
//                 0
//               </span>
//             </IoCallOutline>
//             <span>878-9674-4455</span>
//           </div>
//         </div>
//         <nav className="bg-red-600 w-1/2 mx-auto mt-0 rounded-lg">
//           <ul className="flex justify-center gap-8 py-3 uppercase text-sm tracking-wider text-white font-semibold">
//             <li className="cursor-pointer hover:text-gray-200">Home</li>
//             <li className="cursor-pointer hover:text-gray-200">Inventory</li>
//             <li className="cursor-pointer hover:text-gray-200">Mega Menu</li>
//             <li className="cursor-pointer hover:text-gray-200">Pages</li>
//             <li className="cursor-pointer hover:text-gray-200">Blog</li>
//             <li className="cursor-pointer hover:text-gray-200">Shop</li>
//             <li className="cursor-pointer hover:text-gray-200">Contact</li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center px-8 py-6 text-sm">
        {/* Left: Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
        </div>

        {/* Logo */}
        <h1 className="text-2xl font-bold italic">
          <span className="text-red-600">m</span>otors
        </h1>

        {/* Right: Contact */}
        <div className="flex items-center gap-2">
          <IoCallOutline className="text-lg relative">
            <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </IoCallOutline>
          <span>878-9674-4455</span>
        </div>
      </div>

      {/* Navbar for larger screens */}
      <nav className="bg-red-600  md:block grid  lg:px-56">
        <ul className="flex justify-center gap-8 py-3 uppercase text-sm tracking-wider text-white font-semibold">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">Inventory</li>
          <li className="cursor-pointer hover:text-gray-200">Mega Menu</li>
          <li className="cursor-pointer hover:text-gray-200">Pages</li>
          <li className="cursor-pointer hover:text-gray-200">Blog</li>
          <li className="cursor-pointer hover:text-gray-200">Shop</li>
          <li className="cursor-pointer hover:text-gray-200">Contact</li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center px-8 py-4 bg-red-600">
        <h1 className="text-2xl font-bold italic">
          <span className="text-red-600">m</span>otors
        </h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-red-600">
          <ul className="flex flex-col items-center gap-6 py-3 text-white font-semibold">
            <li className="cursor-pointer hover:text-gray-200">Home</li>
            <li className="cursor-pointer hover:text-gray-200">Inventory</li>
            <li className="cursor-pointer hover:text-gray-200">Mega Menu</li>
            <li className="cursor-pointer hover:text-gray-200">Pages</li>
            <li className="cursor-pointer hover:text-gray-200">Blog</li>
            <li className="cursor-pointer hover:text-gray-200">Shop</li>
            <li className="cursor-pointer hover:text-gray-200">Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
