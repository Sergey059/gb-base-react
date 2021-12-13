import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <h2>Страница профиля</h2>
      <Link to="/">На главную</Link>
    </Layout>
  );
};

export default ProfilePage;
