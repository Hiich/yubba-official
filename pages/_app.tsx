import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import config from '@/modules/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={config.app.name}
        titleTemplate={`${config.app.name} - %s`}
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: config.app.url,
          site_name: config.app.name,
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `../../public/favicon.png`,
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
