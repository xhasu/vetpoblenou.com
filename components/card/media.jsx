import React from "react";

const CardMedia = ({ data = {} }) => {
  const { subtype = "", promo_item = "" } = data;

  const imgSrc = promo_item || "/blog/images/blog-default.jpg";

  return (
    <div className="relative z-0">
      <div className="absolute top-2 right-2 px-8 py-2 bg-primary text-white text-center lg:text-xl font-wulkan z-10">
        {subtype}
      </div>
      <div className="relative aspect-w-1 aspect-h-1">
        <picture>
          <img
            src={imgSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default CardMedia;
