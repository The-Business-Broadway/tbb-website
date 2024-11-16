import { OurCoreCompetenciesCard } from "./OurCoreCompetenciesCard";

export const OurCoreCompetencies: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-red-600">Core</span> Competencies
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <OurCoreCompetenciesCard id="01" title="AI Driven Software Development" competencies={[
            "Data-driven AI solutions and enterprise application development",
            "AI model development and customization for tailored experiences",
            "AI & ML implementations led by in-house engineering experts",
            "AI & ML strategic consulting to help drive business transform",
          ]} />
          <OurCoreCompetenciesCard id="02" title="Offshore & Nearshore Development" competencies={[
            "On-premises managed staff to ensure collaborative success and innovation",
            "Dedicated core capability centers and development hubs in MENSA and LATM",
            "Domain tuned situational intelligence and deep business expertise to drive success",
          ]} />
          <OurCoreCompetenciesCard id="03" title="End-to-End Cloud Implementation" competencies={[
            "Cloud consulting to drive infrastructure migration and adoption",
            "App modernization to enhance performance and sustainability",
            "Cloud-managed services to ensure seamless operations and support",
            "Robust cybersecurity services to protect and scale business growth",
          ]} />
        </div>
      </div>
    </div>
  );
};
