import { Body, Media } from "components/card";

const MainCard = () => {
  return (
    <div className="mb-4 lg:mb-8 mx-auto max-w-lg">
      <div>
        <Media />
      </div>
      <div className="py-4 lg:py-8 px-0 sm:px-6 lg:px-10 flex items-center">
        <Body />
      </div>
    </div>
  );
};

export default MainCard;
