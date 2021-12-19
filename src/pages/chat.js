import React from "react";
import Layout from "../components/Layout";
import Chats from "../components/Chats";
import Messages from "../components/Messages";

const ChatPage = () => {
  return (
    <Layout pageTitle="Chat Page">
      <div className="chat-page">
        <Chats />
        <Messages />
      </div>
    </Layout>
  );
};

export default ChatPage;
