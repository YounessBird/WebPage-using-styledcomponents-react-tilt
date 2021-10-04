import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;700;800;900&display=swap');
 * {
     margin: 0;
     padding: 0;
     outline: none;
     box-sizing: border-box;
 }
 body {
  font-family: "Raleway", sans-serif;
}
button {
  font-family: "Raleway", sans-serif;
}
`;
