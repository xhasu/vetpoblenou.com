import PromoGallery from "components/promogallery";
import Reservation from "components/reservation";
import { DecorLeft } from "components/shared/decorations";
import PromoBanner from "components/shared/promo-banner";
import useTranslation from "hooks/useTranslation";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PromoBanner type="SERVICES" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="text-black"></div>
          <div className="text-black">
            <p className="text-current text-lg lg:text-2xl">
              {t("services.info[0]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.info[1]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.info[2]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.info[3]")}
            </p>
          </div>
        </div>
      </div>
      <DecorLeft />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <picture>
              <img src="/blog/images/services-01.jpg" alt="" />
            </picture>
          </div>
          <div>
            <div className="mb-16">
              <picture>
                <img src="/blog/images/services-02.jpg" alt="" />
              </picture>
            </div>
            <picture>
              <img src="/blog/images/services-03.jpg" alt="" />
            </picture>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="text-black">
            <div className="max-w-sm px-4 mr-0 ml-auto">
              <p className="text-4xl font-wulkan font-bold text-primary">
                {t("services.subheadline")}
                <div className="border-dashed border-b-4 border-black mt-8"></div>
              </p>
            </div>
          </div>
          <div className="text-black">
            <p className="text-current text-lg lg:text-2xl">
              {t("services.places[0]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.places[1]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.places[2]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("services.caption")}
            </p>
          </div>
        </div>
        <PromoGallery />
      </div>
      <Reservation />
    </div>
  );
};

export default ServicesPage;
