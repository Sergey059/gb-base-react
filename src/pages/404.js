import { Link } from "react-router-dom";
import Layout from "./../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h2>404: Страница не найдена</h2>
      <Link to="/">На главную</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
