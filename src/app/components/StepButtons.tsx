import React from 'react';

const StepButtons: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto flex items-center justify-between mt-5">
      <button
        type="submit"
        className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <p className="md:text-lg lg:text-xl font-medium mt-5">
        Step <span className="font-bold font-montserrat">1</span> of{' '}
        <span className="font-bold font-montserrat">4</span> to claim{' '}
        <span className="hidden sm:inline-block">reward</span>
      </p>
      <button
        type="submit"
        className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default StepButtons;
