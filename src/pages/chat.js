import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Template, MessageList, ChatList, ChatText } from "../components";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Template chats={<ChatList />} messages={<ChatText />} />}
      />
      <Route
        path="/:roomId"
        element={<Template chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
