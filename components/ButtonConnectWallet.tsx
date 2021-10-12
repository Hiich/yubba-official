import React, { FC } from "react";
import { Button } from ".";
import { ButtonProps } from "./Button/Button";

export const ButtonConnectWallet: FC<ButtonProps> = ({ variant, ...otherProps }) => (
  <Button variant="primary"  {...otherProps}  style={{ justifyContent: 'center' , fontWeight: "lighter",fontSize:"12px", color:"#fffeff", height:"27px"}} >
    Connect wallet
  </Button>
)

export default ButtonConnectWallet
