import React from 'react';

const StepFour: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-7 lg:space-y-14">
      <div className="space-y-3">
        <h2 className="text-center">
          <span className="text-gradient">Claim</span> Reward
        </h2>
        <h4 className="max-w-3xl mx-auto font-source-pro text-center lg:text-lg xl:text-xl">
          Claim ZZZ in reward
        </h4>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 text-xl font-semibold">
        <div className="h-64 grid place-content-center bg-brand-gren-100 cursor-pointer rounded-lg p-10">
          LIDL Gift Card
        </div>
        <div className="h-64 grid place-content-center bg-brand-gren-100 cursor-pointer rounded-lg p-10">
          Amazon Gift Card
        </div>
        <div className="h-64 grid place-content-center bg-brand-gren-100 cursor-pointer rounded-lg p-10">
          PayPal transfer
        </div>
      </div>
      <h4 className="max-w-3xl mx-auto font-source-pro text-center lg:text-lg xl:text-xl">
        The Voucher will be sent to your email:{' '}
        <span className="font-semibold">AAA</span>
      </h4>
      <div className="lg:w-1/2 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <p className="text-lg font-semibold">Lorem, ipsum.</p>
        <button
          type="submit"
          className="w-56 bg-btn-gr self-center hover:bg-btn-gr-reverse flex items-center text-base justify-center gap-7 text-white rounded-full transition-all duration-200 px-5 py-3"
        >
          <span className="font-medium">Claim</span>
        </button>
      </div>
    </div>
  );
};

export default StepFour;
