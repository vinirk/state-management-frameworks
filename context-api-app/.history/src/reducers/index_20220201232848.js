import { profile } from "./profile";
import { home } from "./home";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  profile,
  home,
});
