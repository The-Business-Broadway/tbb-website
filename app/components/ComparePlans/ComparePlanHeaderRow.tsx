export type ComparePlanHeaderProps = {
  title: string;
};

export const ComparePlanHeaderRow: React.FC<ComparePlanHeaderProps> = ({ title }: ComparePlanHeaderProps) => {
  return (
    <ul className="grid lg:grid-cols-6 lg:gap-6">
      <li className="lg:col-span-2 lg:py-3">
        <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">{title}</span>
      </li>
      {/* <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li> */}
    </ul>
  );
};
