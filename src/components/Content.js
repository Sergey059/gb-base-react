import React from "react";
import styled from "styled-components";
import ChatContent from "./ChatContent";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <MainContent>
      <Chat>
        <Sidebar />
        <ChatContent />
      </Chat>
    </MainContent>
  );
};

export default Content;

const MainContent = styled.main`
  flex: 1 0 auto;
`;
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
