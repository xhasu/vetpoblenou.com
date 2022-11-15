import PromoCard from "components/promocard";
import PromoBanner from "components/shared/promo-banner";

const BlogPage = () => {
  return (
    <div>
      <PromoBanner type="BLOG" />
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
