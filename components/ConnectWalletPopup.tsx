import React, { Fragment } from "react"
import { XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import Image from 'next/image'

interface Props {
  showPopup?: boolean
  closePopup: () => void
  onClickMetamask: () => void
  onClickWalletConnect: () => void
  onClickTrustWallet: () => void
}

export default function ConnectWalletPopup({ showPopup = false, closePopup, onClickMetamask, onClickWalletConnect, onClickTrustWallet }: Props) {
  return (
    <Transition appear show={showPopup} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closePopup}
        >     
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50"  />      
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block text-center w-full max-w-xs px-6 pt-6 pb-12 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded relative">
                <XIcon className="w-6 h-6 absolute right-2 top-2 fill-current text-secondary" onClick={() => closePopup()} />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-secondary"
                >
                  Connect wallet
                </Dialog.Title>

                <div className="mt-8 cursor-pointer" onClick={() => {
                  closePopup()
                  onClickMetamask()
                }}>
                  <Image src="/logo-metamask.png" layout="fixed" width="71" height="66" alt="Yubba Metamask" />
                  <p className="text-sm text-secondary">
                    Metamask
                  </p>
                </div>
                
                <div className="mt-8 cursor-pointer" onClick={() => {
                  closePopup()
                  onClickWalletConnect()
                }}>
                  <Image src="/logo-wallet-connect.png" layout="fixed" width="71" height="66" alt="Yubba Metamask" />
                  <p className="text-sm text-secondary">
                    WalletConnect
                  </p>
                </div>
                
                <div className="mt-8 cursor-pointer" onClick={() => {
                  closePopup()
                  onClickTrustWallet()
                }}>
                  <Image src="/logo-trust-wallet.png" layout="fixed" width="71" height="66" alt="Yubba Metamask" />
                  <p className="text-sm text-secondary">
                    Trust Wallet
                  </p>
                </div>
             
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}