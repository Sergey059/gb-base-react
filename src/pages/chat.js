import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import ChatList from "../components/chat-list/ChatList";
import MessagesList from "../components/message-list/MessagesList";

const СhatPage = () => {
  return (
    <Layout>
      <Chat>
        <ChatList />
        <MessagesList />
      </Chat>
    </Layout>
  );
};

export default СhatPage;

const Chat = styled.div`
  padding: 24px 48px;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid rgb(0 123 255 / 4%);
  border-radius: 24px;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 7%);
`;
