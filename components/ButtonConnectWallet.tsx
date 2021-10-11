import React, { FC } from "react";
import { Button } from ".";
import { ButtonProps } from "./Button/Button";

export const ButtonConnectWallet: FC<ButtonProps> = ({ variant, ...otherProps }) => (
  <Button variant="primary"  {...otherProps}  style={{ justifyContent: 'center' }} >
    Connect wallet
  </Button>
)

export default ButtonConnectWallet