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
  const discord_link = 'https://discord.com/invite/yubbaworld'

  return (
    <div className={clsx('flex-col items-center', className)}>
      <div className="bg-[#09b8c3] rounded-tl-[4px] rounded-tr-[4px] relative text-white w-full justify-start px-6 h-16 flex items-center font-bold text-lg tracking-wide">
        <strong>Public Launch</strong>
        <div className="absolute -top-9 right-5">
          <Image src="/icon-stars.png" width="75" height="75" alt="Stars" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#ebebeb] rounded-bl-[4px] rounded-br-[4px] w-full justify-start px-6 pt-4 pb-10">
        <H2
          className="text-secondary font-title"
          style={{ marginBottom: '0', fontWeight: 900 }}
        >
          Public Launch
        </H2>

        <p className="mt-2">
          Pre-sale : November 20th
          <br />
          <br /> Public launch : November 21st
          <br />
          <br />
          Mint price : 0.07
          <br />
        </p>

        <div className="mt-7">
          <a href="/minting" rel="noreferrer">
            <Button
              variant="primary"
              size="large"
              style={{
                fontWeight: 700,
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              Minting on November 20th
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
