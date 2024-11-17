import { useState } from "react";
import { DarkGraySectionLayout } from "~/layouts/DarkGraySectionLayout";

export const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "Building an E-Logistics Powerhouse with a The Business Broadway's Central Proprietary RAD Platform",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title:
        "Revolutionizing Retail Operations with an Advanced AI-Powered Analytics Platform",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Enhancing Financial Services with a Custom Blockchain Solution",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev: number) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <DarkGraySectionLayout>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Empowering Businesses with Transformative Experiences:{" "}
            <span className="text-red-500">Our Successful Stories</span>
          </h1>
          <p className="text-lg mb-8">
            Explore the journeys of enterprises that have partnered with us to
            leverage transformative solutions, delivering exceptional customer
            experiences across various industries.
          </p>
          <a
            href="/"
            className="inline-flex items-center text-lg text-white font-medium hover:text-red-500 transition"
          >
            Explore all Success Stories →
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-800 via-red-900 to-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            {/* Slide Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4 uppercase">
                {slides[currentSlide].title}
              </h3>
            </div>
            <div className="flex-1">
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={handlePrev}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white"
            >
              ←
            </button>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-red-500" : "bg-gray-500"
                }`}
              ></button>
            ))}
            <button
              onClick={handleNext}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </DarkGraySectionLayout>
  );
};
