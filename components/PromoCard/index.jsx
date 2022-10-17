import { Body, Media } from "components/card";

const PromoCard = () => {
  return (
    <div className="grid md:grid-cols-2 mb-10 lg:mb-20">
      <div>
        <Media />
      </div>
      <div className="p-4 lg:py-8 lg:px-16 flex items-center">
        <Body />
      </div>
    </div>
  );
};

export default PromoCard;