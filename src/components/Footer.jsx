import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white pt-16 pb-8 mt-16">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">WeClean</h1>
          <p className="mb-4">
            <strong className="font-medium">WeClean</strong> is your trusted partner for top-notch cleaning services. We create cleaner, healthier, and more productive spaces for our clients.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <FaFacebook className="h-6 w-6 text-blue-500" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <FaTwitter className="h-6 w-6 text-blue-400" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <FaInstagram className="h-6 w-6 text-pink-500" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - WeClean. All rights reserved.</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Services</p>
          <ul className="text-gray-400">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Office Cleaning
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Industrial Cleaning
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Carpet Cleaning
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Deep Cleaning
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Connect with Us</p>
          <ul className="text-gray-400">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              About Us
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Contact
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Testimonials
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Get a Quote</p>
          <ul className="text-gray-400">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Request a Quote
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Customer Portal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
