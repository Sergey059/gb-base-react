import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Message from "../Message";

import "./messages.sass";

const Messages = () => {
  const [value, setValue] = useState([]);
  return (
    <div className="messages">
      <div className="messages__list">
        <Message />
      </div>
      <form className="messages__form">
        <input
          className="messages__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="messages..."
        />
        <button className="messages__btn">
          <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};

export default Messages;
