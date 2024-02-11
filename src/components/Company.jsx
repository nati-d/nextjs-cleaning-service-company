import React from 'react'

const Company = () => {
  return (
    <section className="mx-auto mt-6">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Trusted by top-tier product companies
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/assets/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Company
