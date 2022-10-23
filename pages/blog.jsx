import PromoCard from "components/promoCard";
import PromoBanner from "components/shared/PromoBanner";

const BlogPage = () => {
  return (
    <div>
      <PromoBanner />
      <main className="container">
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </main>
    </div>
  );
};

export default BlogPage;
