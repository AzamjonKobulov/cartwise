import StepButtons from 'app/components/StepButtons';
import StepOne from 'app/components/StepOne';

const page: React.FC = () => {
  return (
    <div className="max-w-base mx-auto px-6 py-10 lg:py-16">
      <StepOne />
      <StepButtons />
    </div>
  );
};

export default page;
