import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import "./chats.sass";
import Chat from "../Chat";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";

const Chats = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);
  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");
    const isValidRoomName = !conversations.includes(name);

    if (name && isValidRoomName) {
      dispatch(createConversation(name));
    } else {
      alert("Комната с таким названием уже существует");
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="rooms">
      <div className="rooms__list">
        {conversations.map((chat) => (
          <NavLink className="rooms__link" key={chat} to={`/chat/${chat}`}>
            <Chat title={chat} selected={chat === roomId} dispatch={dispatch} />
          </NavLink>
        ))}
      </div>
      <div className="rooms__form">
        <input className="rooms__input" type="text" placeholder="add chat..." />
        <button className="rooms__btn" onClick={createConversationByName}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Chats;
