import React, { FC } from "react";
import { Button } from ".";
import { ButtonProps } from "./Button/Button";

export const ButtonClaimNFT: FC<ButtonProps> = ({ variant, ...otherProps }) => (
  <Button variant="primary"  {...otherProps}  style={{ justifyContent: 'center' , fontWeight: "lighter",fontSize:"12px", color:"#fffeff", height:"27px"}} >
    Claim Yubbas
  </Button>
)

export default ButtonClaimNFT 