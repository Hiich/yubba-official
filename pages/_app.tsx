import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import config from "@/modules/config";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={config.app.name}
        titleTemplate={`${config.app.name} - %s`}
        openGraph={{
          type: "website",
          locale: "en_EN",
          url: config.app.url,
          site_name: config.app.name,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: `${config.app.url}/favicon.png`,
          },
        ]}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
