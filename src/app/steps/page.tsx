'use client';

import { useState } from 'react';

import StepButtons from '../components/common/StepButtons';
import StepOne from 'app/components/StepOne';
import StepTwo from 'app/components/StepTwo';
import StepThree from 'app/components/StepThree';
import StepFour from 'app/components/StepFour';

const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];

const page: React.FC = () => {
  const [curStep, setCurStep] = useState<number>(1);

  function prevStep() {
    curStep > 1 ? setCurStep((prev) => prev - 1) : setCurStep(1);
  }

  function nextStep() {
    curStep < steps.length ? setCurStep((prev) => prev + 1) : setCurStep(4);
  }

  return (
    <div className="max-w-base mx-auto text-center px-6 pt-10 pb-7 lg:py-16">
      {steps.map((step, idx) => (
        <div key={idx} className={`${curStep - 1 !== idx ? 'hidden' : ''}`}>
          {step}
        </div>
      ))}
      <StepButtons
        prev={prevStep}
        next={nextStep}
        step={curStep}
        steps={steps}
      />
    </div>
  );
};

export default page;
