import Reservation from "components/reservation";
import { DecorLeft } from "components/shared/decorations";
import { Headline } from "components/shared/headlines";
import PromoBanner from "components/shared/promo-banner";

const AboutPage = () => {
  return (
    <div>
      <PromoBanner type="ABOUT" />
      <div className="container px-0 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 mb-20">
          <div className="flex items-center justify-center">
            <div className="text-primary">
              <Headline>¡40 años!</Headline>
            </div>
          </div>
          <div className="text-black">
            <p className="text-current text-lg lg:text-2xl">
              Cuarenta años de compromiso y experiencia, nuestro equipo se
              mantiene en constante formación al corriente de los nuevos avances
              en medicina veterinaria, para ofrecer una atención completa y de
              calidad.
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              Sabemos que las mascotas son un miembro más de la familia, y por
              ello, te acompañamos en su cuidado y en la prevención de
              enfermedades y proporcionamos los medios necesarios para
              atenderlas en su día a día.
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              En Clínica Veterinaria Poblenou disponemos de los medios e
              información necesarias para poder atender a vuestros gatos, perros
              o animales exóticos en su día a día. Entendemos nuestro ejercicio
              profesional como un compromiso con vosotros y vuestras mascotas
              para mejorar su calidad de vida y garantizar su bienestar y por
              ello, creemos en dar el soporte necesario para que su cuidado
              trascienda sus visitas al veterinario.
            </p>
          </div>
        </div>
      </div>
      <DecorLeft />
      <div className="container px-0 lg:px-4">
        <div className="bg-primary p-4 lg:p-20">
          <div className="text-white mb-4 md:mb-16">
            <Headline>
              La clínica cuenta con servicios médicos internos y externos:
            </Headline>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-16 mb-8">
            <div>
              <div className="mb-8">
                <picture>
                  <img src="/images/about-01.jpg" alt="" />
                </picture>
              </div>
              <div className="text-white">
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-6">
                  ATVs:
                </h2>
                <ul className="lg:text-xl mb-4">
                  <li>— Pili Archelaguet, nuestra primera ATV, desde 1993</li>
                  <li>— Virginia Vidaña, desde 2003</li>
                  <li>— Antonella Sánchez, desde 2021</li>
                </ul>
                <p className="mb-8">
                  Han asistido a congresos y cursos para seguir formándose y
                  ofrecer la mejor atención a nuestros pacientes.
                </p>
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-12">
                  Veterinarios externos:
                </h2>
                <ul className="lg:text-xl mb-4">
                  <li>— Traumatología y ortopedia: JORDI LLOVERA</li>
                  <li>— Ecografía: TXEMA CASTELAR</li>
                  <li>— Endoscopia: ENDOLAP</li>
                  <li>— Cardiología: MONTSE JORRO</li>
                  <li>— Oftalmología: JAVIER LAGIOIOSA</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <picture>
                  <img src="/images/about-02.jpg" alt="" />
                </picture>
              </div>
              <div className="text-white">
                <h2 className="text-xl lg:text-3xl font-wulkan font-bold mb-6">Veterinarias:</h2>
                <ul className="lg:text-xl mb-4 space-y-3">
                  <li>
                    — Mª José Corzán, veterinaria fundadora. Licenciada en
                    Veterinaria por la Universidad de Zaragoza en 1979.
                  </li>
                  <li>
                    — Pilar Gurría, veterinaria fundadora. Licenciada en
                    Veterinaria por la Universidad de Zaragoza en 1977.
                  </li>
                  <li>
                    — Rosario Moral, desde 2004. Licenciada en Veterinaria por
                    la UAB (Univ. Autónoma de Barcelona) en 2003. Diploma de
                    postgrado en cirugía y anestesia de pequeños animales por la
                    UAB en 2022.
                  </li>
                  <li>
                    — Gemma Alfonso, desde 2015. Licenciada en Veterinaria en
                    2006 por la UAB. Titulada especialista europea en animales
                    exóticos GPCert (ExAP) por la ISVPS (International School of
                    Veterinary Postgraduate Studies).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <div>
              <picture>
                <img src="/images/about-slider-01.jpg" alt="" />
              </picture>
            </div>
            <div>
              <picture>
                <img src="/images/about-slider-02.jpg" alt="" />
              </picture>
            </div>
            <div>
              <picture>
                <img src="/images/about-slider-03.jpg" alt="" />
              </picture>
            </div>
          </div>
        </div>
        <picture>
          <img src="/images/about-03.jpg" alt="" />
        </picture>
      </div>
      <Reservation />
    </div>
  );
};

export default AboutPage;
