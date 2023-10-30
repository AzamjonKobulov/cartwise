import Image from "next/image";
import SocialNetworks from "../common/SocialNetworks";

const MealPlan = () => {
  return (
    <section className='relative overflow-hidden pt-20 md:pb-20 xl:py-40'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='max-w-md lg:max-w-lg xl:max-w-2xl ml-auto text-center lg:text-left'>
          <h2>
            Easily Organize Your Weekly Meals with a{" "}
            <span className='text-gradient'>Customized Meal</span> Plan
          </h2>
          <p className='max-w-xl font-source-pro lg:text-xl tracking-tight mt-5 pb-5'>
            Our meal planning tool will streamline your culinary journey, saving
            you time and effort.
          </p>

          <SocialNetworks />
        </div>
      </div>
      <div className='relative md:absolute top-0 -left-6 md:left-0 md:w-2/5 h-96 xl:w-1/3 md:h-full max-h-[45rem] mt-20 md:mt-0'>
        <Image
          src='/assets/images/meal-plan.png'
          alt='Meal Plan banner'
          fill
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default MealPlan;
