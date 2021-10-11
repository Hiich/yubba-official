import React, { FC } from 'react'
import LockIcon from '@/public/icon-lock.svg'

export const MintingCard: FC<{}> = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF] bg-opacity-50 border border-[#cfcfcf] rounded-sm text-center max-w-[350px] mx-auto">
      <div className="md:border-b md:border-[#cfcfcf] flex w-full justify-start md:justify-center items-center md:py-3 py-2 px-2">
        <LockIcon className="w-6 h-6 fill-current text-secondary" />
      </div>

      <div className="px-6 pt-7 pb-14">
        {children}       
      </div>
    </div>
  )
}

export default MintingCard