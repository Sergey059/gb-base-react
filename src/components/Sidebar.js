import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [rooms] = useState(["Chat-1", "Chat-2", "Chat-3"]);
  return (
    <RoomsList>
      {rooms.map((room, index) => (
        <Room key={index}>{room}</Room>
      ))}
    </RoomsList>
  );
};

export default Sidebar;

const RoomsList = styled.aside`
  margin-right: 36px;
  padding: 15px;
  height: 100%;
  flex: 0 0 300px;
  border: 1px solid #f2f9ff;
  border-radius: 24px;
  background-color: #f5faff;
  box-shadow: 1px 1px 15px 0px rgb(0 123 255 / 3%);
`;
const Room = styled.div`
  padding: 24px 15px;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 16px;
`;
