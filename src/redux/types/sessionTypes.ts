interface Session {
  id: String;
}

export const GET_SESSIONS = "GET_SESSIONS";
export interface GetSessionStateType {
  sessions: Session[];
}

interface GetSessionsActionType {
  type: typeof GET_SESSIONS;
  payload: Session[];
}

export type SessionActionTypes = GetSessionsActionType;
