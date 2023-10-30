import React from 'react';

const StepButtons: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto flex items-center justify-between px-6">
      <button
        type="submit"
        className="w-16 h-16 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5"
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
      <p className="text-xl font-medium">
        Step <span className="font-bold">1</span> of{' '}
        <span className="font-bold">4</span> to claim reward
      </p>
      <button
        type="submit"
        className="w-16 h-16 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5"
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
