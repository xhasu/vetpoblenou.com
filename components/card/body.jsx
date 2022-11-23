import { IconArrowLongRight } from "components/shared/icons";

const CardBody = () => {
  return (
    <div>
      <div className="flex gap-2 items-center flex-wrap mb-4 lg:mb-8 text-alter text-sm md:text-lg">
        <div className="rounded-full w-8 md:w-12 h-8 md:h-12 overflow-hidden bg-neutral-600"></div>
        <div>Julie Christie</div>
        <span>&middot;</span>
        <div>October 17,2021</div>
        <span>&middot;</span>
        <div>3:33 pm</div>
        {/* <span>&middot;</span> */}
        {/* <div>2 comments</div> */}
      </div>
      <h2 className="text-primary text-xl lg:text-4xl font-wulkan mb-4">
        Los 8 métodos para que tu gato deje de morder...
      </h2>
      <div className="border-dashed border-b-2 border-black mb-4"></div>
      <p className="lg:text-xl mb-6 text-neutral-600">
        Cuando un gato se siente emocionado y juguetón puede...
      </p>
      <button className="lg:text-2xl inline-flex items-end text-black">
        <span className="mr-4">Leer más</span>
        <IconArrowLongRight />
      </button>
    </div>
  );
};

export default CardBody;
