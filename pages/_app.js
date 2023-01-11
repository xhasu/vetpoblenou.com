import Head from "next/head";
import LayoutMain from "components/layouts/main";
import { LanguageProvider } from "providers/language-provider";
import "../styles/fonts.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LayoutMain>
        <Head>
          <title>Clínica Veterinària Poblenou</title>
        </Head>
        <Component {...pageProps} />
      </LayoutMain>
    </LanguageProvider>
  );
}

export default MyApp;
