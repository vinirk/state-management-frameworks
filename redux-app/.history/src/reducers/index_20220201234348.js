import { profile } from "./profile";
import { home } from "./home";
import { combineReducers } from "redux";

const reducers = combineReducers({
  profile,
  home,
});

export default reducers;
