import React from "react";
import { StyledHamburger } from "./Hamburger.styled";
const Hamburger = ({ onClick }) => {
  return (
    <StyledHamburger onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};
export default Hamburger;
