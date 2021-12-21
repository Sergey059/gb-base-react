import React, { useCallback, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTelegramPlane } from "react-icons/fa";

import Message from "../Message";
import "./messages.sass";
import { messagesSelector, sendMessage } from "../../store/messages";

const Messages = () => {
  const { roomId } = useParams();
  const messages = useSelector(messagesSelector(roomId));
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const ref = useRef(null);
  const refWrapper = useRef(null);

  const send = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        dispatch(sendMessage({ author, message: value || botMessage }, roomId));
        setValue("");
      }
    },
    [value, roomId, dispatch]
  );

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        send("Bot", "Hello from bot");
      }, 300);
    }
    return () => clearInterval(timerId);
  }, [messages, roomId, send]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="messages">
      <div className="messages__list" ref={refWrapper}>
        {messages.map((message, index) => (
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
        <button className="messages__btn" onClick={send}>
          <FaTelegramPlane />
        </button>
      </div>
    </div>
  );
};

export default Messages;
