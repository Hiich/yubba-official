import React from 'react'
import Image from 'next/image'
import { Container, H1 } from '@/components'

export default function Hero() {  
  return (
    <section className="bg-[#FC0000] relative pt-12 text-center" id="#the-collection">
      {/* background rainbow */}
      <div className="absolute bg-rainbow-lines w-full bg-cover xl:bg-contain bg-repeat-x bottom-0 h-[287px]">
      </div>
      
      {/* content title + Yubba */}
      <Container className="z-10">
        <div className="relative hidden h-24 mx-auto md:block">
          <Image src="/yubba-world-1line.png" layout="fill" objectFit="contain" alt="Yubba World" />
        </div>
        <div className="relative block mx-auto h-28 md:hidden">
          <Image src="/yubba-world-2lines.png" layout="fill" objectFit="contain" alt="Yubba World" />
        </div>

        <H1 className="mx-10 text-white sm:mx-0">Welcomes you</H1>
        
        <div className="h-[400px] relative">
          <Image src="/yubba-rainbow.png" layout="fill" objectFit="contain" alt="Yubba World" className="animate-yubba-floating" />
        </div>
      </Container>      
    </section>
  )
}