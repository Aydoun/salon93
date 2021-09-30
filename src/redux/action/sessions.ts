import {
  GET_SESSIONS,
  SessionActionTypes,
  Session,
} from "../types/sessionTypes";
import faker from "faker";

export const getSessionsAction = (sessions: Session[]): SessionActionTypes => {
  const data = [...new Array(3)].map((_, index) => ({
    id: `${index}`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.future().toISOString(),
    endTime: faker.date.future().toISOString(),
    status: Math.random() > 0.5 ? 1 : 0,
    worker: `${faker.datatype.number()}`,
    workerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    paymentMethod: Math.random() > 0.5 ? "cash" : "pin",
    roomNumber: `${faker.datatype.number() % 5}`,
  }));

  return {
    type: GET_SESSIONS,
    payload: data,
  };
};
