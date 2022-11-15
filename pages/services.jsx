import PromoGallery from "./components/promogallery";
import Reservation from "./components/reservation";
import PromoBanner from "./components/shared/promo-banner";

const ServicesPage = () => {
  return (
    <div>
      <PromoBanner type="SERVICES" />
      <div className="container">
        <PromoGallery />
      </div>
      <Reservation />
    </div>
  );
};

export default ServicesPage;
