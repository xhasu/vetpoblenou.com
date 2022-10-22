import React from "react";

const PromoBanner = () => {
  return (
    <div className="relative bg-neutral-600  min-h-screen z-0">
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
        <div className="flex items-center justify-center w-32 lg:w-72 h-32 lg:h-72 p-4">
          <picture>
            <img src="/images/brand.png" alt="" className="w-full" />
          </picture>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 max-w-[1600px] mx-auto">
        <div className="max-w-lg lg:max-w-5xl mb-12 lg:mb-20 text-white font-wulkan px-4">
          <h1 className="text-4xl lg:text-7xl xl:text-9xl leading-none mb-4 lg:mb-12">
            Cuidamos a los que quieres
          </h1>
          <p className="text-xl lg:text-4xl leading-tight lg:leading-tight mb-4">
            Desde Clínica Veterinaria Poblenou, velamos por la salud de tus
            mascotas ofreciéndoles un cuidado íntegro con proximidad y
            profesionalidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
