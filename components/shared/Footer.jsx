import { IconArrowUpRight } from "./Icons";

const Footer = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 bg-primary text-white py-4 text-center">
      <div className="mb-16 md:mb-32"></div>
      <h2 className="mb-12 text-2xl md:text-5xl font-wulkan">
        ¿Quieres contactarnos?
      </h2>
      <div className="flex justify-center items-baseline gap-4 uppercase text-sm md:text-base flex-wrap max-w-md md:max-w-none mx-auto">
        <div className="px-4 flex items-center gap-2 mb-2">
          Blog <IconArrowUpRight className="w-4 h-4" />
        </div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div className="px-4 flex items-center gap-2 mb-2">
          Facebook <IconArrowUpRight className="w-4 h-4" />
        </div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div className="px-4 flex items-center gap-2 mb-2">
          Instagram <IconArrowUpRight className="w-4 h-4" />
        </div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div className="px-4 flex items-center gap-2 mb-2">
          Whatsapp <IconArrowUpRight className="w-4 h-4" />
        </div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div className="px-4 flex items-center gap-2 mb-2">
          Mail <IconArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div className="mb-16 md:mb-32"></div>
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:items-baseline mb-4">
        <div>Camí Antic de València, 18 baixos, 08005 - Barcelona</div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div>Teléfono: 933 008 726 - 696 389 578</div>
        <span className="hidden md:block h-4 border-r border-white"></span>
        <div>
          <a
            href="mailto:clinica@vetpoblenou.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            clinica@vetpoblenou.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
