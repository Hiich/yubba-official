import React, { FC } from 'react'
import LockIcon from '@/public/icon-lock.svg'
import { Button } from '@/components'
import { useRouter } from 'next/router'
export const MintingCard: FC<{}> = ({ children }) => {
  const router = useRouter()
  return (
    <div className="flex  flex-row items-start w-full px-4 mx-auto max-w-7xl">
      <div className="hidden align-top  w-24 md:flex content-start">
        <div className="ml-[-250px]">
          <Button
            variant="white"
            style={{
              fontWeight: 400,
              border: '1px solid #cfcfcf',
              justifyContent: 'center',
            }}
            block
            onClick={(e) => {
              e.preventDefault()
              window.location.href = '/minting'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  w-6 h-6 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Button>
        </div>
      </div>

      <div className="flex justify-center flex-1 flex-grow md:-ml-24">
        <div className="bg-[#FFFFFF] bg-opacity-50 border border-[#cfcfcf] rounded-[4px] text-center max-w-[500px] mx-auto">
          <div className="md:border-b md:border-[#cfcfcf] flex w-full justify-start md:justify-center items-center md:py-3 py-2 px-2">
            <LockIcon className="w-6 h-6 fill-current text-secondary" />
          </div>

          <div className="px-6 pt-7 pb-14">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MintingCard
