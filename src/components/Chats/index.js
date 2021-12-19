import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./chats.sass";
import Chat from "../Chat";

const Chats = () => {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3"]);

  return (
    <div className="rooms">
      <div className="rooms__list">
        {chats.map((chat) => (
          <NavLink className="rooms__link" key={chat} to={`/chat/${chat}`}>
            <Chat title={chat} selected={chat === roomId} />
          </NavLink>
        ))}
      </div>
      <button className="rooms__add">
        Add Chat
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Chats;
