import React from "react";
import { Container } from "../shared/Container";
import styled from "styled-components";
import { StyledMain, Section, Aside } from "./Main.styled";
import Button from "../shared/Button";
import { theme } from "../style/theme";
import Tilt from "react-tilt";

const Main = ({ Hero, bg }) => {
  return (
    <BackgroundImg bg={bg}>
      <Blur>
        <Container>
          <StyledMain>
            <Section>
              <Left>
                <h5>Online education for people of all ages</h5>
                <h1>Learn</h1>
                <h1>Anything.</h1>
                <h1>Anytime.</h1>
                <h1>Anywhere.</h1>
              </Left>
              <BtnContainer>
                <Button cssProp={theme.Buttons.readMore}>Read More</Button>
                <Button cssProp={theme.Buttons.secondary}>
                  7 Day Free Trial
                </Button>
              </BtnContainer>
            </Section>
            <Aside>
              <TiltWrapper options={{ max: 25 }}>
                <img src={Hero} />
              </TiltWrapper>
            </Aside>
          </StyledMain>
        </Container>
      </Blur>
    </BackgroundImg>
  );
};

const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const Blur = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(35px);
  height: 100vh;
  width: 100%;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  @media (max-width: 670px) {
    margin-right: auto;
  }
`;
const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;
const Left = styled.div`
  @media (max-width: 670px) {
    width: 100%;
    padding: 1rem;
  }
`;
export default Main;
