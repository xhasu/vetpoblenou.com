import Link from "next/link";
import { useRef } from "react";
import PropTypes from "prop-types";
import useTranslation from "hooks/useTranslation";

const HeadTitle = ({ children, type = "main" }) => {
  const fontVariants = {
    main: "text-5xl lg:text-6xl xl:text-9xl 3xl:text-10xl",
    secondary: "text-3xl lg:text-6xl xl:text-8xl",
  };

  const containerVariants = {
    main: "max-w-lg lg:max-w-5xl",
    secondary: "max-w-lg lg:max-w-[1420px]",
  };

  const fontClasses = fontVariants[type];
  const containerClasses = containerVariants[type];

  return (
    <div className={containerClasses}>
      <h1
        className={`${fontClasses} font-wulkan font-bold leading-tiny mb-4 xl:mb-12`}
      >
        {children}
      </h1>
    </div>
  );
};

const DescriptionText = ({ children, type = "main" }) => {
  const fontVariants = {
    main: "text-xl lg:text-2xl 3xl:text-4xl",
    secondary: "text-lg lg:text-xl 3xl:text-3xl",
  };

  const fontClasses = fontVariants[type];

  return (
    <div className="max-w-lg lg:max-w-5xl">
      <p
        className={`${fontClasses} font-circular leading-tight lg:leading-tight mb-4`}
      >
        {children}
      </p>
    </div>
  );
};

const BannerHome = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/blog/images/banner-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleHome = () => {
  const { t } = useTranslation();
  return <div>{t("home.banner.title")}</div>;
};

const DescriptionHome = () => {
  const { t } = useTranslation();
  return <>{t("home.banner.subtitle")}</>;
};

const BannerAbout = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/blog/images/banner-about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleAbout = () => {
  const { t } = useTranslation();
  return (
    <div dangerouslySetInnerHTML={{ __html: t("about.banner.title") }}></div>
  );
};

const DescriptionAbout = () => {
  const { t } = useTranslation();
  return <>{t("about.banner.subtitle")}</>;
};

const BannerServices = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/blog/images/banner-services.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleServices = () => {
  const { t } = useTranslation();
  return (
    <div dangerouslySetInnerHTML={{ __html: t("services.banner.title") }}></div>
  );
};

const DescriptionServices = () => {
  const { t } = useTranslation();
  return <>{t("services.banner.subtitle")}</>;
};

const BannerBlog = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/blog/images/banner-blog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleBlog = () => {
  const { t } = useTranslation();
  return <div>{t("blog.banner.title")}</div>;
};

const DescriptionBlog = () => {
  const { t } = useTranslation();
  return <>{t("blog.banner.subtitle")}</>;
};

const PromoBanner = ({ type = "HOME" }) => {
  const scrollElement = useRef(null);

  const handleScroll = () => {
    scrollElement.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-neutral-600 max-h-[1080px] h-screen z-0 mb-20 xl:mb-36">
      <div className="absolute inset-0 z-0">
        {type === "HOME" && <BannerHome />}
        {type === "ABOUT" && <BannerAbout />}
        {type === "SERVICES" && <BannerServices />}
        {type === "BLOG" && <BannerBlog />}
      </div>

      <div className="absolute z-0 top-0 left-0 right-0 h-1/4 select-none pointer-events-none bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="absolute z-0 bottom-0 left-0 right-0 h-3/4 select-none pointer-events-none bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="absolute top-4 lg:top-12 left-4 lg:left-12 z-10 bg-primary">
        <Link href="/">
          <div className="flex items-center justify-center w-32 xl:w-40 2xl:w-72 h-32 xl:h-40 2xl:h-72 p-4 cursor-pointer">
            <picture>
              <img src="/blog/images/brand.png" alt="" className="w-full" />
            </picture>
          </div>
        </Link>
      </div>

      <div className="absolute right-8 bottom-1/3 xl:bottom-8 z-10">
        <div className="flex flex-col gap-4">
          {/* send text message to whatsapp in spain 933008726 */}
          <a
            href="https://wa.me/34933008726"
            className="text-white"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/blog/images/icons/icon-whatsapp.png" alt="" />
            </picture>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/blog/images/icons/icon-instagram.png" alt="" />
            </picture>
          </a>
          <a
            href="https://www.facebook.com/363571377062591"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/blog/images/icons/icon-facebook.png" alt="" />
            </picture>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container">
          <div className="mb-8 lg:mb-12 text-white lg:mr-8">
            {type === "HOME" && (
              <HeadTitle>
                <TitleHome />
              </HeadTitle>
            )}
            {type === "ABOUT" && (
              <HeadTitle>
                <TitleAbout />
              </HeadTitle>
            )}
            {type === "SERVICES" && (
              <HeadTitle>
                <TitleServices />
              </HeadTitle>
            )}
            {type === "BLOG" && (
              <HeadTitle type="secondary">
                <TitleBlog />
              </HeadTitle>
            )}
            {type === "HOME" && (
              <DescriptionText>
                <DescriptionHome />
              </DescriptionText>
            )}
            {type === "ABOUT" && (
              <DescriptionText>
                <DescriptionAbout />
              </DescriptionText>
            )}
            {type === "SERVICES" && (
              <DescriptionText>
                <DescriptionServices />
              </DescriptionText>
            )}
            {type === "BLOG" && (
              <DescriptionText type="secondary">
                <DescriptionBlog />
              </DescriptionText>
            )}
          </div>
        </div>
        <div
          className="flex justify-center mb-4 lg:mb-8"
          onClick={handleScroll}
        >
          <picture>
            <img
              src="/blog/images/icons/icon-angle-down.png"
              alt=""
              className="cursor-pointer"
            />
          </picture>
        </div>
      </div>

      <div
        ref={scrollElement}
        className="absolute bottom-0 left-0 right-0"
      ></div>
    </div>
  );
};

export default PromoBanner;

PromoBanner.propTypes = {
  type: PropTypes.oneOf(["HOME", "ABOUT", "SERVICES", "BLOG"]),
};
