import PromoGallery from "components/PromoGallery";
import Reservation from "components/Reservation";
import PromoBanner from "components/shared/PromoBanner";

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
