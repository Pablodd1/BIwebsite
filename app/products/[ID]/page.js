import ProductSection from "My_UI/product_ui/product_section";
import productData from "StaticData/products_full.json";
import productReview from "StaticData/products.json";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import ReviewsSection from "My_UI/product_ui/review_section";
import HowShippingWorks from "My_UI/product_ui/steps";

export default async function ProductPage({ params }) {
  const ID = (await params)?.ID;

  return (
    <main className="">
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <ProductSection product={productData.find(x => x.ID == ID)} />
      </div>
      <HowShippingWorks />
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <RecommendationsSection  itemID={ID} />
        <ReviewsSection reviews={productReview.reviews} />
      </div>
    </main>
  );
}
