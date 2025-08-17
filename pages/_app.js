// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/store"; // Assuming you'll move your redux store here
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
