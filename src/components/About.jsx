import React from "react";
import { ChevronRight, Users, Target, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Our Journey
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Transforming digital commerce with innovation, trust, and
              customer-first approach
            </p>
          </div>
        </div>
      </div>

      {/* Company Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <Users className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Customer-Centric
          </h3>
          <p className="text-gray-600">
            Dedicated to providing exceptional experiences and solving customer
            needs
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <Target className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Mission Driven
          </h3>
          <p className="text-gray-600">
            Empowering businesses and individuals through seamless digital
            platforms
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <Globe className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Global Vision
          </h3>
          <p className="text-gray-600">
            Connecting markets, bridging technologies, and creating global
            opportunities
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Incredible Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize digital commerce, we
              started our journey in a small office with big dreams.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we've grown into a technology-driven platform connecting
              millions of customers, sellers, and businesses.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://media.istockphoto.com/id/174950853/photo/denim-textile-industry-weaving-jeans-fabric-on-airjet-looms.jpg?s=612x612&w=0&k=20&c=0wNOiYaE4aQJYwnLFLEHnCpBtl850pH2gbmy5up0sos="
              alt="Company Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Teaser */}
      {/* <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Our Incredible Team
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
              >
                <img
                  src={`/api/placeholder/300/300?${index}`}
                  alt={`Team Member ${index}`}
                  className="w-full rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900">
                  Team Member {index}
                </h4>
                <p className="text-gray-600 text-sm">Role Description</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in being part of our innovative team? Explore
            opportunities and help us shape the future.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
