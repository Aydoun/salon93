// import {
//   GET_SESSIONS,
//   SessionActionTypes,
//   Session,
// } from "../types/sessionTypes";
import faker from "faker";
import groupBy from "lodash.groupby";

export const getSessionsAction = () => {
  return [...new Array(15)].map((_, index) => ({
    id: `${index}`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.future().toISOString(),
    endTime: Math.random() > 0.5 ? faker.date.future().toISOString() : "",
    status: Math.random() > 0.5 ? 1 : 0,
    avatar: faker.image.avatar(),
    worker: `${faker.datatype.number()}`,
    workerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    paymentMethod: Math.random() > 0.5 ? "cash" : "pin",
    roomNumber: `${faker.datatype.number() % 5}`,
  }));

  // return {
  //   type: GET_SESSIONS,
  //   payload: data,
  // };
};

export const getIncomeAction = () => {
  const workers = [
    "Foxy Lane",
    "Diana Kley",
    "Ruby Rails",
    "Lily Fabian",
    "Norma Gould",
  ];

  const data = [...new Array(30)].map((_, index) => ({
    id: `${index}`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.future().toISOString(),
    endTime: faker.date.future().toISOString(),
    sessionId: `${index}`,
    total: (faker.datatype.number() % 130) + 50,
    services: Math.random() > 0.5 ? "sex" : "massage",
    workerName: workers[Math.floor(Math.random() * 100) % 5],
    paymentMethod: Math.random() > 0.5 ? "cash" : "pin",
  }));

  const groupped = groupBy(data, "workerName");

  const mainData = Object.keys(groupped).map((item, index) => {
    const obj = groupped[item];
    return {
      key: `${index}`,
      name: item,
      clockIn: faker.date.past().toISOString(),
      clockOut: faker.date.future().toISOString(),
      total: obj.reduce((acc, cur) => acc + cur.total, 0),
    };
  });

  // console.log(`groupped`, groupped);

  return { data, mainData, groupped };
};

export const getPresenceList = () => {
  const data = [...new Array(20)].map((_, index) => ({
    id: `${index}`,
    createdAt: faker.date.past().toISOString(),
    endTime: Math.random() > 0.5 ? faker.date.future().toISOString() : "",
    status: Math.random() > 0.5 ? 1 : 0,
    avatar: faker.image.avatar(),
    role: Math.random() > 0.85 ? "staff" : "worker",
    worker: `${faker.datatype.number()}`,
    workerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }));

  return groupBy(data, "role");
};
