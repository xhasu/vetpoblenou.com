import Link from "next/link";
import { useRef } from "react";
import PropTypes from "prop-types";

const BannerHome = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/banner-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleHome = () => {
  return <div>Cuidamos a los que quieres</div>;
};

const DescriptionHome = () => {
  return (
    <>
      Desde Clínica Veterinaria Poblenou, velamos por la salud de tus mascotas
      ofreciéndoles un cuidado íntegro con proximidad y profesionalidad.
    </>
  );
};

const BannerAbout = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/banner-about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleAbout = () => {
  return <div>Sobre nosotras</div>;
};

const DescriptionAbout = () => {
  return (
    <>
      Desde Clínica Veterinaria Poblenou, velamos por la salud de tus mascotas
      ofreciéndoles un cuidado íntegro con proximidad y profesionalidad.
    </>
  );
};

const BannerServices = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/banner-services.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleServices = () => {
  return <div>Nuestros Servicios</div>;
};

const DescriptionServices = () => {
  return (
    <>
      Desde Clínica Veterinaria Poblenou, velamos por la salud de tus mascotas
      ofreciéndoles un cuidado íntegro con proximidad y profesionalidad.
    </>
  );
};

const BannerBlog = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/banner-blog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

const TitleBlog = () => {
  return <div>Lo que necesitas saber parasu buen cuidado. </div>;
};

const DescriptionBlog = () => {
  return (
    <>
      Información actualizada y contrastada sobre los diferentes aspectos para
      el cuidado de vuestras mascotas.{" "}
    </>
  );
};

const PromoBanner = ({ type = "HOME" }) => {
  const scrollElement = useRef(null);

  const handleScroll = () => {
    scrollElement.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-neutral-600 min-h-screen z-0 mb-20">
      <div className="absolute inset-0 z-0">
        {type === "HOME" && <BannerHome />}
        {type === "ABOUT" && <BannerAbout />}
        {type === "SERVICES" && <BannerServices />}
        {type === "BLOG" && <BannerBlog />}
      </div>

      <div className="absolute inset-0 select-none pointer-events-none bg-gradient-to-b from-transparent to-black opacity-70"></div>

      <div className="absolute top-4 lg:top-12 left-4 lg:left-8 z-10 bg-primary">
        <Link href="/">
          <div className="flex items-center justify-center w-32 lg:w-72 h-32 lg:h-72 p-4 cursor-pointer">
            <picture>
              <img src="/images/brand.png" alt="" className="w-full" />
            </picture>
          </div>
        </Link>
      </div>

      <div className="absolute right-8 bottom-1/3 lg:bottom-8 z-10">
        <div className="flex flex-col gap-4">
          {/* send text message to whatsapp in spain 933008726 */}
          <a
            href="https://wa.me/34933008726"
            className="text-white"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/images/icons/icon-whatsapp.png" alt="" />
            </picture>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/images/icons/icon-instagram.png" alt="" />
            </picture>
          </a>
          <a
            href="https://www.facebook.com/363571377062591"
            target="_blank"
            rel="noreferrer noopener"
          >
            <picture>
              <img src="/images/icons/icon-facebook.png" alt="" />
            </picture>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container">
          <div className="max-w-lg lg:max-w-5xl mb-8 lg:mb-12 text-white font-wulkan px-4">
            <h1 className="text-4xl lg:text-7xl xl:text-9xl leading-none mb-4 lg:mb-12">
              {type === "HOME" && <TitleHome />}
              {type === "ABOUT" && <TitleAbout />}
              {type === "SERVICES" && <TitleServices />}
              {type === "BLOG" && <TitleBlog />}
            </h1>
            <p className="text-xl lg:text-4xl leading-tight lg:leading-tight mb-4">
              {type === "HOME" && <DescriptionHome />}
              {type === "ABOUT" && <DescriptionAbout />}
              {type === "SERVICES" && <DescriptionServices />}
              {type === "BLOG" && <DescriptionBlog />}
            </p>
          </div>
        </div>
        <div
          className="flex justify-center mb-4 lg:mb-8"
          onClick={handleScroll}
        >
          <picture>
            <img
              src="/images/icons/icon-angle-down.png"
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