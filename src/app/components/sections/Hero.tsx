import Image from "next/image";
import SignUpForm from "../common/SignUpForm";

const Hero = () => {
  return (
    <section className='relative overflow-hidden lg:overflow-visible '>
      <div className='shadow-nav lg:hidden p-5 -mx-5'>
        <div className='relative w-[270px] mx-auto h-12'>
          <Image src='/assets/logo.svg' alt='cartwise Logo' fill />
        </div>
      </div>
      <div className='w-full h-[28rem] lg:w-2/5 lg:h-full relative lg:absolute lg:-bottom-20 -right-8 lg:right-0 mt-9'>
        <Image
          src='/assets/images/hero.webp'
          className='object-contain'
          fill
          alt='Hero'
          priority
          sizes='(min-width: 808px) 50vw, 100vw'
        />
      </div>
      <div className='max-w-7xl 2xl:max-w-[88.25rem] mx-auto px-5'>
        <div className='py-15 xxl:pb-20 hidden lg:block'>
          <div className='relative w-[270px] h-12'>
            <Image src='/assets/logo.svg' alt='cartwise Logo' fill />
          </div>
        </div>
        <div className='max-w-lg xl:max-w-xl mx-auto lg:ml-0 mt-7 lg:mt-0'>
          <h1 className='text-center lg:text-left'>
            Save Time, Money, and Eat Healthy with{" "}
            <span className='text-gradient'>cartwise</span>
          </h1>
          <ul className='list-disc marker:text-brand-gray font-source-pro xxl:text-xl/normal tracking-tighter space-y-4 mt-10 xxl:mt-14 pl-5'>
            <li>Make affordable, nutritious meals.</li>
            <li>Achieve your health goals.</li>
            <li>Save money.</li>
          </ul>
          <p className='w-64 lg:w-auto mx-auto font-source-pro xxl:text-xl tracking-tighter font-black text-center xl:text-left mt-9'>
            Join us for free today.
          </p>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
