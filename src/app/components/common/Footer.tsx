import Image from "next/image";

const contactInfo = {
  address: () => (
    <>
      cartwise savings ltd, Suite 172, <br />
      4 Blenheim Court, Peppercorn Close, <br />
      Peterborough, <br />
      PE1 2DU, UK
    </>
  ),
  email: "cartwiseteam@gmail.com",
  phone: "+44 (0) 2035761559",
};

const Footer = () => {
  return (
    <footer className='bg-footer-bg bg-cover bg-no-repeat mt-20 pt-20 lg:pt-32 md:px-10'>
      <div className='relative w-60 h-12 xxl:w-[376px] xxl:h-[70px] mx-auto'>
        <Image src='/assets/logo-white.svg' fill alt='White logo for footer' />
      </div>
      <div className='relative max-w-[820px] mx-auto md:flex items-start justify-between text-white text-center md:text-left mt-12'>
        <div className='pt-3 lg:pt-6'>
          <p className='text-xl md:text-2xl font-bold '>Get in Touch with Us</p>
          <div className='flex items-start justify-center md:justify-start gap-4 mt-6 lg:mt-9'>
            <Image
              width={24}
              height={24}
              src='/assets/images/svgs/location.svg'
              alt='Location icon'
            />
            <p className='w-56 md:w-72 font-medium text-lg md:text-xl xl:pr-10'>
              {contactInfo.address()}
            </p>
          </div>
        </div>
        <div className='relative w-full h-px md:w-px md:h-44 lg:h-56'>
          <Image fill src='/assets/images/svgs/line-1.svg' alt='line' />
        </div>
        <div className='pt-6'>
          <p className='text-xl md:text-2xl font-bold '>Contact Us</p>
          <div className='flex items-start justify-center  md:justify-start gap-4 mt-6 lg:mt-9'>
            <Image
              width={24}
              height={24}
              src='/assets/images/svgs/email.svg'
              alt='Email icon'
            />
            <p className='font-medium text-lg md:text-xl'>
              {contactInfo.email}
            </p>
          </div>

          <div className='flex items-start justify-center md:justify-start gap-4 mt-5'>
            <Image
              width={24}
              height={24}
              src='/assets/images/svgs/call.svg'
              alt='Phone Icon'
            />
            <p className='font-bold text-lg md:text-xl'>{contactInfo.phone}</p>
          </div>
        </div>
      </div>

      <div className='mt-20 pb-5 px-10'>
        <p className='font-source-pro md:text-lg font-medium text-white tracking-tighter text-center '>
          ©cartwise savings ltd. {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
