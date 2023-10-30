import React from 'react';

const StepThree: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
      <div className="space-y-3">
        <h2 className="text-center">
          <span className="text-gradient">Welcome</span> to Cartwise
        </h2>
        <h4 className="max-w-3xl mx-auto font-source-pro text-center md:text-lg lg:text-xl">
          Refer more people to grow your reward
        </h4>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-1.5 text-lg md:text-xl font-medium cursor-pointer"
        >
          <span>Phone</span>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full sm:w-2/3 lg:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
          />
        </label>
      </div>
    </div>
  );
};

export default StepThree;
