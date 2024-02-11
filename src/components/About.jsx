import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
        <div className="lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Team at Work"
            width={600}
            height={400}
            className="rounded-tl-full"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4 text-black">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded with a commitment to excellence, our company has been
            providing top-notch cleaning services since 2022. Over the years,
            we've grown, evolved, and established ourselves as a trusted partner
            for businesses seeking a spotless and welcoming environment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            As a team, we are dedicated to creating cleaner, healthier, and more
            productive spaces for our clients. Our passion for cleanliness and
            attention to detail set us apart in the industry.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-black">Why Choose Us</h2>
          <p className="text-gray-700 leading-relaxed">
            With a team of highly trained professionals, we bring expertise and
            attention to detail to every cleaning project. Our customer-centric
            approach ensures that your specific requirements are met, and our
            customizable solutions set us apart in the industry.
          </p>
          <ul className="list-inside mt-4 list-none">
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" />{" "}
              Personalized cleaning plans tailored to your unique needs.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" /> Use
              of eco-friendly cleaning products for a healthier environment.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" />{" "}
              Timely and efficient services to fit your schedule.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" />{" "}
              Dedicated to excellence with a proven track record of client
              satisfaction.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" />{" "}
              Transparent and competitive pricing to meet your budget.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <FaCheckCircle className="inline-block text-green-600 mr-2" />{" "}
              Ongoing commitment to staying updated with the latest cleaning
              technologies.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/6195966/pexels-photo-6195966.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expertise"
            width={600}
            height={400}
            className="rounded-tr-full"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
