// import PromoNews from "components/promonews";
import { Description, Headline } from "components/shared/headlines";
import PromoBanner from "components/shared/promo-banner";
import Reservation from "components/reservation";
import { DecorRight } from "components/shared/decorations";
import useTranslation from "hooks/useTranslation";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PromoBanner type="HOME" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="text-primary text-left">
            <Headline>{t("home.info[0].title")}</Headline>
            <Description>{t("home.info[0].description")}</Description>
            <div>
              <picture>
                <img src="/blog/images/animals.png" alt="" />
              </picture>
            </div>
          </div>
          <div>
            <picture>
              <img src="/blog/images/home-01.jpg" alt="" />
            </picture>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="text-primary text-left">
            <div className="mb-8">
              <picture>
                <img src="/blog/images/home-02.jpg" alt="" />
              </picture>
            </div>
            <Headline>{t("home.info[2].title")}</Headline>
            <Description>{t("home.info[2].description")}</Description>
          </div>
          <div className="text-primary">
            <Description>{t("home.info[1].description")}</Description>
            <div className="mt-8 text-right">
              <picture>
                <img
                  src="/blog/images/home-03.jpg"
                  alt=""
                  className="ml-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      {/* <PromoNews /> */}
      <div className="relative z-10">
        <DecorRight />
      </div>
      <Reservation />
    </div>
  );
};

export default HomePage;
