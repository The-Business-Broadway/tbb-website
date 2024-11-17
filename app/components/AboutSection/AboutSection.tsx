export const AboutSection = () => {
  return (
    <div className="bg-gray-900 text-white relative">
      {/* Stats Section */}
      <div className="relative bg-white">
        <div className="absolute inset-x-0 top-[-50px] flex flex-wrap justify-center gap-6">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-48 text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="mt-2">Years of Excellence</p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-48 text-center">
            <h3 className="text-3xl font-bold">400+</h3>
            <p className="mt-2">Projects Delivered</p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-48 text-center">
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="mt-2">Number of Professionals</p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-48 text-center">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="mt-2">Countries Served</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-24 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold">About CodeNinja</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For over a decade, we’ve helped hundreds of clients across various
            industries to innovate faster, remain relevant, and build better
            products and services. Our team of 200+ professionals spread across
            4 locations serving 15+ countries is dedicated to accelerating
            digital empowerment and democratizing innovation by harnessing the
            power of AI. CodeNinja is forging a more equitable future by
            providing transformational consulting, enterprise cloud services,
            technical outsourcing, and software development for a broad range
            of industries across the world.
          </p>
          <a
            href="/"
            className="mt-6 inline-block text-red-500 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://the-business-broadway.github.io/tbb-website-assets/about/about-group.png"
            alt="Team"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Reach Out and Let’s Shape Your Vision into Reality!
          </h2>
          <p className="mt-4 text-gray-400">Kickstart Your Journey</p>
          <div className="mt-6">
            <button className="bg-red-600 text-white px-6 py-3 font-medium rounded-full shadow-md hover:bg-red-700 transition flex items-center justify-center">
              Contact Us <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
