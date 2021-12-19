import React from "react";

import "./chat.sass";

const Chat = ({ title, selected, handleListItemClick }) => {
  return (
    <div className="chat">
      <h3
        className="chat__title"
        selected={selected}
        onClick={handleListItemClick}
      >
        {title}
      </h3>
    </div>
  );
};

export default Chat;
