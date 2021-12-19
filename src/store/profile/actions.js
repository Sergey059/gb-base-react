import { NAME, SURNAME, SEX, SUBSCRIPTION } from "./types";

export const name = (value) => ({ type: NAME, payload: value });
export const surname = (value) => ({ type: SURNAME, payload: value });
export const subscription = (value) => ({ type: SUBSCRIPTION, payload: value });
export const sex = (value) => ({ type: SEX, payload: value });