import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./theme";
import { ChatPage, HomePage, ProfilePage } from "./pages";
import { store } from "./store";
import "./common.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="//*" element={<HomePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
