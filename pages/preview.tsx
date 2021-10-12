import { Button, Container, Footer, H1, Navigation } from '@/components'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo as SEO } from 'next-seo'
import React from 'react'
import config from '@/modules/config'
import { useRouter } from 'next/router'

const desktopLinks = [
  { name: 'Collection preview', href: '/preview' },
]

const IndexPage: NextPage = () => {
  const router = useRouter()
  const { gallery, otherPageLinks } = config

  return (
    <div className="h-screen bg-center bg-repeat-x bg-cover bg-bubble">
      <SEO
        title="Collection preview"
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
        </Container>
                
        <div className="flex flex-row items-center w-full px-4 mx-auto max-w-7xl">
          <div className="hidden w-24 md:flex">
            <Button variant="white" style={{ fontWeight: 400, border: '1px solid #cfcfcf', justifyContent: "center" }} block onClick={() => router.back()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Button>
          </div>

          <div className="flex justify-center flex-1 flex-grow">
            <H1 className="text-center text-secondary" style={{ marginTop: '40px', marginBottom: '40px' }}>
              Collection Preview
            </H1>
          </div>

          <div className="hidden w-32 md:flex"></div>
        </div>  

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
