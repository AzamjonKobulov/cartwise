import Image from "next/image";
import SignUpForm from "../common/SignUpForm";

const AffordableMeals = () => {
  return (
    <section className='max-w-7xl mx-auto md:flex items-center mt-28 px-3 md:px-9'>
      <div className='max-w-xs lg:max-w-md w-full mx-auto order-1'>
        <Image
          width={529}
          height={848}
          src='/assets/images/mobile-with-coins.png'
          alt='Affordable Banner'
          className='w-full h-full'
        />
      </div>
      <div className='max-w-md lg:max-w-xl mx-auto md:mx-0 mt-10 md:mt-0'>
        <div className=' text-center md:text-left pb-3'>
          <h1>
            <span className='text-gradient'>Affordable</span> and Nutritious
            Meals Made Easy
          </h1>
          <p className='text-xl/8 tracking-tighter mt-8 max-w-md'>
            Unlock Savings and Achieve Your Health Goals with
            cartwise&apos;s Smart Choices
          </p>
        </div>

        <SignUpForm />
      </div>
    </section>
  );
};

export default AffordableMeals;
