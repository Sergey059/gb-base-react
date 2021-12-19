import { Routes, Route } from "react-router-dom";
import { Home } from "../components";

export const HomePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
