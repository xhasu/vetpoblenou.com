import Link from "next/link";
import { useRef } from "react";

const PromoBanner = () => {
  const scrollElement = useRef(null);

  const handleScroll = () => {
    scrollElement.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-neutral-600 min-h-screen z-0 mb-20">
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src="https://i.picsum.photos/id/284/1920/1080.jpg?hmac=xX_jx1qlLqEKcan6HaMGmBRVBzKKE6Weg4WYfJ7SsAg"
            alt=""
            className="w-full h-full object-cover"
          />
        </picture>
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

      <div className="absolute right-8 bottom-8">
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
            href="https://www.intagram.com"
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

      <div className="absolute bottom-0 left-0 right-0 max-w-[1656px] mx-auto">
        <div className="max-w-lg lg:max-w-5xl mb-8 lg:mb-12 text-white font-wulkan px-4">
          <h1 className="text-4xl lg:text-7xl xl:text-9xl leading-none mb-4 lg:mb-12">
            Cuidamos a los que quieres
          </h1>
          <p className="text-xl lg:text-4xl leading-tight lg:leading-tight mb-4">
            Desde Clínica Veterinaria Poblenou, velamos por la salud de tus
            mascotas ofreciéndoles un cuidado íntegro con proximidad y
            profesionalidad.
          </p>
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
