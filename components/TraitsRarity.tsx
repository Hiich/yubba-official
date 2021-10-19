import React, { CSSProperties, ReactNode } from 'react'
import { Container, H1, H2 } from '@/components'
import Image from 'next/image'
import styles from './TraitsRarity.module.css'
import clsx from 'clsx'

function RowTokenInfo({ info, border = true }: { info: string, border?: boolean }) {
  return (
    <div className={clsx("flex flex-row min-h-[14px]", border && "border-b border-white border-dotted")}>
      <div className="flex justify-start w-6 pt-6">
        <div className="h-2 w-2 rounded-full bg-[#e74094]"></div>
      </div>
      <div className="flex flex-1 py-4 text-white">
        {info}
      </div>
    </div>
  )
}

function Trait({ children, className, style }: { children: ReactNode, className?: string, style?: CSSProperties }) {
  return (
    <div className={clsx("flex justify-center items-center h-9 rounded font-medium text-secondary px-6 bg-[#fbfafa] border border-[#979797]", className)} style={style}>
      {children}
    </div>
  )
}

function RowComposition({ layer, children, underPlus }: { layer: number, children: ReactNode, underPlus?: 1 | 2 } ) {
  return (
    <>
      <div className="flex items-center h-[60px]">
        <div className="flex w-20">
          <div className="h-9 w-9 bg-[#005dbd] font-title rounded-full text-white flex items-center justify-center">
            {layer}
          </div>
        </div>
        <div className="flex flex-row justify-between flex-1">
          {children}
        </div>
      </div>
      {underPlus && (
        <div className="flex items-center h-2">
          <div className="flex w-20"></div>
          <div className="flex-grow ml-8 font-extrabold font-title">
            +
          </div>
          <div className="flex-grow font-extrabold ml-28 font-title">
            {underPlus === 2 && '+'}
          </div>
        </div>
      )}
    </>
  )
}

function RowRarity({ category, number }: { category: string, number: string }) {
  return (
    <div className="flex items-center h-12 border-b-[1px] border-dotted border-[#342c30]">
      <div className="flex flex-1 w-full font-bold">
        {category}
      </div>
      <div className="flex">
        {number}
      </div>
    </div>
  )
}

export default function TraitsRarity() {
  return (
    <>
      <section className="bg-[#b2c2d3] h-[250px] md:h-[300px] py-8">
        <Container>        
          <div className="relative clear-left">
            {/* mobile version of Yubbas */}
            <div className="absolute  md:-right-10 right-10  top-[-90px] md:hidden" >
              <Image src="/yubba-blue.png" height={99} width={89} layout="fixed" alt="Yubba Blue" />
            </div>
            <div className="absolute md:left-40 md:-top-10 left-2 -top-10 md:hidden " >
              <Image src="/yubba-lightblue.png" height={181} width={189} layout="fixed" alt="Yubba Blue" />
            </div>

            {/* desktop version of Yubbas*/}
            <div className="hidden md:block absolute  md:-right-10 right-10  top-[-95px]  " >
              <Image src="/yubba-blue.png" height={157} width={144} layout="fixed" alt="Yubba Blue" />
            </div>
            <div className="absolute hidden md:block md:left-40 md:-top-10 left-2 -top-10 " >
              <Image src="/yubba-lightblue.png" height={231} width={225} layout="fixed" alt="Yubba Blue" />
            </div>
            <div className="hidden md:block absolute  md:right-20  top-[140px] " >
              <Image src="/yubba-yellow.png" height={193} width={174} layout="fixed" alt="Yubba Blue" />
            </div>
            <div className="hidden md:block absolute  md:-right-20  top-[350px] " >
              <Image src="/yubba-zestpatch.png" height={109} width={100} layout="fixed" alt="Yubba Blue" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#b2c2d3]">
        <Container>
          <div className="rounded pt-10 pb-10  px-16 w-full mb-28 md:w-[450px]" style={{ backgroundImage: 'linear-gradient(152deg, #473c41 10%, #342c30 79%)' }}>            
            <H2 className="text-white font-title">TOKEN INFO</H2>
            <RowTokenInfo info="10,000 Yubbas Available" />
            <RowTokenInfo info="ERC-721 Contract" />
            <RowTokenInfo info="MetaMask required for minting" />
            <RowTokenInfo info="4% Yubba tax on secondary market sales used for Yubba World housekeeping" border={false} />            
          </div>

          <div id="#traits-rarity" className="pt-16"></div>
          <H1 className="text-title text-secondary">Traits & Rarities</H1>

          <div className="mt-8 mb-10 text-secondary">
            Yubba characters have been designed with hundreds of different traits and attributes and generated from 5-6 composition layers.
          </div>

          <div className="flex flex-wrap w-full space-x-0 space-y-20 sm:pt-10 sm:space-y-0 sm:flex-nowrap sm:space-x-20 text-secondary">                                                                
            {/* traits composition */}
            <div className="w-full sm:w-1/2">
              <div className="mb-4 text-xl font-bold">
                  Traits composition
              </div>

              <div className="flex items-center h-10 border-dotted border-b-[1px] border-[#342c30] mb-2">
                <div className="flex w-20">
                  Layers
                </div>
                <div className="flex flex-1">
                  Traits
                </div>
              </div>
              
              <RowComposition layer={6} underPlus={2}>
                <Trait>
                  Headdress
                </Trait>
                <Trait className="w-[103px]" style={{ justifyContent: 'start' }}>
                  <Image src="/forbidden.png" height={20} width={20} layout="fixed" alt="Forbidden" />
                </Trait>
              </RowComposition>
              
              <RowComposition layer={5} underPlus={1}>
                <Trait>Eye</Trait>
                <div className="flex items-center">or</div>
                <Trait>Helmet</Trait>
              </RowComposition>
              
              <RowComposition layer={4} underPlus={1}>
                <Trait>Mouth</Trait>
              </RowComposition>

              <RowComposition layer={3} underPlus={1}>
                <Trait>Skin</Trait>
              </RowComposition>

              <RowComposition layer={2} underPlus={1}>
                <Trait>Face</Trait>
              </RowComposition>

              <RowComposition layer={1}>
                <Trait>Background</Trait>
              </RowComposition>                                  
            </div>

            {/* rarity distribution */}
            <div className="w-full sm:w-1/2">
              <div className="mb-4 text-xl font-bold">
                Rarity distribution
              </div>

              <div className="flex items-center h-10 border-dotted border-b-[1px] border-[#342c30]">
                <div className="flex flex-1 w-full">
                  Rarity categories
                </div>
                <div className="flex">
                  No. of Yubbas
                </div>
              </div>
              
              <RowRarity category="1. Mythical" number="7" />
              <RowRarity category="2. Legendary" number="93" />
              <RowRarity category="3. Elite" number="900" />
              <RowRarity category="4. Rare" number="1,700" />
              <RowRarity category="5. Uncommon" number="3,000" />
              <RowRarity category="6. Common" number="4,300" />                                                                         
            </div>                                
          </div>
        </Container>
      </section>
    </>
  )
}
