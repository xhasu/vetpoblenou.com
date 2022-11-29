import PromoGallery from "components/promogallery";
import Reservation from "components/reservation";
import { DecorLeft } from "components/shared/decorations";
import PromoBanner from "components/shared/promo-banner";

const ServicesPage = () => {
  return (
    <div>
      <PromoBanner type="SERVICES" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="text-black"></div>
          <div className="text-black">
            <p className="text-current text-lg lg:text-2xl">
              La clínica cuenta con servicios de medicina interna, cirugía,
              radiología, análisis clínicos, hospitalización de día
              independiente para perros y gatos.
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              Servicio de medicina para animales exóticos.
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              Tramitación de documentación para viajar (certificados y
              pasaportes).
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              Complementamos estos servicios con un equipo de profesionales
              veterinarios especializados en cardiología, oftalmología,
              traumatología, endoscopia y ecografía.
            </p>
          </div>
        </div>
      </div>
      <DecorLeft />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <picture>
              <img src="/images/services-01.jpg" alt="" />
            </picture>
          </div>
          <div>
            <div className="mb-16">
              <picture>
                <img src="/images/services-02.jpg" alt="" />
              </picture>
            </div>
            <picture>
              <img src="/images/services-03.jpg" alt="" />
            </picture>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="text-black">
            <div className="max-w-sm px-4 mr-0 ml-auto">
              <p className="text-4xl font-wulkan font-bold text-primary">
                Nuestros centros de referencia para urgencias y hospitalización
                en Barcelona:
                <div className="border-dashed border-b-4 border-black mt-8"></div>
              </p>
            </div>
          </div>
          <div className="text-black">
            <p className="text-current text-lg lg:text-2xl">
              ANICURA ARS VETERINARIA, C. dels Cavallers, 37, Telf.: 932858400
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              HOSPITAL VETERINARI BALMES, C. de Balmes, 81, Telf.: 934539879
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              CLINICA FELINA BARCELONA, C. del Marqués del Campo Sagrado, 12,
              Telf.: 936244854
            </p>
            <div className="mb-8"></div>
            <p className="text-current text-lg lg:text-2xl">
              La comunicación con los profesionales de estos hospitales nos
              permite el seguimiento de los casos referidos.
            </p>
          </div>
        </div>
        <PromoGallery />
      </div>
      <Reservation />
    </div>
  );
};

export default ServicesPage;
