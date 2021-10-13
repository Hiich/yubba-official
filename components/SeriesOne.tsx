import React from 'react'
import { Container, H1, H2, Presale } from '@/components'

export default function SeriesOne() {
  return (
    <section className="bg-[#052370] py-10 ">
      {/* <section className="bg-[#052370] py-10 h-[500px] md:h-[250px] -m-px"> */}
      <Container className="flex flex-col md:flex-row">

        <div className="w-full mb-16 md:w-7/12 md:mb-0">
          <H2 className="mt-0 text-white">
            NFT Collectibles <br /> Series one
          </H2>

          <br />

          <H1 className="text-white" style={{ marginTop: "0", marginBottom: "4px" }}>
            Foundation
          </H1>
          <H2 className="text-white" style={{ marginTop: "0", marginBottom: "0" }}>
            Collection
          </H2>
        </div>

         <div className="w-full md:w-5/12">
            <Presale className="flex" />
          </div> 

      </Container>
    </section>
  )
}
