type OurCoreCompetenciesCardProps = {
  id: string;
  title: string;
  competencies: string[];
};

export const OurCoreCompetenciesCard: React.FC<OurCoreCompetenciesCardProps> = ({ id, title, competencies }: OurCoreCompetenciesCardProps) => {
  return (
    <div className="bg-gray-800 text-left rounded-lg p-6 shadow-md">
      <h3 className="text-6xl font-bold text-gray-500 mb-4">{id}</h3>
      <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
      <ul className="text-gray-300 space-y-2">
        {competencies.map((competency, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-2">•</span> {competency}
          </li>
        ))}
      </ul>
    </div>
  );
};
