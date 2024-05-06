import type { AppProps } from "next/app";
import "../public/assets/styles/main.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <html lang='en'>
      <meta property="og:site_name" content="launchwise" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </html>
  );
}