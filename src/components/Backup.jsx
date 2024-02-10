"use client";

import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
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
  return (
    <>
      <div className="hidden md:flex justify-around items-center  m-auto p-5 shadow-lg">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex gap-10">
          {links.map((link) => (
            <Link to={link.path} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <h1 className="text-xl font-bold">Call Now: (+251) 910-123-456</h1>
        </div>
      </div>

      <div className="flex md:hidden px-2 py-4">
        <h1>Logo</h1>
        
      </div>
    </>
  );
};

export default Navbar;
