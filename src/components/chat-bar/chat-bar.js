import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { AccountCircle, CloseSharp, AddSharp } from "@mui/icons-material";
import { useStyles } from "./use-styles";

export const ChatBar = ({ title, selected, handleListItemClick, setChats }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const handleDeleteChat = (event) => {
    setChats((chats) => [...chats.filter((item) => item !== roomId)]);
    navigate("/chat");
  };
  return (
    <ListItemButton
      className={styles.listItem}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="medium" className={styles.icon} />
      </ListItemIcon>
      <ListItemText className={styles.chatName} primary={title} />
      <CloseSharp
        className={styles.delete}
        fontSize="small"
        onClick={handleDeleteChat}
      />
    </ListItemButton>
  );
};

export const ChatList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const [chats, setChats] = useState([
    "room1",
    "room2",
    "room3",
    "room4",
    "room5",
  ]);
  const handleAddChat = () => {
    const lastID = parseInt(chats[chats.length - 1].split("room")[1]);
    setChats([...chats, "room" + (lastID + 1)]);
  };
  return (
    <div className={styles.wrapper}>
      <List className={styles.chatList} component="nav">
        {chats.map((chat) => (
          <Link className={styles.link} key={chat} to={`/chat/${chat}`}>
            <ChatBar
              title={chat}
              selected={chat === roomId}
              setChats={setChats}
            />
            <Divider />
          </Link>
        ))}
      </List>
      <AddSharp
        fontSize="large"
        onClick={handleAddChat}
        className={styles.add}
      />
    </div>
  );
};

export const ChatText = () => {
  const styles = useStyles();
  return <h1 className={styles.chatText}>pick the room...</h1>;
};
