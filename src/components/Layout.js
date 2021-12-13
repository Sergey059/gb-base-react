import React from "react";
import styled from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <SiteWrap>
      <GlobalStyle />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </SiteWrap>
  );
};

export default Layout;

const SiteWrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.main`
  flex: 1 0 auto;
`;
