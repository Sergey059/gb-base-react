import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
import MessageUser from "./MessageUser";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            text: "Ответ БОТА",
            date: new Date().toLocaleTimeString(),
            bot: true,
          },
        ]);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          text: value,
          date: new Date().toLocaleTimeString(),
          bot: false,
        },
      ]);
      setValue("");
    }
  };

  return (
    <MessagesContainer>
      <ChatHeader>Header Chat</ChatHeader>
      <ChatContent>
        {messages.map((text, index) => (
          <MessageUser message={text} key={index} />
        ))}
      </ChatContent>
      <ChatFooter>
        <Input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="message"
          type="text"
          placeholder="Введите сообщение"
        />
        <Button onClick={sendMessage}>
          <FaTelegramPlane />
        </Button>
      </ChatFooter>
    </MessagesContainer>
  );
};

export default MessagesList;

const MessagesContainer = styled.div`
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
const ChatContent = styled.div`
  margin: 24px 0;
  padding: 0 24px;
  max-height: 46vh;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: hidden;
`;
const ChatFooter = styled.footer`
  padding: 0 24px;
  display: flex;
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
