import React, { Fragment } from "react"
import { XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import { Button } from "."

interface Props {
  showPopup?: boolean
  closePopup: () => void
  walletAddress?: string
  onDisconnectWallet: () => void
}

export default function MyWalletPopup({ showPopup = false, closePopup, walletAddress = "", onDisconnectWallet }: Props) {
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
              <div className="inline-block text-center w-full max-w-md px-6 pt-6 pb-12 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded relative">
                <XIcon className="w-6 h-6 absolute right-2 top-2 fill-current text-secondary" onClick={() => closePopup()} />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-secondary"
                >
                  Your wallet
                </Dialog.Title>

                <div className="mt-8">
                  <p className="text-sm text-secondary">
                    Your wallet address
                  </p>
                </div>

                <div className="mt-2">
                  <input type="text" value={walletAddress} readOnly className="bg-[#f5f5f5] rounded w-full max-w-xs text-center border-none" />
                </div>

                <div className="mt-8 w-full sm:w-1/2 mx-auto">
                  <Button variant="primary" block style={{ justifyContent: 'center' }} onClick={() => {
                    closePopup()
                    onDisconnectWallet()
                    }} >
                    Disconnect wallet
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}