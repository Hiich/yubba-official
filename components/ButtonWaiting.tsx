import React, { FC } from "react"
import { Button } from "@/components"
import Image from 'next/image'
import { ButtonProps } from "./Button/Button"


export const ButtonWaiting: FC<ButtonProps> = ({ variant, ...otherProps }) => (
  <Button variant="white" {...otherProps} style={{ border: '1px solid #cfcfcf', justifyContent: 'center' }}>
    <Image src="/icon-horloge.gif" layout="fixed" width="20" height="20" alt="Horloge" />
  </Button>
)

export default ButtonWaiting