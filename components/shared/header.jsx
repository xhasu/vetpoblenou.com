import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <header className="px-8 pt-10 flex justify-end">
        <nav className="text-white text-2xl">
          <ul className="flex justify-end gap-8">
            <li>
              <Link href="/about/">Sobre nosotros</Link>
            </li>
            <li>
              <Link href="/services/">Servicios</Link>
            </li>
            <li>
              <div className="cursor-pointer">Citas</div>
            </li>
            <li>
              <div className="flex gap-2">
                <picture>
                  <img src="/images/icons/icon-phone.png" alt="" />
                </picture>
                <a href="tel:933 008 726">933 008 726</a> /{" "}
                <a href="tel:696 389578">696 389578</a>
              </div>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-2 cursor-pointer self-center mx-4">
          <div className="h-0.5 w-8 bg-white"></div>
          <div className="h-0.5 w-8 bg-white"></div>
          <div className="h-0.5 w-8 bg-white"></div>
        </div>
        <div className="flex bg-neutral-500 ml-6 text-white text-center uppercase">
          <div className="p-2 bg-zinc-700">CA</div>
          <div className="p-2 bg-zinc-500 underline">ES</div>
          <div className="p-2 bg-zinc-400">EN</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
