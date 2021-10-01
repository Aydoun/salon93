export interface Session {
  id: string;
  createdAt: string;
  updatedAt: string;
  endTime: string;
  status: number;
  worker: string;
  workerName: string;
  paymentMethod: string;
  roomNumber: string;
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
