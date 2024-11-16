type WhyChooseUsFeatureCardProps = {
  title: string;
  description: string;
  imageURL: string;
  imageAlt?: string;
};

export const WhyChooseUsFeatureCard: React.FC<WhyChooseUsFeatureCardProps> = ({ title, description, imageURL, imageAlt = "feature card alt" }: WhyChooseUsFeatureCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-start mb-4">
        <img src={imageURL} alt={imageAlt} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
};
