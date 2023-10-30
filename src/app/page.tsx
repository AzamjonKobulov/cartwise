import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const SuccessStories = lazy(
  () => import("./components/sections/SuccessStories")
);
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const ComparePrices = lazy(() => import("./components/sections/ComparePrices"));
const MealPlan = lazy(() => import("./components/sections/MealPlan"));
const HowItWorks = lazy(() => import("./components/sections/HowItWorks"));
const FAQs = lazy(() => import("./components/sections/FAQs"));
const AffordableMeals = lazy(
  () => import("./components/sections/AffordableMeals")
);

export default function Home() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Hero />
      <About />
      {/*<SuccessStories />*/}
      {/*<Testimonials /> */}
      <ComparePrices />
      {/*<MealPlan />*/}
      <HowItWorks />
      <FAQs />
      <AffordableMeals />
    </Suspense>
  );
}
