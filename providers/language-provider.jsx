import { createContext, useState } from "react";

export const defaultLocale = "es";
export const locales = ["es", "en", "ca"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ children }) => {
  const [locale, setlocale] = useState(defaultLocale);

  return (
    <LanguageContext.Provider value={[locale, setlocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
