import { LightGraySectionLayout } from "~/layouts/LightGraySectionLayout"
import { WhyChooseUsFeatureCard } from "./WhyChooseUsFeatureCard"

export const WhyChooseUs: React.FC = () => {
  return (
    <LightGraySectionLayout>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose <span className="text-red-600">The Business Broadway</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">At The Business Broadway, we believe in transforming businesses with innovative and reliable technology solutions.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <WhyChooseUsFeatureCard title="Customer-First Approach" description="The Business Broadway&apos;s problem-solving mindset and commitment to generating value through a deep understanding of business helps us forge long-term partnerships with our clients." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/enhance-customer-satisfaction.svg" />
          <WhyChooseUsFeatureCard title="Core Central Platform" description="We leverage our central development RAD platform, to integrate situational, vertical and domain-tuned intelligence to build market-competitive applications tailored to the business needs." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/360-degree.svg" />
          <WhyChooseUsFeatureCard title="Leveraging Hybrid Intelligence" description="At The Business Broadway, we capitalize on technology in the best way possible, leveraging human intelligence and artificial intelligence (AI) to boost productivity and provide transformative products and services." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/rapid-application-delivery.svg" />
          <WhyChooseUsFeatureCard title="Industry Agnostic Solution Architects" description="Our vendor-neutral approach, global network of technical experts, and the capability to innovate position us to deliver value-added offerings across the globe." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/client-centric-orientation.svg" />
          <WhyChooseUsFeatureCard title="Strategic Global Presence" description="Spread across 5 locations, The Business Broadway's global strategic hubs strive to make innovative technology accessible, tackling complex problems across diverse domains." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/global-reach-local-expertise.svg" />
          <WhyChooseUsFeatureCard title="The Business Broadway Alliance Network" description="By bringing together individual technical consultants from FAANG companies and our in-house engineering teams, we enable businesses to access deep technical expertise at 90% less cost a significantly lower cost." imageURL="https://the-business-broadway.github.io/tbb-website-assets/why-choose-us/tailored-teams-agile-project-management.svg" />
        </div>
      </div>
    </LightGraySectionLayout>
  );
};
