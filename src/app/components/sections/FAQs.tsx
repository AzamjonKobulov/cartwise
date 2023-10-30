import Image from "next/image";
import { lazy } from "react";

const QuestionsAccordion = lazy(() => import("../common/QuestionsAccordion"));

const Faqs = () => {
  return (
    <section className='relative pt-16 xl:py-40'>
      <div className='pr-6'>
        <div className='lg:absolute left-0 md:w-2/3 lg:w-2/5'>
          <Image
            src='/assets/images/faq-img.png'
            alt='FAQ section banner image'
            width={756}
            height={614}
            className='w-full'
          />
        </div>
      </div>
      <div className='max-w-base mx-auto grid lg:grid-cols-2 px-4 mt-28 md:mt-20 lg:mt-0'>
        <div className='lg:col-start-2 lg:pr-8'>
          <h2 className='relative max-w-md xl:max-w-xl mx-auto text-center lg:mx-0 lg:text-left'>
            Frequently Asked <span className='text-gradient'>Questions</span>
            <div className='absolute -top-16 right-4 xl:-right-10 lg:-top-20'>
              <Image
                height={100}
                width={100}
                src='/assets/images/svgs/smile.svg'
                alt='Smile svg'
                className='w-14 h-14 lg:w-24 lg:h-24'
              />
            </div>
          </h2>

          <QuestionsAccordion />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
