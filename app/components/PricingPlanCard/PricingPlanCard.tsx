import { CheckMark } from "~/icons/CheckMark";

export type PricingCardProps = {
  title: string;
  pricingText: string;
  description: string;
  features: string[];
  selected?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({ title, pricingText, description, features, selected = false }: PricingCardProps) => {
  return (
    <div className={!selected ? "flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800" : "flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700"}>
      {selected && (
        <p className="mb-3">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">Most popular</span>
        </p>
      )}
      <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">{title}</h4>
      <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">{pricingText}</span>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">{description}</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-2">
            <CheckMark />
            <span className="text-gray-800 dark:text-neutral-400">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        className={!selected ? 
          "mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-none focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400"
        : "mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"}
        href="/">
        Get started
      </a>
    </div>
  );
};
