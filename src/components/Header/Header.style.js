import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 2rem 0;
  z-index: 9999;
  position: absolute;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  /* this will help move the last element to the next line in mobile */
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  height: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 1.3rem;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;

    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
