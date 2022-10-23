import MainCard from "components/mainCard";
import { Description, Headline } from "components/shared/headlines";

const PromoNews = () => {
  return (
    <div className="mb-20 px-4">
      <div className="py-20 text-center text-primary mx-auto max-w-screen-xl">
        <Headline>Lo que necesitas saber para su buen cuidado. </Headline>
        <Description>
          Información actualizada y contrastada sobre los diferentes <br />
          aspectos para el cuidado de vuestras mascotas.
        </Description>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          <div>
            <MainCard />
          </div>
          <div>
            <MainCard />
          </div>
          <div>
            <MainCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoNews;
