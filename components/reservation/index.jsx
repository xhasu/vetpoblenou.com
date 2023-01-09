import { Description, Headline } from "components/shared/headlines";
import { IconChevronDown } from "components/shared/icons";
import React from "react";

const Reservation = () => {
  // get current date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const SendForm = () => {
    // get input values
    const date = document.querySelector("#date").value;
    const franja = document.querySelector("#franja").value;
    const motivo = document.querySelector("#motivo").value;

    // set email subject and body
    const subject = `Cita website`;
    const body = `Cita ${motivo} ${date} ${franja}`;

    // set email href
    const email = document.querySelector("a");
    email.target = "_blank";
    email.href = `mailto:clinica@vetpoblenou.com?subject=${subject}&body=${body}`;

    // send email
    email.click();
  };

  return (
    <div className="bg-light">
      <div className="container py-20">
        <div className="text-center text-primary">
          <Headline>Pide tu cita</Headline>
        </div>
        <div className="max-w-3xl mx-auto mb-8 lg:mb-20 text-primary text-center">
          <p className="font-circular lg:text-2xl">
            De lunes a viernes de 9 a 14 y de 17 a 20 horas, sábados de 10 a 14
            horas Nuestro Centro cierra los días festivos oficiales en Barcelona
          </p>
        </div>
        <div>
          <form method="" noValidate>
            <div className="flex flex-col md:flex-row gap-4 mb-8 lg:mb-20 text-2xl">
              <div className="relative flex-1">
                <input
                  id="date"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent focus:outline-none"
                  type="date"
                  placeholder="Fecha"
                  defaultValue={tomorrow.toISOString().split("T")[0]}
                  min={tomorrow.toISOString().split("T")[0]}
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute right-6 top-0 bottom-0 flex items-center pointer-events-none select-none">
                  <IconChevronDown className="h-8 w-8" />
                </div>
                <select
                  name=""
                  id="franja"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent appearance-none focus:outline-none"
                >
                  <option value="" className="hidden">
                    Franja
                  </option>
                  <option value="">Mañana</option>
                  <option value="">Tarde</option>
                </select>
              </div>
              <div className="relative flex-1">
                <div className="absolute right-6 top-0 bottom-0 flex items-center pointer-events-none select-none">
                  <IconChevronDown className="h-8 w-8" />
                </div>
                <select
                  name=""
                  id="motivo"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent appearance-none focus:outline-none"
                >
                  <option value="" className="hidden">
                    Motivo
                  </option>
                  <option value="">Consulta</option>
                  <option value="">Control</option>
                </select>
              </div>
            </div>
            <div className="text-center mb-24">
              <button
                type="button"
                onClick={SendForm}
                className="text-center text-white px-20 py-4 bg-primary text-3xl"
              >
                Reservar
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-primary">
          <Description>
            Parking: BSM, Rambla del Poblenou, 130 (1 hora gratuita)
          </Description>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
