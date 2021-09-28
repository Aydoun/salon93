export const isLogin = (): boolean => {
  return localStorage.getItem("app-token") !== null;
};
