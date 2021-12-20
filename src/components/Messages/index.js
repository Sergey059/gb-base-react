import React, { useCallback, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

import Message from "../Message";
import "./messages.sass";

const Messages = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");

  const ref = useRef(null);
  const refWrapper = useRef(null);

  const sendMessage = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        setMessages({
          ...messages,
          [roomId]: [
            ...(messages[roomId] ?? []),
            {
              author,
              message: value || botMessage,
              date: new Date().toLocaleTimeString(),
            },
          ],
        });
        setValue("");
      }
    },
    [messages, value, roomId]
  );

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMessages = roomMessages[roomMessages.length - 1];
    let timerId = null;

    if (roomMessages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        sendMessage("Bot", "Hello from bot");
      }, 300);
    }
    return () => clearInterval(timerId);
  }, [messages, roomId, sendMessage]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const roomMessages = messages[roomId] ?? [];
  return (
    <div className="messages">
      <div className="messages__list" ref={refWrapper}>
        {roomMessages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <div className="messages__form">
        <input
          className="messages__input"
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="messages..."
        />
        <button className="messages__btn" onClick={sendMessage}>
          <FaTelegramPlane />
        </button>
      </div>
    </div>
  );
};

export default Messages;
