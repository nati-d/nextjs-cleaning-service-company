import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
          <ul className="mt-2">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                href="/services"
                className="text-gray-400 hover:text-white transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-4">Connect with Us</h3>
          <ul className="flex space-x-4 mt-2">
            <li>
              <Link href="#" passHref>
                <FaFacebook className="text-gray-400 hover:text-white transition cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <FaTwitter className="text-gray-400 hover:text-white transition cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <FaLinkedin className="text-gray-400 hover:text-white transition cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <FaInstagram className="text-gray-400 hover:text-white transition cursor-pointer" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
          <p className="mt-2 text-gray-400">
            South African Avenue, Addis Ababa, Ethiopia
          </p>
          <p className="text-gray-400">Phone: (+251) 910-234-456</p>
          <p className="text-gray-400">Email: weclean@gmail.com</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          &copy; 2024 WeClean. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
