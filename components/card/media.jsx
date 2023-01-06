import React from "react";

const CardMedia = ({ data = {} }) => {
  const { subtype = "", promo_item = "" } = data;

  const callback_image =
    "https://i.picsum.photos/id/575/800/800.jpg?hmac=9GyUcZiqB9_rSjw-MYF_B_x4RtqNpSi-73fPuiD3oss";

  return (
    <div className="relative z-0">
      <div className="absolute top-2 right-2 px-8 py-2 bg-primary text-white text-center lg:text-xl font-wulkan z-10">
        {subtype}
      </div>
      <div className="relative aspect-w-1 aspect-h-1">
        <picture>
          <img
            src={promo_item || callback_image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default CardMedia;
