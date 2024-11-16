import { ComparePlanDataRow } from "../ComparePlans/ComparePlanDataRow";
import { ComparePlanHeaderRow } from "../ComparePlans/ComparePlanHeaderRow";

const numberOfSeatsAvailabilityByPlan = [
  { title: "Free", availability: "1" },
  { title: "Startup", availability: "Up to 3" },
  { title: "Team", availability: "Up to 10" },
  { title: "Enterprise", availability: "Unlimited" },
];
const storageAvailabilityByPlan = [
  { title: "Free", availability: "15 GB" },
  { title: "Startup", availability: "1 TB" },
  { title: "Team", availability: "15 TB" },
  { title: "Enterprise", availability: "Unlimited" },
];
const emailSharingAvailabilityByPlan = [
  { title: "Free", availability: true },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const anyTimeAnywhereAccessAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const openHighLowCloseAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const priceVolumeDifferenceIndicatorAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const networkGrowthAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const averageTokenAgeConsumedAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const exchangeFlowAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: false },
  { title: "Enterprise", availability: true },
];
const totalExchangeFundsFlowAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const transactionVolumeAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const totalCirculationAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: false },
  { title: "Enterprise", availability: true },
];
const VelocityOfTokensAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: false },
  { title: "Enterprise", availability: true },
];
const ethGasUsedAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
const devActivityAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: false },
  { title: "Enterprise", availability: true },
];
const topicSearchAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: false },
  { title: "Team", availability: false },
  { title: "Enterprise", availability: true },
];
const relativeSocialDominanceAvailabilityByPlan = [
  { title: "Free", availability: false },
  { title: "Startup", availability: true },
  { title: "Team", availability: true },
  { title: "Enterprise", availability: true },
];
export const PricingPlanTable: React.FC = () => {
  return (
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
        </div>
        <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white/60 backdrop-blur-md dark:bg-neutral-900/60">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2">
              <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Features</span>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Free</span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Free forever</p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Startup</span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">$39 per month billed annually</p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Team</span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">$89 per month billed annually</p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">Enterprise</span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">$149 per month billed annually</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-0">
          <ComparePlanHeaderRow title="General" />
          <ComparePlanDataRow featureTitle="Number of seats" featureAvailabilityByPlan={numberOfSeatsAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Storage" featureAvailabilityByPlan={storageAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Email sharing" featureAvailabilityByPlan={emailSharingAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Any time, anywhere access" featureAvailabilityByPlan={anyTimeAnywhereAccessAvailabilityByPlan} />
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ComparePlanHeaderRow title="Financial data" />
          <ComparePlanDataRow featureTitle="Open/High/Low/Close" featureAvailabilityByPlan={openHighLowCloseAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Price-volume difference indicator" featureAvailabilityByPlan={priceVolumeDifferenceIndicatorAvailabilityByPlan} />
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ComparePlanHeaderRow title="On-chain data" />
          <ComparePlanDataRow featureTitle="Network growth" featureAvailabilityByPlan={networkGrowthAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Average token age consumed" featureAvailabilityByPlan={averageTokenAgeConsumedAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Exchange flow" featureAvailabilityByPlan={exchangeFlowAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Total ERC20 exchange funds flow" featureAvailabilityByPlan={totalExchangeFundsFlowAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Transaction volume" featureAvailabilityByPlan={transactionVolumeAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Total circulation (beta)" featureAvailabilityByPlan={totalCirculationAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Velocity of Tokens (beta)" featureAvailabilityByPlan={VelocityOfTokensAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="ETH gas used" featureAvailabilityByPlan={ethGasUsedAvailabilityByPlan} />
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ComparePlanHeaderRow title="Social data" />
          <ComparePlanDataRow featureTitle="Dev activity" featureAvailabilityByPlan={devActivityAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Topic search" featureAvailabilityByPlan={topicSearchAvailabilityByPlan} />
          <ComparePlanDataRow featureTitle="Relative social dominance" featureAvailabilityByPlan={relativeSocialDominanceAvailabilityByPlan} />
        </div>
        <div className="hidden lg:block mt-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2"></div>
            <div className="col-span-1">
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="/">
                Get started
              </a>
            </div>

            <div className="col-span-1">
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none" href="/">
                Get started
              </a>
            </div>

            <div className="col-span-1">
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="/">
                Get started
              </a>
            </div>

            <div className="col-span-1">
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="/">
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
          <p className="text-sm text-gray-500 dark:text-neutral-400">Need a custom plan?</p>

          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};
