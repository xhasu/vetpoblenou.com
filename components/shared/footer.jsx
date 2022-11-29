import Link from "next/link";
import { IconArrowUpRight } from "./icons";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl px-4 mx-auto">
      <div className="bg-primary text-white py-4 text-center">
        <div className="mb-16 md:mb-32"></div>
        <h2 className="mb-12 text-2xl md:text-5xl font-wulkan">
          ¿Quieres contactarnos?
        </h2>
        <div className="flex justify-center items-baseline gap-4 uppercase text-sm md:text-base flex-wrap max-w-md md:max-w-none mx-auto">
          <Link href="/blog/">
            <a className="px-4 flex items-center gap-2 mb-2">
              Blog <IconArrowUpRight className="w-4 h-4" />
            </a>
          </Link>
          <span className="hidden md:block h-4 border-r border-white"></span>
          <a
            className="px-4 flex items-center gap-2 mb-2"
            href="https://www.facebook.com/363571377062591"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook <IconArrowUpRight className="w-4 h-4" />
          </a>
          <span className="hidden md:block h-4 border-r border-white"></span>
          <a
            className="px-4 flex items-center gap-2 mb-2"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram <IconArrowUpRight className="w-4 h-4" />
          </a>
          <span className="hidden md:block h-4 border-r border-white"></span>
          <a
            className="px-4 flex items-center gap-2 mb-2"
            href="https://wa.me/34933008726"
            target="_blank"
            rel="noreferrer noopener"
          >
            Whatsapp <IconArrowUpRight className="w-4 h-4" />
          </a>
          <span className="hidden md:block h-4 border-r border-white"></span>
          <div
            className="px-4 flex items-center gap-2 mb-2"
            href="mailto:clinica@vetpoblenou.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            Mail <IconArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <div className="mb-16 md:mb-32"></div>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:items-baseline mb-4">
          <div>Camí Antic de València, 18 baixos, 08005 - Barcelona</div>
          <span className="hidden md:block h-4 border-r border-white"></span>
          <div>
            Teléfono: <a href="tel:933008726">933 008 726</a> -{" "}
            <a href="tel:696389578">696 389 578</a>
          </div>
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
    </div>
  );
};

export default Footer;
