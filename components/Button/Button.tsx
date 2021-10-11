import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

type Size =
  | 'regular'
  | 'large'

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'white'
  | 'navbar'

export interface SharedProps {
  active?: boolean
  block?: boolean
  children?: ReactNode
  disabled?: boolean
  size?: Size
  variant?: Variant
}

export interface ButtonAsButtonProps extends SharedProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonAsAnchorProps extends SharedProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a'
}

export interface ButtonAsOtherProps extends SharedProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: string
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps

type Ref =
  | ReactNode
  | HTMLElement
  | string

const Button = React.forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    as: Component = 'button',
    block = false,
    active = false,
    disabled = false,
    size = 'regular',
    variant = 'default',
    className,
    children,
    ...other
  } = props

  const classnames = clsx(className, styles.btn, {
    // variant
    [styles['btn-default']]: variant === 'default',
    [styles['btn-primary']]: variant === 'primary',
    [styles['btn-secondary']]: variant === 'secondary',
    [styles['btn-white']]: variant === 'white',
    [styles['btn-navbar']]: variant === 'navbar',
    // size
    [styles['btn-regular']]: size === 'regular',
    [styles['btn-large']]: size === 'large',
    // other
    [styles['btn-block']]: block,
    [styles.active]: active,
    [styles.disabled]: disabled,
  })

  return (
    // @ts-ignore
    <Component className={classnames} ref={ref} {...other}>
      {children}
    </Component>
  )
})

export default Button
