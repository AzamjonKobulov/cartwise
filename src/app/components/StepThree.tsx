import { ChevronRightIcon } from '@heroicons/react/24/outline';

const StepThree: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-7 lg:space-y-14">
      <div className="space-y-3">
        <h2 className="text-center">
          <span className="text-gradient">Referrals</span>
        </h2>
        <h4 className="max-w-3xl mx-auto font-source-pro text-center lg:text-lg xl:text-xl">
          Refer more people to grow your reward
        </h4>
      </div>
      <div>
        <div className="xl:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-7 text-lg lg:text-xl font-medium cursor-pointer">
          <p className="self-center">Your reward</p>
          <p className="text-base self-center">xxx Secured</p>
          <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
            <button
              type="submit"
              className="bg-btn-gr hover:bg-btn-gr-reverse flex items-center text-base justify-center text-white rounded-full transition-all duration-200 space-x-2.5 px-5 py-3"
            >
              Claim Reward
            </button>
          </div>
        </div>
      </div>
      <h4 className="max-w-3xl mx-auto font-source-pro text-center lg:text-lg xl:text-xl">
        Only ZZZ in rewards in is available
      </h4>
      <div className="grid lg:grid-cols-3">
        <form className="flex flex-col gap-5 lg:text-lg xl:text-xl">
          <label
            htmlFor="phone"
            className="flex flex-col xl:flex-row items-start sm:items-center justify-between gap-1.5 lg:text-xl font-medium cursor-pointer"
          >
            <span>Referral Name</span>
            <input
              type="text"
              name="referralname"
              placeholder="Enter your phone number"
              className="w-full sm:w-2/3 xl:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
            />
          </label>
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/3 bg-btn-gr hover:bg-btn-gr-reverse flex items-center text-base justify-center gap-7 text-white rounded-full transition-all duration-200 px-5 py-3"
          >
            <span className="font-medium">Refer</span>
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
