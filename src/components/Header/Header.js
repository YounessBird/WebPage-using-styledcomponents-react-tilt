import React, { useState } from "react";
import { StyledHeader, Nav, Logo, MenuLink, LinkWrapper } from "./Header.style";
import Button from "../shared/Button";
import { Container } from "../shared/Container";
import Hamburger from "../Hamburger";
import { theme } from "../style/theme";

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
          <Hamburger
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <LinkWrapper isOpen={isOpen}>
            <MenuLink href="">Search</MenuLink>
            <MenuLink href="">Login</MenuLink>
            <Button cssProp={theme.Buttons.primary}>Join Now</Button>
          </LinkWrapper>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
