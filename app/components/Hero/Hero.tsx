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

export const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative w-full h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] bg-white text-black" style={{ backgroundImage: "url('https://the-business-broadway.github.io/tbb-website-assets/banners/hero-banner-1.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 text-white z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            AI Powered Software Engineering For <br /> Software 2.0 And Beyond
          </h1>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white font-medium rounded-lg flex items-center space-x-2 hover:bg-red-700 transition">
            <span>Talk to our AI/ML experts</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-20">
        <div className="flex justify-center items-center space-x-4 py-8 text-white">
          <button className="border-t-2 border-red-600 p-2">Global Capability Center</button>
          <button>AI Powered Software</button>
          <button>Application Modernization</button>
          <button>Industrial AI Application</button>
        </div>
      </div>
    </div>
  );
};
