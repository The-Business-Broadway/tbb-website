import { EnhanceCustomerSatisfaction } from "~/icons/EnhanceCustomerSatisfaction";

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose <span className="text-red-600">CodeNinja</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">At CodeNinja, we believe in transforming businesses with innovative and reliable technology solutions.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-start mb-4">
              <EnhanceCustomerSatisfaction />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Customer-First Approach</h3>
            <p className="mt-2 text-gray-600 text-sm">CodeNinja&apos;s problem-solving mindset and commitment to generating value through a deep understanding of business helps us forge long-term partnerships with our clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
