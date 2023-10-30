import { MouseEventHandler } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

interface StepButtonProps {
  next: MouseEventHandler<HTMLButtonElement>;
  prev: MouseEventHandler<HTMLButtonElement>;
  step: number;
  steps: React.ReactNode[];
}

const StepButtons: React.FC<StepButtonProps> = ({
  prev,
  next,
  step,
  steps,
}) => {
  return (
    <div className="max-w-2xl mx-auto flex items-center justify-between mt-10">
      <button
        type="submit"
        className={`${
          step > 1 ? 'block' : 'hidden'
        } w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5`}
        onClick={prev}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <p className="flex-1 text-lg lg:text-xl font-medium mt-5">
        Step <span className="font-bold font-montserrat mx-1">{step}</span> of
        <span className="font-bold font-montserrat mx-1">4</span> to claim
        <span className="hidden sm:inline-block ml-1">your reward</span>
      </p>
      <button
        type="submit"
        className={`${
          step < steps.length ? 'block' : 'hidden'
        } w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5`}
        onClick={next}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default StepButtons;
