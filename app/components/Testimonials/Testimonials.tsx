import { useState } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Brett Ulrich",
      title: "VP, Engineering, Life Force",
      feedback:
        "We've had the pleasure of working with CodeNinja as our technology partner for the past four years, and it's been an incredible journey. Their engineering teams have been instrumental in building and optimizing our product's backend and front-end systems, enabling us to deliver modern care experiences and improved longevity. We look forward to continuing this strong partnership.",
      image: "https://via.placeholder.com/100",
      linkedIn: "#",
    },
    {
      name: "John Doe",
      title: "CTO, Example Corp",
      feedback:
        "CodeNinja's team was instrumental in helping us modernize our legacy systems. Their proactive approach and dedication to delivering results were remarkable.",
      image: "https://via.placeholder.com/100",
      linkedIn: "#",
    },
    {
      name: "Jane Smith",
      title: "CEO, Startup Inc.",
      feedback:
        "Thanks to CodeNinja, we scaled our application to handle millions of users seamlessly. Their expertise in scalable architecture is unmatched.",
      image: "https://via.placeholder.com/100",
      linkedIn: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        What Clients Say <span className="text-red-600">About CodeNinja</span>
      </h2>
      <p className="text-center text-gray-600 mt-4">
        Our success is measured by our partners’ satisfaction. We strive to
        exceed expectations with every project.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Testimonial Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 flex flex-col relative">
          <div className="flex items-center space-x-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-500 mt-1">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700">{testimonials[currentIndex].feedback}</p>
          <a
            href={testimonials[currentIndex].linkedIn}
            className="inline-block mt-4 text-gray-500 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.653-3-1.528-3 0v5.5h-3v-10h3v1.5c1.396-2.586 6-2.777 6 2.476v6.024z"
              />
            </svg>
          </a>

          {/* Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              className="bg-gray-100 p-2 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              ←
            </button>
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    index === currentIndex ? "border-red-600" : "border-gray-300"
                  } overflow-hidden`}
                >
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-gray-100 p-2 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Clutch Ratings */}
        <div className="flex flex-col items-center lg:items-end space-y-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Clutch"
              className="w-20"
            />
            <div>
              <p className="text-xl font-bold">4.9/5.0</p>
              <p className="text-gray-500">45 Reviews</p>
            </div>
          </div>
          <div className="bg-gray-100 py-4 px-6 rounded-lg shadow">
            <p className="font-bold">Clutch</p>
            <p className="text-sm text-gray-500">GLOBAL</p>
            <p className="text-sm text-gray-500">SPRING 2024</p>
          </div>
          <div className="bg-gray-100 py-4 px-6 rounded-lg shadow">
            <p className="font-bold">Clutch</p>
            <p className="text-sm text-gray-500">CHAMPION</p>
            <p className="text-sm text-gray-500">SPRING 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
