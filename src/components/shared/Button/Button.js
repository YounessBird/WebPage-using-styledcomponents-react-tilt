import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ children, cssProp }) => {
  return <StyledButton cssProp={cssProp}>{children}</StyledButton>;
};

export default Button;
