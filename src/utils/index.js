import { formatDistance } from "date-fns";

export const commaFormat = (value) => {
  return value && value.toLocaleString("en-IN");
};

export const timeDistance = (dateTime) => {
  return dateTime && formatDistance(new Date(dateTime), new Date());
};
