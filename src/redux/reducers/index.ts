import { combineReducers } from "redux";
import sessions from "./sessions";
import income from "./income";

const rootReducer = combineReducers({
  sessions,
  income,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
