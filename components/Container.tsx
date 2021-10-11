import clsx from 'clsx'
import React, { FC } from 'react'

type Props = {
  maxWidth?: string
  className?: string
}

export const Container: FC<Props> = ({ maxWidth, children, className } = { maxWidth: 'max-w-2xl'}) => (
  <div className={clsx("container mx-auto max-w-3xl  px-6 md:px-4", maxWidth, className)}>
    {children}
  </div>
)

export default Container