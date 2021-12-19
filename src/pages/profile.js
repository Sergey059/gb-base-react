import { Routes, Route } from "react-router-dom";
import { Profile } from "../components";

export const ProfilePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};
