import React from 'react';

const StepTwo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto  space-y-7">
      <div className="space-y-3">
        <h2 className="text-center">
          <span className="text-gradient">Welcome</span> to Cartwise
        </h2>
        <h4 className="max-w-3xl mx-auto font-source-pro text-center md:text-lg lg:text-xl">
          You Have been invited to c artwise by XXX. If you choose to accept you
          and XXX will earn 10 GBP which you can reclaim as gift card. Only ZZZ
          rewards in is left
        </h4>
      </div>
      <form className="flex flex-col gap-5 md:text-lg lg:text-xl">
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
        <label
          htmlFor="email"
          className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-1.5 text-lg md:text-xl font-medium cursor-pointer"
        >
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 lg:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
          />
        </label>
        <label
          htmlFor="fullname"
          className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-1.5 text-lg md:text-xl font-medium cursor-pointer"
        >
          <span>Full Name</span>
          <input
            type="text"
            name="fullname"
            placeholder="Enter you full name"
            className="w-full sm:w-2/3 lg:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
          />
        </label>
        <label
          htmlFor="numberpeople"
          className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-1.5 text-lg md:text-xl font-medium cursor-pointer"
        >
          <span>Number of People in Household</span>
          <input
            type="text"
            name="numberpeople"
            placeholder="Enter number of people"
            className="w-full sm:w-2/3 lg:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
          />
        </label>
        <label
          htmlFor="numberpeople"
          className="flex flex-col lg:flex-row items-start sm:items-center justify-between gap-1.5 text-lg md:text-xl font-medium cursor-pointer"
        >
          <span>Weekly Grocery Budget</span>
          <input
            type="text"
            name="grocerybudget"
            placeholder="Enter weekly budget"
            className="w-full sm:w-2/3 lg:w-1/2 border border-brand-gray-300/25 rounded-full font-source-pro text-black outline-none xl:text-xl placeholder-black placeholder:text-black/50 tracking-tighter px-5 py-3"
          />
        </label>
      </form>
    </div>
  );
};

export default StepTwo;
