import { SEND_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {
    room1: [
      {
        date: new Date().toLocaleTimeString(),
        message: "Hello, I`m Bot",
        author: "Bot",
      },
    ],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
              date: new Date().toLocaleTimeString(),
            },
          ],
        },
      };

    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return { ...state };

    default:
      return state;
  }
};
