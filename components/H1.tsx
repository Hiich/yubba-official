import clsx from 'clsx'
import React, { CSSProperties, FC } from 'react'

type Props = {
  className?: string
  style?: CSSProperties
}

export const H1: FC<Props> = ({ children, className, style }) => (
  <h1 className={clsx("mt-4 mb-5 text-3xl font-title font-bold uppercase tracking-[9px]", className)} style={style}>
    {children}
  </h1>
)

export default H1