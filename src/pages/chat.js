import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Chats from "../components/Chats";
import Messages from "../components/Messages";

const ChatPage = () => {
  return (
    <Layout pageTitle="Chat Page">
      <div className="chat-page">
        <Chats />
        <Routes>
          <Route
            path="/"
            element={<h2 className="messages__title">Выберите чат ...</h2>}
          />
          <Route path="/:roomId" element={<Messages />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default ChatPage;
