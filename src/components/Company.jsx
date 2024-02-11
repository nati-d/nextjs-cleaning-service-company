import React from 'react';
import Image from 'next/image';

const Company = () => {
  return (
    <section className="mx-auto mt-6">
      <div className="container px-5 mx-auto lg:px-24">
        <div className="flex flex-col w-full mb-4 text-left lg:text-center">
          <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
            Trusted by top-tier product companies
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Google-Logo.webp"
              alt="Google Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Shopify-Logo.svg"
              alt="Shopify Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Cloudflare-Logo.svg"
              alt="Cloudflare Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/PayPal-Logo.png"
              alt="Paypal Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
