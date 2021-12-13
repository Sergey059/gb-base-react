import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <SiteFooter>
      <p>
        © 2021 developed by
        <a href="https://sv-59.ru/">S.Vedernikov</a>
      </p>
    </SiteFooter>
  );
};

export default Footer;

const SiteFooter = styled.footer`
  p {
    padding: 24px 0;
    text-align: center;
    font-size: 13px;
    color: #dbdbdb;
  }
  a {
    margin-left: 4px;
    text-decoration: none;
    color: #dbdbdb;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #646464;
    }
  }
`;
