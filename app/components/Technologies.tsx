import React from "react";
import { LightGraySectionLayout } from "~/layouts/LightGraySectionLayout";

const technologies = ["https://the-business-broadway.github.io/tbb-website-assets/technologies/nextjs.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/singlespa.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/express.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/aws.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/mqrabbit.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/redis.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/postgre.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/nestjs.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/fastapi.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/mongodb.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/playwright.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/cypress.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/open-ai.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/autogen.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/kubernetes.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/digital-ocean.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/microsoft-azure.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/google-cloud.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/amazon-eks.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/selenium.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/net-core.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/crew-ai.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/nodejs.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/python.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/reactjs.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/vuejs.svg",
  "https://the-business-broadway.github.io/tbb-website-assets/technologies/angularjs.svg",
];

export const Technologies: React.FC = () => {
  const getClassNames = (index: number) => {
    if (index > 17)
      return "group flex justify-center items-center p-5 border-r border-light-gray max-lg:border-0 lg:border-t-0 lg:border-l-0";
    else if (index === 8 || index === 15)
      return "group flex justify-center items-center p-5 border-b border-light-gray max-lg:border-0 lg:border-t-0 lg:border-l-0 lg:border-r-0";
    else
      return "group flex justify-center items-center p-5 border-b border-r border-light-gray max-lg:border-0 lg:border-t-0 lg:border-l-0 lg:border-r-0";
  }

  return (
    <LightGraySectionLayout>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Technologies <span className="text-red-500">We Work With</span>
        </h2>
        <p className="text-gray-600 mb-8">
          We leverage diverse cutting-edge technologies to deliver the perfect solution for your needs.
        </p>
        <div className="relative grid grid-cols-3 lg:grid-cols-9 w-full 2xl:w-10/12 3xl:w-11/12 shadow-[inset_5px_-3px_163px_55px_#FFF] select-none">
          {technologies.map((tech, index) => (
            <div key={index} className={getClassNames(index)}>
              <img alt="tech" loading="lazy" width="100" height="100" decoding="async" data-nimg={index} className="object-contain w-auto h-[100px] transition-all duration-300 ease-out grayscale group-hover:grayscale-0" src={tech} style={{color: "transparent"}} />
            </div>
          ))}
        </div>
      </div>
    </LightGraySectionLayout>
  );
};
