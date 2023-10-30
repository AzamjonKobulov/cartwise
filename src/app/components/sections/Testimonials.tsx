import React, { lazy } from "react";

const TestimonalsSlider = lazy(() => import("../common/TestimonalsSlider"));

const Testimonials = () => {
  return (
    <section className='relative bg-testimonials bg-no-repeat bg-cover bg-bottom lg:bg-top pt-12 xl:pt-32 2xl:pb-40 mt-14'>
      <h2 className='text-center px-6'>
        Thriving Testimonials: How <br />
        <span className='text-gradient'> cartwise</span> Simplifies Grocery
        Shopping & <br className='hidden lg:block' /> Promotes
        <span className='text-gradient'> Healthy Living</span>
      </h2>

      <div className='relative overflow-hidden pt-24 md:pt-32 md:mt-10 lg:mt-16 px-6'>
        <TestimonalsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
