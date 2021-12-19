import {
  useRef,
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send, ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import debounce from "lodash.debounce";
// import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Message = ({ message, refWrapper }) => {
  const styles = useStyles(message);
  const refMessage = useRef(null);

  useEffect(() => {
    let block = refWrapper.current;
    let isBottom = block?.scrollTop + window.innerHeight >= block?.scrollHeight;
    if (isBottom) {
      refMessage.current?.scrollIntoView();
    }
  }, [refMessage, refWrapper]);
  return (
    <div ref={refMessage} className={styles.messageCart}>
      <p className={styles.messageCartAuthor}>{message.author}</p>
      <p className={styles.messageCartText}>{message.text}</p>
      <p className={styles.messageCartTime}>{message.time}</p>
    </div>
  );
};

export const MessageList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refWrapper = useRef(null);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  const addMessage = useCallback(
    (author = "user", botMessage) => {
      if (value || botMessage) {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              text: botMessage || value,
              author,
              time: new Date().toString().slice(4, 25),
            },
          ],
        });
        if (!botMessage) setValue("");
      }
    },
    [messageList, value, roomId]
  );

  useLayoutEffect(() => {
    let block = refWrapper.current;
    document.querySelector(".hidden").setAttribute("visibility", "hidden");
    const cb = debounce(() => {
      let isBottom =
        block?.scrollTop + window.innerHeight >= block?.scrollHeight;
      if (!isBottom) {
        document.querySelector(".hidden").setAttribute("visibility", "visible");
      } else {
        document.querySelector(".hidden").setAttribute("visibility", "hidden");
      }
    }, 200);

    if (refWrapper.current) {
      block?.addEventListener("scroll", cb);
    }

    return () => block?.removeEventListener("scroll", cb);
  }, [refWrapper]);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  useEffect(() => {
    const roomMessages = messageList[roomId] ?? [];
    let timer = null;
    if (
      roomMessages.length &&
      roomMessages[roomMessages.length - 1].author === "user"
    ) {
      timer = setTimeout(() => {
        addMessage("robot", "Hi, I am Robot.");
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [messageList, roomId, addMessage]);

  const roomMessages = messageList[roomId] ?? [];
  return (
    <div className={styles.messageList} ref={refWrapper}>
      <ArrowDropDownCircleOutlined
        fontSize="large"
        className={`${styles.downButton} hidden`}
        onClick={() => {
          refWrapper.current?.scrollTo(0, refWrapper.current?.scrollHeight);
        }}
      />
      {roomMessages.map((message, i) => (
        <Message message={message} refWrapper={refWrapper} key={i.toString()} />
      ))}
      <div className={styles.messageComponent}>
        <div className={styles.messageForm}>
          <Input
            ref={ref}
            className={styles.input}
            placeholder="Message..."
            onChange={handleChangeValue}
            value={value}
            onKeyPress={handlePressInput}
            endAdornment={
              <InputAdornment position="end">
                <Send className={styles.icon} onClick={addMessage} />
              </InputAdornment>
            }
          />
        </div>
      </div>
    </div>
  );
};
