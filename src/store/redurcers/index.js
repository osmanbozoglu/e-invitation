import { combineReducers } from "redux";

import User from "./userReducer";

const rootReducer = combineReducers({
  User: User
});

export default rootReducer;
