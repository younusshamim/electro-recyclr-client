import { formatDistance } from "date-fns";

export const commaFormat = (value) => {
  return value.toLocaleString("en-IN");
};

export const timeDistance = (dateTime) => {
  return formatDistance(new Date(dateTime), new Date());
};
