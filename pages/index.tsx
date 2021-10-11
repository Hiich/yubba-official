import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { NextSeo as SEO } from 'next-seo'
import config from '@/modules/config'
import { useState, useEffect } from 'react'
import {
  CollectionPreview,
  Footer,
  Hero,
  Navigation,
  SeriesOne,
  Roadmap,
  Community,
  Team,
  TraitRarity,
  Button,
} from '@/components'

const IndexPage: NextPage = () => {
  useEffect(() => {
    let url = window.location.href.split('#');
    if (url) {
      let e = document.getElementById('#' + url[1]);
      if(e)  window.scrollTo({ top: e.offsetTop, behavior: "smooth" });
    }
  }, [])

  return (
    <>
      <SEO
        title="Unique NFT collection"
        description="Yubba World is a collection of randomly generated digital collectibles of various rarities living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
      />

      <Navigation
        action={
                    <></>
          // <Link href="/minting" passHref>
          //   <Button variant="primary">
          //     Get minting
          //   </Button>
          // </Link>
        }
      />
      
      <div className="py-[55px]">
        <Hero />

        <SeriesOne />

        <CollectionPreview />

        <TraitRarity />


        <Community />

        <Roadmap />

        <Team />

        <Footer />
      </div>
    </>
  )
}

export default IndexPage
