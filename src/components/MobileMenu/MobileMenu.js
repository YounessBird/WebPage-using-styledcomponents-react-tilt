import styled from "styled-components";

const MobileMenu = styled.div`
  @media (max-width: 768px) {
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

export default MobileMenu;
