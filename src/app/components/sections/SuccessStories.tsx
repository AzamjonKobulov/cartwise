import { lazy } from "react";

const SuccessStoriesSlider = lazy(
  () => import("../common/SuccessStoriesSlider")
);
const SuccessStories = () => {
  return (
    <section className='relative overflow-hidden mt-20 md:mt-28 xl:mt-40'>
      <h2 className='max-w-xs md:max-w-xl lg:max-w-4xl mx-auto text-center px-6'>
        Real <span className='text-gradient'>Success Stories</span> From The
        Real Customers
      </h2>
      <SuccessStoriesSlider />
    </section>
  );
};

export default SuccessStories;
