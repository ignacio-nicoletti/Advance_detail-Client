import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "../redux/store/store";
import { Provider } from "react-redux";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// own css files here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
