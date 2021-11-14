import React from "react";
import styled from "styled-components";
import { ImRocket } from "react-icons/im";
import MessageUser from "./MessageUser";

const ChatContent = () => {
  return (
    <MessageBox>
      <ChatHeader>Header Chat</ChatHeader>
      <MessagesList>
        <MessageUser
          text="Lorem Ipsum - это текст-рыба, часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной рыбой"
        />
      </MessagesList>
      <ChatFooter>
        <form>
          <Input name="message" type="text" placeholder="Введите сообщение" />
          <Button>
            <ImRocket />
          </Button>
        </form>
      </ChatFooter>
    </MessageBox>
  );
};

export default ChatContent;

const MessageBox = styled.div`
  padding: 16px 0;
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;
const ChatHeader = styled.header`
  padding: 0 24px;
  line-height: 56px;
  border: 1px solid #f2f9ff;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 3%);
`;
const MessagesList = styled.div`
  padding: 24px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChatFooter = styled.footer`
  padding: 0 24px;
  form {
    display: flex;
  }
`;
const Input = styled.input`
  display: block;
  padding: 0 16px;
  width: 100%;
  height: 46px;
  border: 1px solid #f2f9ff;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 3%);
`;
const Button = styled.button`
  margin-left: 4px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f9ff;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 3%);
  &:hover {
    border-color: #8ca6c1;
    svg {
      fill: #8ca6c1;
    }
  }
  svg {
    width: 22px;
    height: 22px;
    fill: #acc1d7;
  }
`;
