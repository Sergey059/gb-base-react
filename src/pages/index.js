import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h2>Главная страница</h2>
      <Link to="/profile">Войти в профиль</Link>
      <Link to="/chat">Войти в чат</Link>
    </Layout>
  );
};

export default IndexPage;
