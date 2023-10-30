import Image from "next/image";
export const about = [
  {
    title: "Comparing Grocery Prices",
    text: () => "Easy Price Comparison Across Multiple Vendors",
    img: "comparing-grocery-prices",
  },
  {
    title: "Saving Time and Money",
    text: () => <><sup>*</sup>Notifications for Deals and Discounts</>,
    img: "saving-time-money",
  },
  {
    title: "Discovering Healthy Recipes",
    text: () => <><sup>*</sup>Customized Recipes and Meal Plans for Your Healthy Palate</>,
    img: "discovering-healthy-recipes",
  }
];

const About = () => {
  return (
    <section className='max-w-7xl mx-auto px-9 mt-24 md:mt-36'>
      <h2 className='relative text-center'>
        Know{" "}
        <span className='relative'>
          About
          <Image
            width={100}
            height={100}
            src='./assets/images/svgs/title.svg'
            alt='sun icon'
            className='absolute -top-1/2 left-[90%] w-10 h-11 md:w-14 md:h-16'
          />{" "}
        </span>
        <br />
        <span className='text-gradient'>Features</span>
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16 mt-14 xl:mt-25'>
        {about.map((item, idx) => (
          <div className='text-center' key={idx}>
            <div className='w-60 mx-auto h-56'>
              <Image
                width={100}
                height={100}
                className='w-full h-full'
                src={`./assets/images/about/${item.img}.svg`}
                alt={item.title}
              />
            </div>

            <div>
              <h3 className='text-display-xl/7 font-bold mt-6 md:mt-12'>
                {item.title}
              </h3>
              <p className='w-72 mx-auto font-source-pro leading-7 mt-2.5 xl:mt-4'>
                {item.text()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
