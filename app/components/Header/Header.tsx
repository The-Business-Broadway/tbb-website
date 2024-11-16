export const Header: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-xl">CODENINJA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-red-600">
              What We Do
            </a>
            <a href="/" className="text-gray-600 hover:text-red-600">
              Who We Are
            </a>
            <a href="/" className="text-gray-600 hover:text-red-600">
              Insights
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="hidden md:flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Contact Us <span className="ml-2">→</span>
            </button>
            <button className="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
