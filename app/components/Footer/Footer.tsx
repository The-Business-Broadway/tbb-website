export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li>Angular</li>
              <li>.NET</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Explore more</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>AI Development</li>
              <li>Application Development</li>
              <li>Digital Transformation</li>
              <li>Software Development</li>
              <li>Mobile Application Development</li>
              <li>Explore More</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li>Microsoft</li>
              <li>AWS</li>
              <li>Adobe</li>
              <li>Salesforce</li>
              <li>Azure</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Press Releases</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Staffing</h3>
            <ul className="space-y-2">
              <li>IT Outsourcing</li>
              <li>IT Staff Augmentation</li>
              <li>Dedicated Development Teams</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Locations */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Locations</h3>
          <h4 className="text-lg font-bold text-gray-400 uppercase mb-4">
            Regional Offices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-bold">United States</h5>
              <p className="mt-2 text-sm">316, West 12th Street, Austin, Texas</p>
              <p className="mt-1 text-sm">
                P: <span className="text-gray-400">+1 347 560 1951</span>
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold">LATAM</h5>
              <p className="mt-2 text-sm">
                1014, Badajoz, Las Condes Santiago, Chile
              </p>
              <p className="mt-1 text-sm">
                P: <span className="text-gray-400">+56 9 5721 5600</span>
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold">Saudi Arabia</h5>
              <p className="mt-2 text-sm">
                Al Faisaliah Center, King Fahd Road, Riyadh
              </p>
              <p className="mt-1 text-sm">
                P: <span className="text-gray-400">+966 53 788 4874</span>
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold">Pakistan</h5>
              <p className="mt-2 text-sm">DHA Business Hub, Phase-8, Lahore</p>
              <p className="mt-1 text-sm">
                P: <span className="text-gray-400">+92 423 713 6907</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright CodeNinja Inc. 2024 All rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>linked in
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>X
            </a>
            {/* <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-xing"></i>
            </a> */}
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>instagram
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>youtube link
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
