import { nanoid } from "nanoid";

import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {
    room1: [
      {
        id: nanoid(),
        date: new Date().toLocaleTimeString(),
        message: "Hello, I'm Bot",
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
              id: nanoid(),
            },
          ],
        },
      };

    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return { ...state };

    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    default:
      return state;
  }
};
