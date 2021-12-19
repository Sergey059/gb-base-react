import React from "react";

import "./message.sass";

const Message = () => {
  return (
    <div className="message">
      <img className="message__avatar" src="./../img/avatar.jpg" alt="alt" />
      <div className="message__box">
        <div className="message__meta">
          <div className="message__author">Author</div>
          <div className="message__date">Date</div>
        </div>
        <p className="message__text">
          Презентация 3. Virtual DOM. Material UI. PropTypes
        </p>
      </div>
    </div>
  );
};

export default Message;
