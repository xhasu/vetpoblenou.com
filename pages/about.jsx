import Reservation from "components/reservation";
import { DecorLeft } from "components/shared/decorations";
import { Headline } from "components/shared/headlines";
import PromoBanner from "components/shared/promo-banner";
import useTranslation from "hooks/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PromoBanner type="ABOUT" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 mb-20">
          <div className="flex items-center justify-center">
            <div className="text-primary">
              <Headline>{t("about.info.title")}</Headline>
            </div>
          </div>
          <div className="text-black font-circular">
            <p className="text-current text-lg lg:text-2xl">
              {t("about.info.text[0]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("about.info.text[1]")}
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              {t("about.info.text[2]")}
            </p>
          </div>
        </div>
      </div>
      <DecorLeft />
      <div className="container px-0 lg:px-4">
        <div className="bg-primary p-4 lg:p-20">
          <div className="text-white mb-4 md:mb-16">
            <Headline>{t("about.section.title")}</Headline>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-16 mb-8">
            <div>
              <div className="mb-8">
                <picture>
                  <img src="/blog/images/about-01.jpg" alt="" />
                </picture>
              </div>
              <div className="text-white">
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-6">
                  {t("about.section.categories[0].title")}
                </h2>
                <ul className="lg:text-xl mb-4">
                  <li>{t("about.section.categories[0].list[0]")}</li>
                  <li>{t("about.section.categories[0].list[1]")}</li>
                  <li>{t("about.section.categories[0].list[2]")}</li>
                </ul>
                <p className="mb-8">
                  {t("about.section.categories[0].caption")}
                </p>
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-12">
                  {t("about.section.categories[1].title")}
                </h2>
                <ul className="lg:text-xl mb-4">
                  <li>{t("about.section.categories[1].list[0]")}</li>
                  <li>{t("about.section.categories[1].list[1]")}</li>
                  <li>{t("about.section.categories[1].list[2]")}</li>
                  <li>{t("about.section.categories[1].list[3]")}</li>
                  <li>{t("about.section.categories[1].list[4]")}</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <picture>
                  <img src="/blog/images/about-02.jpg" alt="" />
                </picture>
              </div>
              <div className="text-white">
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-6">
                  {t("about.section.categories[2].title")}
                </h2>
                <ul className="lg:text-xl mb-4 space-y-3">
                  <li>{t("about.section.categories[2].list[0]")}</li>
                  <li>{t("about.section.categories[2].list[1]")}</li>
                  <li>{t("about.section.categories[2].list[2]")}</li>
                  <li>{t("about.section.categories[2].list[3]")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <div>
              <picture>
                <img src="/blog/images/about-slider-01.jpg" alt="" />
              </picture>
            </div>
            <div>
              <picture>
                <img src="/blog/images/about-slider-02.jpg" alt="" />
              </picture>
            </div>
            <div>
              <picture>
                <img src="/blog/images/about-slider-03.jpg" alt="" />
              </picture>
            </div>
          </div>
        </div>
        <div>
          <picture>
            <img src="/blog/images/about-03.jpg" alt="" className="mx-auto" />
          </picture>
        </div>
      </div>
      <Reservation />
    </div>
  );
};

export default AboutPage;
