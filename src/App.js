import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";

const App = () => {
  return (
    <SiteWrap>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </SiteWrap>
  );
};

export default App;

const SiteWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
