import { Description, Headline } from "components/shared/headlines";
import { IconChevronDown } from "components/shared/icons";
import useTranslation from "hooks/useTranslation";

const Reservation = () => {
  const { t } = useTranslation();

  // get current date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const SendForm = () => {
    // get input values
    const date = document.querySelector("#date").value;
    const franja = document.querySelector("#franja").value;
    const motivo = document.querySelector("#motivo").value;
    const tipo_mascota = document.querySelector("#tipo_mascota").value;

    // set email subject and body
    const subject = `Cita website`;
    const body = `Cita ${motivo} ${date} ${franja} ${tipo_mascota}`;

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
          <Headline>{t("reservation.title")}</Headline>
        </div>
        <div className="max-w-3xl mx-auto mb-8 lg:mb-20 text-primary text-center">
          <p className="font-circular lg:text-2xl">
            {t("reservation.description")}
          </p>
        </div>
        <div>
          <form method="" noValidate>
            <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:mb-20 text-2xl">
              <div className="relative flex-1">
                <input
                  id="date"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent focus:outline-none"
                  type="date"
                  placeholder={t("reservation.form.date.title")}
                  defaultValue={tomorrow.toISOString().split("T")[0]}
                  min={tomorrow.toISOString().split("T")[0]}
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute right-2 xl:right-6 top-0 bottom-0 flex items-center pointer-events-none select-none">
                  <IconChevronDown className="h-8 w-8" />
                </div>
                <select
                  name=""
                  id="franja"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent appearance-none focus:outline-none"
                >
                  <option value="" className="hidden">
                    {t("reservation.form.time.title")}
                  </option>
                  <option value="Mañana">
                    {t("reservation.form.time.options.morning")}
                  </option>
                  <option value="Tarde">
                    {t("reservation.form.time.options.afternoon")}
                  </option>
                </select>
              </div>
              <div className="relative flex-1">
                <div className="absolute right-2 xl:right-6 top-0 bottom-0 flex items-center pointer-events-none select-none">
                  <IconChevronDown className="h-8 w-8" />
                </div>
                <select
                  name=""
                  id="motivo"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent appearance-none focus:outline-none"
                >
                  <option value="" className="hidden">
                    {t("reservation.form.motive.title")}
                  </option>
                  <option value="Primera Visita">
                    {t("reservation.form.motive.options.first")}
                  </option>
                  <option value="Visita">
                    {t("reservation.form.motive.options.visit")}
                  </option>
                  <option value="Vacunación">
                    {t("reservation.form.motive.options.vaccine")}
                  </option>
                  <option value="Certificado/viajar">
                    {t("reservation.form.motive.options.health")}
                  </option>
                </select>
              </div>
              <div className="relative flex-1">
                <div className="absolute right-2 xl:right-6 top-0 bottom-0 flex items-center pointer-events-none select-none">
                  <IconChevronDown className="h-8 w-8" />
                </div>
                <select
                  name=""
                  id="tipo_mascota"
                  className="w-full border-2 border-black px-5 lg:px-10 py-4 lg:py-8 bg-transparent appearance-none focus:outline-none"
                >
                  <option value="" className="hidden">
                    {t("reservation.form.type.title")}
                  </option>
                  <option value="Perro">
                    {t("reservation.form.type.options.dog")}
                  </option>
                  <option value="Gato">
                    {t("reservation.form.type.options.cat")}
                  </option>
                  <option value="Exótico">
                    {t("reservation.form.type.options.exotic")}
                  </option>
                </select>
              </div>
            </div>
            <div className="text-center mb-24">
              <button
                type="button"
                onClick={SendForm}
                className="text-center text-white px-20 py-4 bg-primary text-3xl"
              >
                {t("reservation.button")}
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-primary">
          <Description>{t("reservation.caption")}</Description>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
