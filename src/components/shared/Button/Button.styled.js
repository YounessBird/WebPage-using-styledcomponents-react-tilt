import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ cssProp }) => cssProp.bgColor};
  color: ${({ cssProp }) => cssProp.color || "#fff"};
  border-radius: 18px;
  box-shadow: 0px 13px 24px -7px ${({ cssProp }) => cssProp.shadowColor};
  padding: ${({ cssProp }) => cssProp.padding};
  border: ${({ cssProp }) => cssProp.border};
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px ${({ cssProp }) => cssProp.shadowColor};
    transform: translateY(-5px);
  }
  @media (max-width: 765px) {
    /* width: 100%; */
    padding: 0.3;
    margin-bottom: 1rem;
  }
`;
