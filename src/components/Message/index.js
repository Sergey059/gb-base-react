import React from "react";

import "./message.sass";

const Message = ({ message }) => {
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
    </div>
  );
};

export default Message;
