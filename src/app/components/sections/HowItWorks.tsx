import Image from "next/image";
import { AddInSecond, SaveWithUs, ShopLikeNormal } from "../icons";

const howItWorks = [
  {
    id: "01",
    title: "Add in Seconds",
    text: "Add items to a cart.",
    img: <AddInSecond />,
  },
  {
    id: "02",
    title: "Compare Prices",
    text: "Compare prices from multiple vendors and choose the best deal.",
    img: <ShopLikeNormal />,
  },
  {
    id: "03",
    title: "Save with Us",
    text: "Go shopping with confidence and save money.",
    img: <SaveWithUs />,
  },
];

const HowItWorks = () => {
  return (
    <section className='bg-how-it-works-bg bg-cover bg-no-repeat bg-bottom md:mt-5'>
      <div className='max-w-base mx-auto pt-40 xl:pt-56 pb-32'>
        <h2 className='text-center'>
          How It{" "}
          <span className='relative text-gradient'>
            Works
            <div className='absolute -top-6 -right-8 md:-top-8 md:-right-12'>
              <Image
                width={58}
                height={64}
                src='./assets/images/svgs/sun.svg'
                alt='sun'
                className='w-10 h-11 md:w-14 md:h-16'
              />
            </div>
          </span>
        </h2>

        <div className='px-10 mt-10 md:mt-16'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-28'>
            {howItWorks.map((item) => (
              <div key={item.id} className='text-center'>
                <div className='flex items-center -space-x-8'>
                  <p className='font-montserrat text-[120px] leading-none font-black text-stroke'>
                    {item.id}
                  </p>
                  <div className='w-36 h-36 xl:w-48 xl:h-48 shrink-0'>
                    {item.img}
                  </div>
                </div>
                <h3 className='text-xl xl:text-2xl font-bold mt-3'>
                  {item.title}
                </h3>
                <p className='font-source-pro xl:text-xl tracking-tighter mt-2'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
