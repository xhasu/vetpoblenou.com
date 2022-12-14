import { Body, Media } from "components/card";

const PromoCard = ({ data = {} }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-6 mb-10 lg:mb-20">
      <div className="max-w-[800px]">
        <Media data={data} />
      </div>
      <div className="py-4 lg:py-8 px-0 sm:px-4 lg:px-16 flex items-center">
        <Body data={data} />
      </div>
    </div>
  );
};

export default PromoCard;
