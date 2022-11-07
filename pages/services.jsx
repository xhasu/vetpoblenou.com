import PromoNews from "components/PromoNews";
import Reservation from "components/Reservation";
import PromoBanner from "components/shared/PromoBanner";

const ServicesPage = () => {
  return (
    <div>
      <PromoBanner type="SERVICES" />
      <div className="container"></div>
      <PromoNews />
      <Reservation />
    </div>
  );
};

export default ServicesPage;
