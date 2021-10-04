import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  padding-top: 120px;

  h5 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    color: #515151;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  width: 40%;
  justify-content: center;
  align-items: center;
  @media (max-width: 670px) {
    padding-left: 0;
    padding-top: 70px;
    width: auto;
  }
`;

export const Aside = styled.div`
  img {
    width: 130%;
  }
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;
