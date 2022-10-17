import { IconArrowLongRight } from "components/shared/Icons";

const CardBody = () => {
  return (
    <div>
      <div className="flex gap-4 items-center flex-wrap mb-12 text-alter text-lg">
        <div className="rounded-full w-16 h-16 overflow-hidden bg-neutral-600"></div>
        <div>Dianne Russell</div>
        <span>&middot;</span>
        <div>October 17,2021</div>
        <span>&middot;</span>
        <div>3:33 pm</div>
        {/* <span>&middot;</span> */}
        {/* <div>2 comments</div> */}
      </div>
      <h2 className="text-primary text-xl lg:text-4xl font-bold mb-4">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <div className="border-dashed border-b-2 border-black mb-4"></div>
      <p className="lg:text-xl mb-6 text-neutral-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident
        explicabo voluptatum.
      </p>
      <button className="lg:text-2xl inline-flex items-end text-black">
        <span className="mr-4">Leer más</span>
        <IconArrowLongRight />
      </button>
    </div>
  );
};

export default CardBody;