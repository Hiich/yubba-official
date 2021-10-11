import { Button, Container, Footer, H1, Navigation } from '@/components'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo as SEO } from 'next-seo'
import React from 'react'
import config from '@/modules/config'

const desktopLinks = [
  { name: 'Collection preview', href: '/preview' },
]

const IndexPage: NextPage = () => {
  const { gallery, otherPageLinks } = config

  return (
    <div className="h-screen bg-center bg-repeat-x bg-cover bg-bubble">
      <SEO
        title="Collection preview"
        description="Yubba World is a collection of randomly generated digital collectibles of various rarity living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
      />      

      <Navigation 
        desktopLinks={desktopLinks} 
        mobileLinks={otherPageLinks}
        action={
                    <></>
          // <Link href="/minting" passHref>
          //   <Button variant="primary">
          //     Get minting
          //   </Button>
          // </Link>
        }
      />

      <section className="relative pt-20 text-center">
        <Container>
          {/* logo */}
          <div className="relative h-24 mx-auto">
            <Image src="/yubba-world-1line.png" layout="fill" objectFit="contain" alt="Yubba World" />
          </div>

          {/* title */}
          <H1 className="text-secondary" style={{ marginTop: '40px', marginBottom: '48px'  }}>
            Collection Preview
          </H1>
          
        </Container>

        {/* the collection preview */}
        {/* onside of Container to display 2 columns on iPhone X */}
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
          {gallery.map(({ name, imageUrl }, key) => (
            <div key={key} className="bg-[#fffefe] rounded border border-[#cfcfcf] p-[8px] mx-2 mb-2">
              <div className="h-[150px] w-[150px] relative">
                <Image src={imageUrl} layout="fill" objectFit="cover" alt={name} placeholder="blur" blurDataURL={imageUrl} />
              </div>             
              {/* <p className="mb-4 font-medium text-left text-secondary">{name}</p> */}
            </div>
          ))}
        </div>
      </section>

     <Footer />
    </div>
  )
}

export default IndexPage
