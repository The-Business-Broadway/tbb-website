import { useEffect, useState } from "react";

export const Hero = () => {
  const slides = ["https://via.placeholder.com/1920x1080", "https://via.placeholder.com/1920x1080?text=Slide+2", "https://via.placeholder.com/1920x1080?text=Slide+3"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${slide})` }}></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Application Modernization For 99th Percentile</h1>
        <p className="mt-4 text-lg">With Vendor Neutral Viewpoint</p>
        <a href="/" className="inline-flex items-center mt-6 bg-red-600 px-6 py-3 rounded text-white font-medium hover:bg-red-700 transition">
          Learn More <span className="ml-2">→</span>
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
        <div
          className="h-1 bg-red-600"
          style={{
            width: "100%",
            animation: "progress 5s linear infinite",
          }}
        ></div>
      </div>
    </section>
  );
};
