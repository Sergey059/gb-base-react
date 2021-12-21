import { sendMessage } from "./actions";

export const sendMessageWithBot =
  (message, roomId) => async (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));

    if (message.author !== "Bot" /* message.author === "User"*/) {
      setTimeout(() => {
        dispatch(
          sendMessage(
            { author: "Bot", message: "Hello bot from thunk" },
            roomId
          )
        );
      }, 500);
    }
  };
