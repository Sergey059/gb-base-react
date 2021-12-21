import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import IndexPage from "./pages/index";
import ProfilePage from "./pages/profile";
import ChatPage from "./pages/chat";
import NotFoundPage from "./pages/404";

import "./global.sass";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
