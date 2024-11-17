import { useState } from "react";
import { DarkGraySectionLayout } from "~/layouts/DarkGraySectionLayout";

const contentData: { [key: string]: { title: string; description: string; tags: string[] } } = {
  "Emerging Innovations": {
    title: "Emerging Innovations",
    description: "The Business Broadway propels businesses into the future by seamlessly integrating emerging technologies like Blockchain, Data Science, and IoT. Our Managed IT services allow organizations to delegate IT needs, freeing resources for core operations. Elevating software development, we harness emerging tools and technologies to enhance design, code generation, and testing. Join us for cutting-edge solutions that transform industries, ensuring your sustained competitive edge.",
    tags: ["Data Science", "Big Data", "IoT", "Blockchain", "Mixed Reality (AR, VR)"],
  },
  "Managed IT Services": {
    title: "Managed IT Services",
    description: "Comprehensive solutions to manage IT operations, ensuring business continuity and seamless digital transformation.",
    tags: ["Cloud Management", "Infrastructure", "Support"],
  },
  "Application Development": {
    title: "Application Development",
    description: "Custom application development to drive innovation and operational efficiency.",
    tags: ["Mobile Apps", "Web Apps", "Enterprise Solutions"],
  },
  "Software Development": {
    title: "Software Development",
    description: "Robust software solutions tailored to meet complex business requirements.",
    tags: ["Custom Software", "Maintenance", "Scalable Solutions"],
  },
};

export const OurCoreServices: React.FC = () => {
  const [contentTitle, setContentTitle] = useState("Emerging Innovations");
  const [contentDescription, setContentDescription] = useState("The Business Broadway propels businesses into the future by seamlessly integrating emerging technologies like Blockchain, Data Science, and IoT. Our Managed IT services allow organizations to delegate IT needs, freeing resources for core operations. Elevating software development, we harness emerging tools and technologies to enhance design, code generation, and testing. Join us for cutting-edge solutions that transform industries, ensuring your sustained competitive edge.");
  const [contentTags, setContentTags] = useState(["Data Science", "Big Data", "IoT", "Blockchain", "Mixed Reality (AR, VR)"]);
  function updateContent(key: string) {
    const content = contentData[key];
    setContentTitle(content.title);
    setContentDescription(content.description);
    setContentTags(content.tags);
  }

  return (
    // <div className="bg-gray-900">
    <DarkGraySectionLayout>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 border-r">
            <h2 className="text-2xl font-bold text-red-600 p-4">Our Core Services</h2>
            <ul className="space-y-2">
              <li>
                <button onClick={() => updateContent("Emerging Innovations")} className="w-full text-left px-4 py-3 hover:bg-gray-200 transition">
                  Emerging Innovations
                </button>
              </li>
              <li>
                <button onClick={() => updateContent("Managed IT Services")} className="w-full text-left px-4 py-3 hover:bg-gray-200 transition">
                  Managed IT Services
                </button>
              </li>
              <li>
                <button onClick={() => updateContent("Application Development")} className="w-full text-left px-4 py-3 hover:bg-gray-200 transition">
                  Application Development
                </button>
              </li>
              <li>
                <button onClick={() => updateContent("Software Development")} className="w-full text-left px-4 py-3 hover:bg-gray-200 transition">
                  Software Development
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/3 bg-white ">
            <img src="https://via.placeholder.com/800x400" alt="Placeholder" className="w-full mb-4" />
            <div className="w-full p-4">
              <h3 id="content-title" className="text-xl font-bold mb-2">
                {contentTitle}
              </h3>
              <p id="content-description" className="text-gray-700 mb-4">
                {contentDescription}
              </p>
              <div id="tags" className="flex flex-wrap">
                {contentTags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">
                    {tag}
                  </span>
                ))}
                {/* <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">Data Science</span>
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">Big Data</span>
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">IoT</span>
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">Blockchain</span>
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2">Mixed Reality (AR, VR)</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </DarkGraySectionLayout>
  );
};
