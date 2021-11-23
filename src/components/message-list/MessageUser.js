import React from "react";
import styled from "styled-components";

const MessageUser = ({ message, bot }) => {
  return (
    <MessageBox>
      <MessageText>{message.text}</MessageText>
      <MessageMeta>
        <p>{message.author}</p>
        <div>{message.date}</div>
      </MessageMeta>
    </MessageBox>
  );
};

export default MessageUser;

const MessageBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;
const MessageMeta = styled.div`
  width: 60px;
  text-align: right;
  & p {
    font-size: 13px;
    font-weight: bold;
    color: #646464;
  }
  & div {
    line-height: 1.2;
    font-size: 12px;
  }
`;
const MessageText = styled.div`
  padding: 8px 16px;
  max-width: 500px;
  border: 1px solid #f2f9ff;
  border-radius: 16px;
  background-color: #f2f9ff;
`;
