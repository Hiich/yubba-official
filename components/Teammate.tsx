import { FC } from "react"
import Image from 'next/image'
import clsx from "clsx"
import TwitterIcon from '@/public/icon-twitter.svg'
import MailIcon from '@/public/icon-mail.svg'

type Props = {
  imageUrl: string
  imageAlt: string
  name: string
  job?: string
  twitter?: string
  email?: string
  badges?: string[]
  className?: string  
}

export const Teammate: FC<Props> = ({ imageUrl, imageAlt, name, job, twitter, email, badges, className }) => {
  return (
    <div className={clsx(className, "flex flex-col w-full")}>
      <div className="relative w-[100px] mx-auto">
        <Image src={imageUrl} width="75" height="75" alt={imageAlt} className="rounded-full" placeholder="blur" blurDataURL={imageUrl} />
        
        {badges && (
          <div className="absolute flex flex-col flex-wrap-reverse justify-end top-0 bottom-0 h-[75px] right-0">
            {badges.map((badge, key) => (
              <Image src={badge} width="25" height="25" alt={badge} key={key} />
            ))}            
          </div>
        )}
      </div>
      
      <div>
        <p className="font-bold">{name}</p>
        {job && <p className="text-sm">{job}</p>}
      </div>
      
      {twitter && email && (
        <div className="flex justify-center space-x-4 mt-3">
          <a href={twitter} target="_blank" rel="noreferrer">
            <TwitterIcon className="w-6 h-6 text-secondary fill-current hover:text-primary focus:text-primary cursor-pointer" />
          </a>
          <a href={`mailto:${email}`}>
            <MailIcon className="w-6 h-6 text-secondary fill-current hover:text-primary focus:text-primary cursor-pointer" />
          </a>
        </div>
      )}
    </div>
  )
}

export default Teammate