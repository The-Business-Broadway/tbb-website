import { TrustedByClientCard } from "./TrustedByClientCard";

export const TrustedByClients: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Trusted By <span className="text-red-600">Clients</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">For over a decade, CodeNinja has delivered transformative, value-added solutions, driving innovation and success across diverse industries.</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-center">
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/lifeforce.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/locka.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/office-timeline-logo.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/a-stat.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/svx.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/almarai-logo.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/mkhdoom.svg" />
          <TrustedByClientCard imageURL="https://the-business-broadway.github.io/tbb-website-assets/clients/24seven.svg" />
        </div>
      </div>
    </div>
  );
};
