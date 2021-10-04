import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/style/Global";
import logo from "./assets/logo.svg";
import Hero from "./assets/Hero.png";
import { Main, Header } from "./components";
import { theme } from "./components/style/theme";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header logo={logo} />
      <Main Hero={Hero} bg={bg} />
    </ThemeProvider>
  );
}

export default App;
