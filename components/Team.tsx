import React from 'react'
import { Container, H1, H2, Teammate } from '@/components'
import config from '@/modules/config'

export const Team = () => {
  const { founders, investors } = config

  const founder1 = founders[0]
 

  const investor1 = investors[0]
  const investor2 = investors[1]
  const investor3 = investors[2]
  const investor4 = investors[3]
  const investor5 = investors[4]
  const investor6 = investors[5]

  return (
    <section className="pt-20 my-16" id="#team">      
      <Container>

        <H1 className="mb-5 text-center text-secondary">TEAM</H1>

        <div className="bg-[#FFFFFF] bg-opacity-50 rounded border border-[#cfcfcf] px-12 py-5 pb-10 text-center">
          
          <H2 className="mt-2 mb-8 text-secondary">Founders</H2>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <Teammate {...founder1} className="md:col-start-2" />
          </div>

          <H2 className="mt-16 mb-8 text-secondary">Investors & Advisors</H2>
          
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <Teammate {...investor1} />
            <Teammate {...investor2} />
            <Teammate {...investor3} />
            <Teammate {...investor4} />
            <Teammate {...investor5} className="md:col-start-2" />
            <Teammate {...investor6} />            
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Team
