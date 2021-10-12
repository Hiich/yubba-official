import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextSeo as SEO } from 'next-seo'
import { useRouter } from 'next/router'
import styles from './styles.module.css'

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
          myWallet
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

          {/* minting card form }
          <MintingCard>
            <p className="mb-6 -mt-6 text-xl font-bold text-left md:mt-0 text-secondary">
              How many Yubbas would you like?
            </p>
            <div className="w-full pb-6 text-right " style={{ borderBottom: "dotted 0.3px #a6a5a5" }}>
              <div className="w-full -ml-0 h-9" style={{ justifyContent: "center" }}>
                <div className={styles.selectdiv} >
                  <label>
                    <select >
                      <option selected> 1 </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </label>
                </div>
              </div>
              <div>
                <p className="mt-4 mb-2 text-xs font-thin text-right text-secondary">
                  9,500 remaining <br />
                  Price per Yubba: 0.05 ETH
                </p>
              </div>

            </div>
            <div className="flex mt-3">
              <div className="flex-1 text-2xl text-left font-title">Total</div>
              <div className="flex-1 text-2xl text-right font-title">1.5 ETH <Image src="/icon-eth.png" layout="fixed" width={13} height={20} alt="Eth" />
              </div>
            </div>
            <div className="w-full mx-auto mt-6 md:w-3/4">
              <Button variant="primary" className="px-6 py-3 rounded-full " style={{ justifyContent: "center", fontWeight: "lighter", height: "40px", color: "#fffeff" }} block>
                Get me some Yubbas
              </Button>
            </div>
          </MintingCard>
          
          {/* minting card for waitting /}
           <MintingCard>
            <div className="mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary">
            Transfering Yubbas <br/> to your wallet
            </div>
            <div className="h-[84px] relative mx-aut ">
             <Image src="/loader.gif" layout="fill" objectFit="contain" alt="Yubba World" />
            </div>
          </MintingCard>
          {/* minting card for thankyou */}
           
          <MintingCard>
            <div className="mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary">
              Transfer complete <br />Yubba dubba dooo… 🎉
            </div>
            <div className="font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ">
              Thank you
            </div>
          </MintingCard>
          {/**/}
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

      <section className="w-full py-8 -mt-10 md:mt-auto md:absolute md:bottom-0">
        <p className="text-xs text-center text-secondary">
          &copy; Copyright Yubba World 2021, All rights reserved
        </p>
      </section>
    </div>
  )
}

export default MintingPage
