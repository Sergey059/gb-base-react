import React from "react";
import { useStyles } from "./use-styles";
import {HomeOutlined, SupervisorAccountOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";
export const Template = ({ chats, messages }) => {
  const styles = useStyles();
  return (
    <div id="app">
      <Link className={styles.linkHome} to={"/"}>
        <HomeOutlined fontSize="large" />
      </Link>
      <Link className={styles.linkProfile} to={"/profile"}>
        <SupervisorAccountOutlined fontSize="large" />
      </Link>
      <h1 className={styles.heading}>Chat</h1>
      <div className={styles.wrapper}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  );
};
