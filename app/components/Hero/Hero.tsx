// import { useEffect, useState } from "react";

// export const Hero = () => {
//   const slides = ["https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-1.webp", "https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-2.jpg", "https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-3.jpg", "https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-4.webp"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [slides.length]);
//   return (
//     <section className="relative h-screen">
//       <div className="absolute inset-0 overflow-hidden">
//         {slides.map((slide, index) => (
//           <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${slide})` }}></div>
//         ))}
//       </div>
//       <div className="relative container mx-auto px-6 py-24 text-center text-white">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">Application Modernization For 99th Percentile</h1>
//         <p className="mt-4 text-lg">With Vendor Neutral Viewpoint</p>
//         <a href="/" className="inline-flex items-center mt-6 bg-red-600 px-6 py-3 rounded text-white font-medium hover:bg-red-700 transition">
//           Learn More <span className="ml-2">→</span>
//         </a>
//       </div>
//       {/* <div className="absolute inset-0 bg-black bg-opacity-50 absolute bottom-[-100] left-0 w-full h-1 bg-gray-300">slider</div> */}
//       <div className="absolute bottom-0 left-0 w-full h-250 bg-gray-300">
//         <div
//           className="h-250 bg-red-600"
//           style={{
//             width: "100%",
//             animation: "progress 5s linear infinite",
//           }}
//         >Babar Javaid</div>
//       </div>
//     </section>
//   );
// };

// export const Hero = () => {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <div className="relative w-full h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] bg-white text-black" style={{ backgroundImage: "url('https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-1.webp')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 text-white z-10">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//             AI Powered Software Engineering For <br /> Software 2.0 And Beyond
//           </h1>
//           <button className="mt-8 px-6 py-3 bg-red-600 text-white font-medium rounded-lg flex items-center space-x-2 hover:bg-red-700 transition">
//             <span>Talk to our AI/ML experts</span>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Slider Navigation */}
//       <div className="absolute bottom-0 w-full bg-black bg-opacity-20">
//         <div className="flex justify-center items-center space-x-4 py-8 text-white">
//           <button className="border-t-2 border-red-600 p-2">Global Capability Center</button>
//           <button>AI Powered Software</button>
//           <button>Application Modernization</button>
//           <button>Industrial AI Application</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from 'react';

export const Hero = () => {
  const slides = [
    {
      text: "Global Capability Center",
      image: "https://via.placeholder.com/1920x1080?text=Slide+1", // Replace with actual image URL
    },
    {
      text: "AI Powered Software",
      image: "https://via.placeholder.com/1920x1080?text=Slide+2", // Replace with actual image URL
    },
    {
      text: "Application Modernization",
      image: "https://via.placeholder.com/1920x1080?text=Slide+3", // Replace with actual image URL
    },
    {
      text: "Industrial AI Application",
      image: "https://via.placeholder.com/1920x1080?text=Slide+4", // Replace with actual image URL
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change the slide manually
  const handleNavigation = (index: number) => {
    setCurrentSlide(index);
  };

  // Automatic slide change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-32 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Application Modernization For 99th Percentile With Vendor Neutral Viewpoint
        </h1>
        <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-medium rounded-md flex items-center">
          Learn More <span className="ml-2">→</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70">
        <div className="flex justify-center space-x-6 py-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`text-sm md:text-lg text-white font-medium ${
                currentSlide === index ? "underline" : ""
              }`}
            >
              {slide.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default HeroSlider÷;
