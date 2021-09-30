import {
  GET_SESSIONS,
  GetSessionStateType,
  SessionActionTypes,
} from "../types/sessionTypes";

const initialStateGetSessions: GetSessionStateType = {
  sessions: [],
};

const sessions = (
  state = initialStateGetSessions,
  action: SessionActionTypes
) => {
  switch (action.type) {
    case GET_SESSIONS:
      return action.payload;

    default:
      return state;
  }
};

export default sessions;
