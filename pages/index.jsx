// import PromoNews from "components/promonews";
import { Description, Headline } from "components/shared/headlines";
import PromoBanner from "components/shared/promo-banner";
import Reservation from "components/reservation";
import { DecorRight } from "components/shared/decorations";

const HomePage = () => {
  return (
    <div>
      <PromoBanner type="HOME" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="text-primary text-left">
            <Headline>40 años de compromiso y experiencia</Headline>
            <Description>
              Con 40 años de experiencia, nuestro equipo se mantiene en
              constante formación, al corriente de los nuevos avances médicos,
              para ofrecer una atención completa y de calidad.
            </Description>
            <div>
              <picture>
                <img src="/blog/images/animals.png" alt="" />
              </picture>
            </div>
          </div>
          <div>
            <picture>
              <img src="/blog/images/home-01.jpg" alt="" />
            </picture>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="text-primary text-left">
            <div className="mb-8">
              <picture>
                <img src="/blog/images/home-02.jpg" alt="" />
              </picture>
            </div>
            <Headline>Planifica sus revisiones fácilmente</Headline>
            <Description>
              La clínica cuenta con servicios médicos internos y un equipo de
              especialistas externos, lo que nos permite realizar pruebas
              complementarias para confirmar nuestros diagnósticos con más
              exactitud.
            </Description>
          </div>
          <div className="text-primary">
            <Description>
              Sabemos que las mascotas son un miembro más de la familia, por
              ello, te acompañamos en su cuidado, prevención y tratamiento de
              enfermedades, aportando los medios necesarios para atenderles en
              su día a día.
            </Description>
            <div className="mt-8 text-right">
              <picture>
                <img
                  src="/blog/images/home-03.jpg"
                  alt=""
                  className="ml-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      {/* <PromoNews /> */}
      <div className="relative z-10">
        <DecorRight />
      </div>
      <Reservation />
    </div>
  );
};

export default HomePage;
