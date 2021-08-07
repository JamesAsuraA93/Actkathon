import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
    interface Window {
      kommunicate: any;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}
export default MyApp;
