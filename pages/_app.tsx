import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import config from '@/modules/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={`Yubba World™️ Official Site - NFT Collectibles`}
        titleTemplate={`%s - Yubba World Official Site - NFT Collectibles`}
        description="Yubba World is a collection of randomly generated digital collectibles of various rarities living eternally on the Ethereum blockchain. Join our community now to learn more and be kept up-to-date on all things Yubba." 
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: config.app.url,
          site_name: `Yubba World`,
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `/favicon.png`,
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
