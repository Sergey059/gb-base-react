import { TOGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

export const togleVisibleProfile = () => {
  return { type: TOGLE_VISIBLE_PROFILE };
};

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
