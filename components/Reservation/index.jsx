import { Description, Headline } from "components/shared/headlines";
import React from "react";

const Reservation = () => {
  // get current date
  const date = new Date();

  return (
    <div className="bg-light text-center text-primary">
      <div className="max-w-[1656px] mx-auto py-20 px-4 lg:px-0">
        <Headline>Pide tu cita</Headline>
        <div className="max-w-5xl mx-auto mb-8 lg:mb-20">
          <Description>
            De lunes a viernes de 9 a 14 y de 17 a 20 horas sábados de 10 a 14
            horas Nuestro Centro cierra los días festivos oficiales en Barcelona
          </Description>
        </div>
        <div>
          <form method="" noValidate>
            <div className="flex flex-col md:flex-row gap-4 mb-8 lg:mb-20">
              <div className="flex-1">
                <input
                  className="w-full border border-black h-14 px-4"
                  type="date"
                  placeholder="Fecha"
                  min={date.toISOString().split("T")[0]}
                />
              </div>
              <div className="flex-1">
                <select
                  name=""
                  id=""
                  className="w-full border border-black h-14 px-4"
                >
                  <option value="">Franja</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  name=""
                  id=""
                  className="w-full border border-black h-14 px-4"
                >
                  <option value="">Motivo</option>
                </select>
              </div>
            </div>
            <div className="text-center mb-24">
              <button
                type="button"
                className="text-center text-white px-20 py-4 bg-primary text-3xl"
              >
                Reservar
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Description>
            Parking: BSM, Rambla del Poblenou, 130 (1 hora gratuita)
          </Description>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
