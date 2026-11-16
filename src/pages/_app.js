import "../styles/globals.css";
import Head from "next/head";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "../context/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </LanguageProvider>
    </MotionConfig>
  );
}

export default MyApp;
