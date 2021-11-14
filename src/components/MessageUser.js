import React from "react";
import styled from "styled-components";

const MessageUser = (props) => {
  return (
    <MessageBox>
      <p>{props.text}</p>
    </MessageBox>
  );
};

export default MessageUser;

const MessageBox = styled.div`
  max-width: 500px;
  padding: 16px;
  border: 1px solid #f2f9ff;
  border-radius: 16px;
  background-color: #f5faff;
`;
