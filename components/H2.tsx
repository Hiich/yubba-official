import clsx from 'clsx'
import React, { CSSProperties, FC } from 'react'

type Props = {
  className?: string
  style?: CSSProperties
}

export const H2: FC<Props> = ({ children, className, style }) => (
  <h1 className={clsx(className, "mt-4 mb-5 text-xl font-extralight uppercase tracking-[6px]")} style={style}>
    {children}
  </h1>
)

export default H2