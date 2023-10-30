import Image from "next/image";
import { lazy } from "react";

const ComparePricesSlider = lazy(() => import("../common/CompareSlider"));

const Compare = () => {
  return (
    <section className='max-w-base relative overflow-hidden mx-auto pt-16 lg:pb-12 xl:pb-28'>
      <div className='max-w-7xl mx-auto lg:flex items-end px-6'>
        <div className='max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:!max-w-4xl mx-auto lg:mx-0'>
          <div className='relative text-center lg:text-left pt-16 xl:pt-32 pb-32 xl:pb-28'>
            <h2>
              <span className='text-gradient'>Compare Grocery</span> Prices,
              Discover New Recipes, and Find Healthy Options!
              <div className='w-14 h-14 xl:w-25 xl:h-25 absolute top-0 left-1/2 -translate-x-1/2 lg:left-[23%]'>
                <Image
                  width={99}
                  height={50}
                  src='./assets/images/svgs/smile.svg'
                  alt='Smile svg'
                />
              </div>
            </h2>
            <p className='max-w-xl 2xl:max-w-2xl font-source-pro lg:text-lg xl:text-xl tracking-tighter mt-5 md:mt-11'>
              Empowering Your Wallet and Well-being. Unlock Savings, Savor
              Wholesome Delights, and Achieve Optimal Health with{" "}
              <b>Budget-Friendly Grocery Solutions</b>
            </p>

            <div className='w-28 h-28 md:w-32 md:h-32 absolute bottom-0 left-1/2 -translate-x-1/2 lg:-ml-12'>
              <Image fill src='./assets/images/svgs/line.svg' alt='line' />
            </div>
          </div>

          <div className='relative '>
            <ComparePricesSlider />
          </div>
        </div>

        {/* Mobile */}
        <div className='max-w-xs 2xl:max-w-sm mx-auto  flex-1 lg:pr-3 md:pb-12 lg:pb-48 ml-auto mt-20  z-30'>
          <div className='relative w-full h-[450px] xl:h-[693px]'>
            <Image src='/assets/images/mobile.svg' fill alt='Mobile Phone' />
            <div className='absolute -top-8 xl:-top-15 right-4 xl:-right-20 w-12 h-9 xl:w-24 xl:h-15'>
              <Image src='/assets/images/svgs/new.svg' fill alt='New Text' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
