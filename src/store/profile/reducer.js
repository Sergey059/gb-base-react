import { NAME, SURNAME, SEX, SUBSCRIPTION } from "./types";

const initialSate = { userInfo: {} };

export const profileReducer = (state = initialSate, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        userInfo: {...state.userInfo, 'name':action.payload},
      };
    case SURNAME:
      return {
        ...state,
        userInfo: {...state.userInfo, 'surname':action.payload},
      };
    case SUBSCRIPTION:
      return {
        ...state,
        userInfo: {...state.userInfo, 'subscription':action.payload},
      };
    case SEX:
     return {
        ...state,
        userInfo: {...state.userInfo, 'sex':action.payload},
      };
    default:
      return state;
  }
};
