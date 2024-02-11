import React from 'react';
import { FaBuilding, FaHome, FaWrench, FaBroom } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      icon: <FaBuilding size={40} color="#3498db" />,
      title: 'Office Cleaning',
      description: 'Keep your corporate workspace clean and conducive for a productive environment.',
    },
    {
      icon: <FaHome size={40} color="#2ecc71" />,
      title: 'Residential Cleaning',
      description: 'Offering professional cleaning services for homes, ensuring a clean and healthy living space.',
    },
    {
      icon: <FaWrench size={40} color="#e74c3c" />,
      title: 'Industrial Cleaning',
      description: 'Specialized cleaning solutions for industrial facilities, warehouses, and manufacturing plants.',
    },
    {
      icon: <FaBroom size={40} color="#f39c12" />,
      title: 'Deep Cleaning',
      description: 'Thorough and detailed cleaning to reach every nook and corner for a spotless environment.',
    },
  ];

  return (
    <div className="container mx-auto my-16 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md text-center transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
