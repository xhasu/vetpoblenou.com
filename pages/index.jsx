import PromoNews from "./components/promonews";
import { Description, Headline } from "./components/shared/headlines";
import PromoBanner from "./components/shared/promo-banner";
import Reservation from "./components/reservation";
import { DecorRight } from "./components/shared/decorations";

const HomePage = () => {
  return (
    <div>
      <PromoBanner type="HOME" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 px-4 mb-20">
          <div className="text-primary text-left">
            <Headline>40 años de compromiso y experiencia</Headline>
            <Description>
              Con 40 años de experiencia, nuestro equipo se mantiene en
              constante formación, al corriente de los nuevos avances médicos,
              para ofrecer una atención completa y de calidad.
            </Description>
          </div>
          <div>
            <picture>
              <img
                src="https://i.picsum.photos/id/509/800/800.jpg?hmac=bU2L_YDcrRPmrPqxuGpls1Rt71RWJnKWMUJzap6SgU0"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 px-4 mb-20">
          <div className="text-primary text-left">
            <div className="mb-8">
              <picture>
                <img
                  src="https://i.picsum.photos/id/821/800/680.jpg?hmac=6-JpPWU_a_5X6P7Q4742JpqIxqH-CXLwbwRpGT0CV0g"
                  alt=""
                />
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
                  src="https://i.picsum.photos/id/995/600/840.jpg?hmac=PddA9VGyOUEqWh5o6x0Nil_6eN_90kgLBxLlG27i3Js"
                  alt=""
                  className="ml-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <PromoNews />
      <DecorRight />
      <Reservation />
    </div>
  );
};

export default HomePage;
