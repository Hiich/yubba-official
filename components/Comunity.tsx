import React from 'react'
import Image from 'next/image'
import config from '@/modules/config'
import styles from './Community.module.css'
import DiscordIcon from '@/public/icon-discord.svg'
import { Button, Container, H1 } from '@/components'

export default function Community() {
  const discord = config.socials[0]

  return (
    <section className="py-8 pt-0 pb-10 bg-center bg-repeat-x bg-cover z-1 md:bg-bubble bg-bubble-mobile" id="#community">   
      <div className="absolute w-full md:h-[314px]  h-[214px] bg-cloud bg-cover mt-[-20px] "></div>

      <Container>
        
        {/* title */}        
        <div className="font-title text-secondary mt-4 mb-5 text-3xl font-bold uppercase tracking-[9px] md:pt-80 pt-72 w-3/4">
          Join the Yubba community
        </div>        

        <br />
        <br />

        {/* Yubbas on rocks */}
        <div className="relative h-[270px] md:h-[400px]">
          {/* rock right */}
          {/* mobile version */}
          <div className="w-[188px] h-[270px] relative md:absolute md:right-20 md:hidden">
            <div className="absolute left-[28px] top-8 motion-safe:animate-bounce">
              <Image src="/yubba-leopard.png" height={94} width={92} layout="fixed" alt="Yubba Leopard" />
            </div>
            <div className={styles.bounceGreenMobile} >
              <Image src="/yubba-greenfeathered.png" height={127} width={140} layout="fixed" alt="Yubba Greenfeathered" />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image src="/island-1.png" height={183} width={274} layout="fixed" alt="Yubba Island" />
            </div>
          </div>
          {/* desktop version */}
          <div className="w-[188px] h-[400px] relative md:absolute md:right-40 hidden md:block">
            <div className="absolute left-[48px] top-14 motion-safe:animate-bounce">
              <Image src="/yubba-leopard.png" height={138} width={144} layout="fixed" alt="Yubba Leopard" />
            </div>
            <div className={styles.bounceGreen} >
              <Image src="/yubba-greenfeathered.png" height={190} width={210} layout="fixed" alt="Yubba Greenfeathered" />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image src="/island-1.png" height={274} width={411} layout="fixed" alt="Yubba Island" />
            </div>
          </div>
          {/* rock middle */}
          <div className="w-[200px] h-[190px] relative md:absolute md:left-[100px] md:top-5 hidden md:block  ">
            <div className={styles.bounceRed} >
              <Image src="/yubba-red.png" height={89} width={93} layout="fixed" alt="Yubba Red" />
            </div>
            <div className="absolute left-0 -bottom-40">
              <Image src="/island-2.png" height={181} width={283} layout="fixed" alt="Yubba Island" />
            </div>
          </div>

          {/* rock left */}
          <div className="w-[200px] h-[170px] relative md:absolute md:left-10 md:-top-5 hidden md:block ">
            <div className={styles.bouncePurple} >
              <Image src="/yubba-purple.png" height={67} width={61} layout="fixed" alt="Yubba Red" />
            </div>
            <div className="absolute -bottom-10 -left-20">
              <Image src="/island-3.png" height={120} width={153} layout="fixed" alt="Yubba Island" />
            </div>
          </div>
        </div>

        {/* content */}
        <p className="text-justify text-secondary text-default mt-14">
          We are community centric, growing fast and are committed to on-going expansion and development of the Yubba World Metaverse.
        </p>

        <p className="text-justify text-secondary text-default mt-7">
          We support inclusion, diversity, and community oriented progression based on your input.
          Please join our Discord today, become a Yubba and get all the latest and updates, take part in competitions to win exclusive rewards and participate in shaping the future of Yubba World.
        </p>

        {/* button */}
        <div className="mt-7 w-[200px] ">
          <a href={discord.link} target="_blank" rel="noreferrer" >
            <Button variant="primary" size="large" style={{ justifyContent: "center" }} block>
              Join Discord
              <DiscordIcon className="ml-2" />
            </Button>
          </a>
        </div>
      </Container>
    </section>
  )
}