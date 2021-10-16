import React from 'react'
import Image from 'next/image'
import config from '@/modules/config'
import DiscordIcon from '@/public/icon-discord.svg'
import { Button, H2 } from '@/components'
import clsx from 'clsx'

interface Props {
  className?: string
}

export default function Presale({ className }: Props) {
  const discord_link = "https://discord.com/invite/yubbaworld";

  return (
    <div className={clsx("flex-col items-center", className)}>
      <div className="bg-[#09b8c3] rounded-tl-[4px] rounded-tr-[4px] relative text-white w-full justify-start px-6 h-16 flex items-center font-bold text-lg tracking-wide">
        <strong>
          Coming soon
        </strong>
        <div className="absolute -top-9 right-5">
          <Image src="/icon-stars.png" width="75" height="75" alt="Stars" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#ebebeb] rounded-bl-[4px] rounded-br-[4px] w-full justify-start px-6 pt-4 pb-10">
        <H2 className="text-secondary font-title" style={{ marginBottom: "0", fontWeight: 900 }}>
          Pre-sale
        </H2>
        
        <p className="mt-2">
          Registration now open
        </p>
        
        <div className="flex flex-row space-x-4 my-4">
          <Image src="/badges/icon-coolcats-badge.png" width="45" height="45" layout="fixed" alt="Badge" />
          <Image src="/badges/icon-deadfellaz-badge.png" width="45" height="45" layout="fixed" alt="Badge" />
          <Image src="/badges/icon-pudgypenguins-badge.png" width="45" height="45" layout="fixed" alt="Badge" />
        </div>
        
        <p>
          Honorary <strong>Pre-sale whitelist</strong> available for Cool Cats, Pudgy Penguins and Deadfellaz holders.
        </p>
        
        <div className="mt-7">
          <a href={discord_link} target="_blank" rel="noreferrer">
            <Button variant="primary" size="large" style={{ fontWeight: 700, paddingLeft: '24px', paddingRight: '24px' }}>
              Register on Discord
              <DiscordIcon className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
