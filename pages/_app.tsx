import "../styles/globals.css";
import type { AppProps } from "next/app";
// import * as ReactDOMClient from "react-dom/client";

// ReactDOMClient.createRoot(/*...*/);

// ReactDOMClient.hydrateRoot(/*...*/);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
// npm i --save-dev @types/react-dom
