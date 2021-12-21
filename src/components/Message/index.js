import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { deleteMessageById } from "../../store/messages";
import "./message.sass";

const Message = ({ message }) => {
  const dispatch = useDispatch();
  const { roomId } = useParams();

  return (
    <div className="message">
      <img className="message__avatar" src="./../img/avatar.jpg" alt="alt" />
      <div className="message__box">
        <div className="message__meta">
          {/* <div className="message__author">{message.author}</div> */}
          <div className="message__date">{message.date}</div>
        </div>
        <p className="message__text">{message.message}</p>
      </div>
      <button
        className="message__delete"
        onClick={() => dispatch(deleteMessageById(message.id, roomId))}
      >
        <GrClose />
      </button>
    </div>
  );
};

export default Message;
