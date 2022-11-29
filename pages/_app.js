import Head from "next/head";
import LayoutMain from "components/layouts/main";
import "../styles/fonts.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Head>
        <title>Clínica Veterinària Poblenou</title>
      </Head>
      <Component {...pageProps} />
    </LayoutMain>
  );
}

export default MyApp;
