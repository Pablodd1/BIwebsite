import RecommendationsSection from "My_UI/product_ui/recommended_section";
import HeroSec from "My_UI/homepage/herosection";
import WhyWeSection from "My_UI/homepage/why_we";
import HowShippingWorks from "My_UI/product_ui/steps";
import BuiltForBulk from "My_UI/homepage/buy_bulk";
import WhoItsFor from "My_UI/homepage/for_whom";
import HomeCTA from "My_UI/homepage/home_CTA";

export default function HomePage() {
  return (
    <main className="">
      <HeroSec />
      <WhyWeSection />
      <HowShippingWorks />
      <BuiltForBulk />
      <WhoItsFor />
      <HomeCTA />
      <div className=" mx-auto bg-white px-12 py-16">
        <RecommendationsSection title="Best Selling Products" />
      </div>
    </main>
  );
}
