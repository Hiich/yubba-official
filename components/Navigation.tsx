import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Link as Scroll } from 'react-scroll'
import config from '@/modules/config'
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { Button } from '@/components'

type Props = {
  desktopLinks?: { name: string, href: string }[]
  mobileLinks?: { name: string, href: string }[]
  socials?: { name: string, icon: any, link: string }[]
  action: ReactNode
}

export default function Navigation({ action, mobileLinks = config.nav, desktopLinks = config.nav, socials = config.socials }: Props) {  
  const [open, setOpen] = useState(false)

  const onClickMobileLink = () => {
    setOpen(false)
  }

  const closeSlider = () => {
    setOpen(false)
  }

  return (
    <nav className="w-full">

      <div className="w-full bg-[#fdfdfd] bg-opacity-95 fixed z-20 shadow">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-start px-4 h-14">
            {/* mobile + desktop nav */}
            <div className="flex justify-start flex-1 mr-3 lg:flex-grow-0">
              <Link href="/" passHref>
                <a href="#" className="w-8 h-8">
                  <span className="sr-only">Yubba</span>
                  <Image
                    src="/yubba-logo.png"
                    alt="Yubba Logo"
                    width="40"
                    height="40"
                  />
                </a>
              </Link>
            </div>
            {/* mobile nav */}
            <div className="flex items-center space-x-4 lg:hidden ">
              {action}
              <MenuIcon className="z-30 w-6 h-6 text-secondary rouned-full" aria-hidden="true" onClick={() => setOpen(true)} />
            </div>
            {/* desktop nav */}
            <nav className="items-center justify-start hidden space-x-1 lg:flex">
              {desktopLinks.map(({ name, href }, index) => (
                <Fragment key={index}>
                  {href.startsWith('#')
                    ? (
                      <Scroll to={href} activeClass="active" spy smooth duration={500} key={index}>
                        <Button variant="default">
                          {name}
                        </Button>
                      </Scroll>
                    )
                    : (
                      <Link href={href} passHref>
                        <Button variant="default">
                          {name}
                        </Button>
                      </Link>
                    )}
                </Fragment>
              ))}
            </nav>
            {/* desktop CTA */}
            <div className="items-center justify-end hidden space-x-4 lg:flex md:flex-1 lg:w-0">
              {socials.map(({ icon: Icon, link }, index) => (
                <a href={link} target="_blank" rel="noreferrer" key={index}>
                  <Icon className="w-6 h-6 cursor-pointer fill-current text-secondary hover:text-primary" />
                </a>
              ))}
              {action}
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="inset-0 overflow-hidden lg:hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-150"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-150"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-xs">
                  <div className="flex flex-col h-full pb-6 overflow-y-scroll shadow-xl bg-secondary bg-opacity-95">
                    <div className="flex items-center justify-end flex-shrink-0 px-4 h-14">
                      <button
                        type="button"
                        className="text-white rounded-full focus:outline-none"
                        onClick={() => closeSlider()}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="relative flex flex-col flex-1 px-4 mt-6 text-white">                      

                      {mobileLinks.map(({ name, href }, index) => (
                        <Fragment key={index}>
                          {href.startsWith('#') 
                            ? (
                              <Scroll to={href} activeClass="active" spy smooth duration={500} key={index} onClick={onClickMobileLink}>
                                <Button variant="navbar" block className="group mb-4 justify-start!">
                                  {name}
                                  <ArrowRightIcon className="hidden group-focus:block" />
                                </Button>
                              </Scroll>
                            )
                            : (
                              <Link href={href} passHref>
                                <Button variant="navbar" block className="group mb-4 justify-start!" onClick={onClickMobileLink}>
                                  {name}
                                  <ArrowRightIcon className="hidden group-focus:block" />
                                </Button>
                              </Link>
                            )}                            
                        </Fragment>
                      ))} 
                       
                      <Link href="/terms" passHref>
                        <Button variant="navbar" block className="group mb-4 justify-start!" onClick={onClickMobileLink}>
                          Terms & conditions
                          <ArrowRightIcon className="hidden group-focus:block" />
                        </Button>
                      </Link>

                      {socials && socials.length > 0 && (
                        <div className="pl-3 mt-auto">
                          <p>Be a part of our community</p>
                          <div className="flex mt-4 space-x-4">
                            {socials.map(({ icon: Icon, link }, index) => (
                              <a href={link} target="_blank" rel="noreferrer" key={index} className="inline-block">
                                <Icon className="w-6 h-6 text-white cursor-pointer fill-current hover:text-gray-100" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>    
    </nav>
 
  )
}