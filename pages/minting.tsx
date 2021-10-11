import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextSeo as SEO } from 'next-seo'
import { useRouter } from 'next/router'
import { 
  Button,
  ButtonConnectWallet, 
  ButtonWaiting, 
  ButtonWallet, 
  ConnectWalletPopup, 
  Container, 
  MintingCard, 
  MyWalletPopup, 
  Navigation 
} from '@/components'

const desktopLinks = [
  { name: 'Minting', href: '/minting' },
]

const MintingPage: NextPage = () => {
  const [showConnect, setConnect] = useState(false)
  const [showWallet, setShowWallet] = useState(false)
  const [myWallet, setMyWallet] = useState(false)

  // === demo purpose - start
  const router = useRouter()
  const showWalletConnected = String(router.query.walletConnected)
  useEffect(() => {
    if (showWalletConnected === "yes") setMyWallet(true)
  }, [showWalletConnected])
  // === demo purpose - end

  function showMyWallet() {
    setShowWallet(true)
  }

  function hideMyWallet() {
    setShowWallet(false)
  }

  function showConnectWallet() {
    setConnect(true)
  }

  function hideConnectWallet() {
    setConnect(false)
  }  

  function onClickDisconnectWallet() {
    setMyWallet(false)
  }

  function onConnectMetamask() {
    console.log('click connect metamask')
    setMyWallet(true)
  }

  function onConnectWalletConnect() {
    console.log('click connect wallet connect')
    setMyWallet(true)
  }

  function onConnectTustWallet() {
    console.log('click trust wallet')
    setMyWallet(true)
  }

  return (
    <div className="h-screen bg-center bg-repeat-x bg-cover bg-bubble">
      <SEO
        title="Minting"
        description="Yubba World is a collection of randomly generated digital collectibles of various rarity living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
      />      

      <Navigation 
        desktopLinks={desktopLinks} 
        action={
          !myWallet 
            ? <ButtonConnectWallet
               onClick={showConnectWallet} />          
            : <ButtonWallet
                onClickMyWallet={showMyWallet}
                onClickDisconnectWallet={onClickDisconnectWallet} />
        }
      />

      <section className="py-8 pt-20">
        <Container>
          <div className="relative mx-auto mb-8 h-14 md:h-24">
            <Image src="/yubba-world-1line.png" layout="fill" objectFit="contain" alt="Yubba World" />
          </div>

          {/* minting card for countdown */}
          {/* <MintingCard>
            <p className="text-lg">
              Yubba minting will start in
            </p>
            <p className="mt-5 mb-8 text-3xl">
              <span className="font-bold">00 : 00 :</span> 45
            </p>
            <p className="mb-2 text-xs font-thin">
              Price per Yubba 0.05 ETH
            </p>
            <div className="w-full mx-auto md:w-3/4">
              <ButtonWaiting block />
            </div>
          </MintingCard> */}

          <MintingCard>
            <p className="mb-6 text-xl text-left text-secondary">
              How many Yubbas would you like?
            </p>
            <div className="w-full text-right md:w-1/2">
              <input type="number" />
              <p className="mb-2 text-xs font-thin">
                9,500 remaining <br />
                Price per Yubba: 0.05 ETH
              </p>
            </div>
            <div className="w-full mx-auto mt-6 md:w-3/4">
              <Button variant="primary" block>
                Get me some Yubbas
              </Button>
            </div>
          </MintingCard>          

        </Container>
      </section>

      <MyWalletPopup 
        showPopup={showWallet}
        closePopup={hideMyWallet}
        walletAddress="Oxc7g2kl6678hjs1ncgh3g"
        onDisconnectWallet={onClickDisconnectWallet}
      />

      <ConnectWalletPopup 
        showPopup={showConnect}
        closePopup={hideConnectWallet}
        onClickMetamask={onConnectMetamask}
        onClickWalletConnect={onConnectWalletConnect}
        onClickTrustWallet={onConnectTustWallet}
      />

      <section className="w-full py-8 mt-auto md:absolute md:bottom-0">
        <p className="text-center text-secondary">
          &copy; Copyright Yubba World 2021, All rights reserves
        </p>
      </section>
    </div>
  )
}

export default MintingPage
