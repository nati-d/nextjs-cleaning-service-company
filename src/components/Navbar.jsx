"use client"
// Import necessary modules
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  // Define your navigation links
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  // Get the current route using useRouter hook
  const router = usePathname();

  return (
    <>
      <div className="hidden md:flex justify-around items-center m-auto p-3 shadow-lg">
        {/* Logo */}
        <div className="h-8 w-8">
          <h1 className="font-extrabold text-2xl">Logo</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-10">
          {links.map((link) => (
            <Link href={link.path} key={link.title} className={`text-sm text-gray-800 ${router === link.path ? 'font-bold border-b-2 border-yellow-500' : 'hover:text-indigo-500'} `}>
                {link.title}
            </Link>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="p-2 bg-blue-600 rounded-md">
          <h1 className="text-lg font-bold text-white">Call Now: (+251) 910-123-456</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
