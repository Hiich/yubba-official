import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Container } from '@/components'

export default function CollectionPreview() {  
  return (
    // <section className="bg-underwater bg-cover bg-no-repeat pt-48 md:pt-5 pb-[40px] mt-[-2px]" id="#collection-preview">
    <section className="bg-underwater-mobile -ml-1 sm:bg-underwater bg-cover bg-no-repeat pt-16 md:pt-5 pb-[40px] mt-[-2px]" id="#collection-preview">
      <Container className="flex space-x-8">     

        {/* <div className="w-full pr-8 md:w-7/12"> */}
        <div className="w-full pr-8">
          <p className="mt-20 text-white md:mt-7">
            A collection of randomly generated digital collectibles of various rarities living eternally on the Ethereum blockchain.
          </p>        
          <p className="text-white mt-7">
            Yubba World is populated by 10,000 unique Yubbas (no two are alike) Crafted with a staggering array of diversity each with their own characteristics and expressions to serve a role in the Yubbabian society.
          </p>
          <div className="mt-7 w-[240px]">
            <Link href="/preview" passHref>
              <Button variant="white" size="large" block style={{ justifyContent: "center" }}>
                Collection preview
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Yubbas on mobile (< 1024px) */}
      {/* Note: w-[672px] is related to max-width inside <Container /> */}
      <div className="relative block lg:hidden mx-auto mt-12 max-w-[375px] h-[520px]">
        <div className="absolute inline-block left-[0px] top-[0px]">
          <Image src="/collection-preview/yubba-blupatch.png"  layout="fixed" width={140} height={152} alt="Yubba Big With Horns" />
        </div>
        <div className="absolute inline-block left-[36px] top-[160px] z-10">
          <Image src="/collection-preview/yubba-bigwithhorns.png"  layout="fixed" width={302} height={330} alt="Yubba Big With Horns" />
        </div>
        <div className="absolute inline-block left-[200px] top-[40px]">
          <Image src="/collection-preview/yubba-blue.png"  layout="fixed" width={176} height={190} alt="Yubba Big With Horns" />
        </div>
        </div>      

      {/* Yubbas on desktop (> 1024px) */}
      <div className="relative hidden lg:block mx-auto mt-12 w-[1024px] h-[520px]">
        <div className="absolute inline-block left-[20px] top-[30px]">
          <Image src="/collection-preview/yubba-violet.png" layout="fixed" width={111} height={121} alt="Yubba Big With Horns" />
        </div>
        <div className="absolute inline-block left-[130px] top-[220px]">
          <Image src="/collection-preview/yubba-blupatch.png"  layout="fixed" width={230} height={249} alt="Yubba Big With Horns" />
        </div>
        <div className="absolute inline-block left-[370px] top-[16px] z-10">
          <Image src="/collection-preview/yubba-bigwithhorns.png"  layout="fixed" width={462} height={504} alt="Yubba Big With Horns" />
        </div>
        <div className="absolute inline-block left-[800px] top-0">
          <Image src="/collection-preview/yubba-blue.png"  layout="fixed" width={205} height={228} alt="Yubba Big With Horns" />
        </div>
      </div>    
    </section>
  )
}