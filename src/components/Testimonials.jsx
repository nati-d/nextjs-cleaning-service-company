import React from 'react';
import { Carousel } from 'react-carousel'; // Import Carousel from react-carousel

const Testimonials = () => {
  const testimonialData = [
    {
      name: 'John Doe',
      company: 'ABC Corporation',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Inc.',
      testimonial:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Customer Testimonials</h2>
        <Carousel {...settings}> {/* Replace Slider with Carousel */}
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md text-center">
              <p className="text-gray-700 leading-relaxed">{testimonial.testimonial}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
