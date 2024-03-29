import { useContext, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "providers/language-provider";
import useTranslation from "hooks/useTranslation";
import Categories from "components/categories";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();
  const [locale, setlocale] = useContext(LanguageContext);

  const localeClass = (local) => {
    return locale === local ? "underline !bg-primary" : "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // class menu classes are used to hide the menu only on mobile
  const classMenu = menuOpen ? "block" : "hidden lg:block";

  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <header className="relative px-4 lg:px-8 pt-6 lg:pt-10 flex justify-end">
        <nav className="text-white text-lg xl:text-2xl">
          <div
            className={`${classMenu} absolute lg:relative right-4 py-6 lg:py-0 top-full lg:top-0`}
          >
            <ul
              className="flex flex-col lg:flex-row items-end justify-end gap-3 lg:gap-8 text-right lg:text-left"
              onClick={() => {
                closeMenu();
              }}
            >
              <li>
                <Link href="/">{t("header.home")}</Link>
              </li>
              <li>
                <Link href="/about/">{t("header.about")}</Link>
              </li>
              <li>
                <Link href="/services/">{t("header.services")}</Link>
              </li>
              <li className="relative border-b-2 lg:border-transparent hover:border-white group justify-self-end">
                <Link href="/blog/">{t("header.blog")}</Link>
                <div className="block lg:hidden group-hover:block">
                  <Categories />
                </div>
              </li>
              <li className="hidden lg:block">
                <div className="flex gap-2">
                  <div className="">
                    <picture>
                      <img src="/blog/images/icons/icon-phone.png" alt="" />
                    </picture>
                  </div>
                  <a href="tel:933 008 726">933 008 726</a> /{" "}
                  <a href="tel:696 389578">696 389578</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center ml-6 text-white text-center uppercase">
          <div
            className={`p-2 bg-zinc-700 cursor-pointer ${localeClass("ca")}`}
            onClick={() => setlocale("ca")}
          >
            CA
          </div>
          <div
            className={`p-2 bg-zinc-500 cursor-pointer ${localeClass("es")}`}
            onClick={() => setlocale("es")}
          >
            ES
          </div>
          <div
            className={`p-2 bg-zinc-400 cursor-pointer ${localeClass("en")}`}
            onClick={() => setlocale("en")}
          >
            EN
          </div>
        </div>
        <div
          className="flex flex-col gap-2 cursor-pointer self-center ml-4 lg:hidden"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="h-0.5 w-8 bg-white"></div>
          <div className="h-0.5 w-8 bg-white"></div>
          <div className="h-0.5 w-8 bg-white"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
