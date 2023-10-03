import React from "react";
import Text from "./components/text/Text";
import Form from "./components/form/Form";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/global-styles/GlobalStyles";
// @ts-ignore
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props {
  brickRed: string;
  green: string;
  violet: string;
  dark: string;
  white: string;
}

const defaultTheme: Props = {
  brickRed: "rgb(255, 121, 121)",
  green: "rgb(56, 204, 139)",
  violet: "rgb(94, 84, 164)",
  dark: "rgb(61, 59, 72)",
  white: "rgb(255, 255, 255)",
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Text />
            <Form />
          </Container>
        </Wrapper>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("images/bg-intro-mobile.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.brickRed};
  padding-top: 88px;
  padding-bottom: 68px;
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;
const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-inline: 40px;
  }
`;
