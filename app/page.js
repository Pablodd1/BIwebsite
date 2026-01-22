import ProductSection from "My_UI/product_ui/product_section";
import productData from "StaticData//products_full.json";
import productRec from "StaticData//products_thumb.json";
import productReview from "StaticData//products.json";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import ReviewsSection from "My_UI/product_ui/review_section";
import HeroSec from "My_UI/homepage/herosection";
import WhyWeSection from "My_UI/homepage/why_we";
import HowShippingWorks from "My_UI/product_ui/steps";

export default function HomePage() {
  return (
    <main className="">
      <HeroSec />
      <WhyWeSection />
      <HowShippingWorks />
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <RecommendationsSection items={productRec} title="Start Selecting Now" />
      </div>
    </main>
  );
}
