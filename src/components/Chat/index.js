import React from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { deleteConversation } from "../../store/conversations";

import "./chat.sass";

const Chat = ({ title, selected, handleListItemClick, dispatch }) => {
  const navigate = useNavigate();
  const deleteRoom = (e) => {
    dispatch(deleteConversation(title));
    setTimeout(() => navigate("/chat"), 100);
  };
  return (
    <div className="chat">
      <h3
        className="chat__title"
        selected={selected}
        onClick={handleListItemClick}
      >
        {title}
      </h3>
      <button className="chat__delete" onClick={deleteRoom}>
        <GrClose />
      </button>
    </div>
  );
};

export default Chat;
