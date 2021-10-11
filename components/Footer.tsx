import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import config from '@/modules/config'
import { Container } from '@/components'

export default function Footer() {  
  const { socials } = config

  return (
      <section className="py-32">
        <Container>
          <div className="relative block h-12 md:w-full md:text-center mb-7">
            <Image src="/yubba-world-1line.png" layout="fixed" width={209} height={51} alt="Yubba World" />
          </div>

          <div className="flex flex-col mt-4 space-y-4 text-left md:space-x-4 md:space-y-0 md:justify-center md:flex-row">            
            <div className="flex flex-row justify-start space-x-4">
              {socials.map(({ icon: Icon, link }, index) => (
                <a href={link} target="_blank" rel="noreferrer" key={index}>
                  <Icon className="w-6 h-6 cursor-pointer fill-current text-secondary hover:text-primary" />
                </a>
              ))}
            </div>

            <p className="text-secondary">
              &copy; Copyright Yubba World 2021, All rights reserved
            </p>

            <p className="underline text-secondary hover:text-primary">
              <Link href="/terms" passHref>
                <a>
                Terms & conditions
                </a>
              </Link>
            </p>
          </div>
        </Container>
      </section>
  )
}