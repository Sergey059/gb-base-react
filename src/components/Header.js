import React from "react";
import styled from "styled-components";

const Header = () => {
  return <SiteTitle>Урок 3. Virtual DOM. Material UI. PropTypes</SiteTitle>;
};

export default Header;

const SiteTitle = styled.h1`
  margin-bottom: 60px;
  padding: 24px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  color: #dbdbdb;
`;
