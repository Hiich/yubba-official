import React, { Fragment, FC } from "react"
import { Menu, Transition } from '@headlessui/react'
import { ButtonProps } from "@/components/Button/Button"
import DropdownIcon from "@/public/icon-dropdown.svg"
import WalletIcon from '@/public/icon-wallet.svg'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type ButtonWalletProps = ButtonProps & {
  onClickMyWallet: () => void
  onClickDisconnectWallet: () => void
}

export const ButtonWallet: FC<ButtonWalletProps> = ({ variant, onClickMyWallet, onClickDisconnectWallet, ...otherProps }) => (
  <Menu as="div" className="relative inline-block pt-2 text-left">    
    <Menu.Button className="inline-flex justify-center items-center w-full h-[32px] rounded-full border border-[#cfcfcf] shadow-sm pr-2 bg-white text-secondary">
      <div className="border border-[#cfcfcf] rounded-full  w-10 h-10 bg-white">
        <WalletIcon className="w-8 h-8 pt-[10px] pl-[8px] stroke-current" />
      </div>
      <DropdownIcon className="pt-[10px] pl-[6px] h-6 w-6 ml-1 fill-current" aria-hidden="true" />
    </Menu.Button>    

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-secondary ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={() => onClickMyWallet()}
                className={classNames(
                  active ? 'text-primary' : 'text-secondary',
                  'block px-4 py-2 text-sm text-right cursor-pointer focus:text-primary'
                )}
              >
                Your wallet
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={() => onClickDisconnectWallet()}
                className={classNames(
                  active ? 'text-primary' : 'text-secondary',
                  'block w-full text-right px-4 py-2 text-sm cursor-pointer focus:text-primary'
                )}
              >
                Disconnect wallet
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)

export default ButtonWallet