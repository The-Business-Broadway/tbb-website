export type FeatureAvailabilityByPlan = {
  title: string;
  availability: boolean | string;
};

export type ComparePlanDataRowProps = {
  featureTitle: string;
  featureAvailabilityByPlan: FeatureAvailabilityByPlan[];
};

export const AvailableInPlanIcon: React.FC = () => {
  return (
    <svg className="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export const UnavailableInPlanIcon: React.FC = () => {
  return (
    <svg className="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>
  );
};

export const ComparePlanDataRow: React.FC<ComparePlanDataRowProps> = ({ featureTitle, featureAvailabilityByPlan }: ComparePlanDataRowProps) => {
  return (
    <ul className="grid lg:grid-cols-6 lg:gap-6">
      <li className="lg:col-span-2 pb-1.5 lg:py-3">
        <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">{featureTitle}</span>
      </li>
      {featureAvailabilityByPlan.map((featureAvailability, index) => (
        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800" key={index}>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">{featureAvailability.title}</span>
            {typeof featureAvailability.availability == "boolean" ? featureAvailability.availability ? <AvailableInPlanIcon /> : <UnavailableInPlanIcon /> : <span className="text-sm text-gray-800 dark:text-neutral-200">{featureAvailability.availability}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
};
