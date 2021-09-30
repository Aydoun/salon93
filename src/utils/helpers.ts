import { format, isValid } from "date-fns";

export const isLogin = (): boolean => {
  return localStorage.getItem("app-token") !== null;
};

export const formatDate = (
  dateString: string | undefined,
  defaultFormat = "HH:mm dd/MM/yyyy"
): string => {
  if (!dateString) return "";
  const dataObj = new Date(dateString);
  return isValid(dataObj) ? format(dataObj, defaultFormat) : "";
};
