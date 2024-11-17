export const TeamSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Build Amazing <span className="text-red-600">Teams</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Step into our world – where wonder meets work. Our rigorous hiring, versatile teams, global accessibility, and punctual deliveries redefine the essence of collaborative success.
        </p>
        <div className="mt-6">
          <button className="bg-red-600 text-white px-6 py-3 font-medium rounded-full shadow-md hover:bg-red-700 transition">
            Schedule A Call Now! <span className="ml-2">→</span>
          </button>
        </div>
        <div className="mt-12 relative grid grid-cols-5 justify-center items-center gap-6">
          {/* Center member */}
          <div className="col-span-1 col-start-3 relative flex justify-center">
            <div className="bg-red-600 w-24 h-24 absolute top-4 transform rotate-45"></div>
            <img
              src="person3.jpg"
              alt="Team Member 3"
              className="relative z-10 rounded-full w-24 h-24 object-cover"
            />
          </div>
          {/* Left members */}
          <div className="col-span-1 col-start-2 relative flex justify-center">
            <div className="bg-red-600 w-24 h-24 absolute top-4 transform rotate-45"></div>
            <img
              src="person2.jpg"
              alt="Team Member 2"
              className="relative z-10 rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="col-span-1 col-start-1 relative flex justify-center">
            <div className="bg-red-600 w-24 h-24 absolute top-4 transform rotate-45"></div>
            <img
              src="person1.jpg"
              alt="Team Member 1"
              className="relative z-10 rounded-full w-24 h-24 object-cover"
            />
          </div>
          {/* Right members */}
          <div className="col-span-1 col-start-4 relative flex justify-center">
            <div className="bg-red-600 w-24 h-24 absolute top-4 transform rotate-45"></div>
            <img
              src="person4.jpg"
              alt="Team Member 4"
              className="relative z-10 rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="col-span-1 col-start-5 relative flex justify-center">
            <div className="bg-red-600 w-24 h-24 absolute top-4 transform rotate-45"></div>
            <img
              src="person5.jpg"
              alt="Team Member 5"
              className="relative z-10 rounded-full w-24 h-24 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
